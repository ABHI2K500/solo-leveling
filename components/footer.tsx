import Link from "next/link"
import { cn } from "@/lib/utils"
import { Facebook, Instagram, Twitter, Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <span
              className={cn(
                "font-bold text-xl tracking-tight",
                "edge-light-text", // Replace glow with edge lighting
              )}
            >
              Solo Lvlng
            </span>
          </Link>
          <p className="text-muted-foreground">Level up your life by transforming daily tasks into rewarding quests.</p>
          <div className="flex space-x-4">
            {[
              { icon: <Facebook className="h-5 w-5" />, href: "#" },
              { icon: <Instagram className="h-5 w-5" />, href: "#" },
              { icon: <Twitter className="h-5 w-5" />, href: "#" },
              { icon: <Github className="h-5 w-5" />, href: "#" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className={cn(
                  "rounded-full p-2 transition-colors",
                  "hover:bg-muted",
                  "edge-light", // Replace glow with edge lighting
                )}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Product</h3>
          <ul className="space-y-3">
            {[
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "/pricing" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "FAQ", href: "/faq" },
            ].map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-3">
            {[
              { label: "About Us", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-3">
            {[
              { label: "Terms of Service", href: "/terms" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Cookie Policy", href: "/cookies" },
            ].map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {currentYear} Solo Lvlng. All rights reserved.</p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">Designed with ❤️ for productivity enthusiasts</p>
        </div>
      </div>
    </footer>
  )
}

