"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Trophy, CheckSquare, ShoppingBag, Menu, X, LogIn, UserPlus, Home, BarChart } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { href: "/", label: "Home", icon: <Home className="h-4 w-4 mr-2" /> },
    { href: "/dashboard", label: "Dashboard", icon: <BarChart className="h-4 w-4 mr-2" /> },
    { href: "/tasks", label: "Tasks", icon: <CheckSquare className="h-4 w-4 mr-2" /> },
    { href: "/leaderboard", label: "Leaderboard", icon: <Trophy className="h-4 w-4 mr-2" /> },
    { href: "/shop", label: "Rewards Shop", icon: <ShoppingBag className="h-4 w-4 mr-2" /> },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <span
            className={cn(
              "font-bold text-xl tracking-tight",
              "edge-light-text", // Replace glow with edge lighting
            )}
          >
            Solo Lvlng
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-primary relative group",
                pathname === link.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {link.icon}
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full",
                  "dark:hover-glow-purple hover-glow-blue",
                  pathname === link.href ? "w-full" : "",
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Link href="/login">
            <Button variant="outline" size="sm" className="edge-light dark:hover-glow-purple hover-glow-blue">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" className="edge-light dark:hover-glow-purple hover-glow-blue">
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden flex items-center justify-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          type="button" // Add type="button" to ensure it doesn't submit forms
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 grid gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary edge-light-text" // Replace glow with edge lighting
                    : "text-muted-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-4 border-t">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" size="sm" className="w-full">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="w-full">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Sign Up
                </Button>
              </Link>
            </div>
            <div className="flex justify-center pt-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

