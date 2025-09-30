import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-deep-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">YourBrand</h3>
            <p className="text-white/80 leading-relaxed text-pretty">
              Creating exceptional digital experiences that drive results and inspire innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-coral-pink hover:text-peach transition-colors duration-200">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-coral-pink hover:text-peach transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-coral-pink hover:text-peach transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-coral-pink hover:text-peach transition-colors duration-200">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-coral-pink transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-coral-pink transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/80 hover:text-coral-pink transition-colors duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-coral-pink transition-colors duration-200">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-white/80">
              <p>hello@yourbrand.com</p>
              <p>+1 (555) 123-4567</p>
              <p>
                123 Innovation Street
                <br />
                Tech City, TC 12345
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">© 2025 YourBrand. All rights reserved. Built with passion and precision.</p>
        </div>
      </div>
    </footer>
  )
}
