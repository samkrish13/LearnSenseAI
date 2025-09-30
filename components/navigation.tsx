"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Brain, Search } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const handleGetStarted = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="relative">
              <Brain className="h-8 w-8 text-electric-blue" />
              <div className="absolute inset-0 h-8 w-8 text-electric-blue animate-pulse opacity-50"></div>
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              LearnSense<span className="text-electric-blue">AI</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                Reviews
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSearch(!showSearch)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              onClick={handleGetStarted}
              className="bg-electric-blue hover:bg-electric-blue/90 text-white rounded-lg px-6 py-2 font-semibold transition-all duration-300 glow-effect hover:glow-effect"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                Reviews
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={handleGetStarted}
                  className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white rounded-lg px-6 py-2 font-semibold transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}

        {showSearch && (
          <div className="absolute top-full left-0 right-0 bg-card border-b border-border p-4">
            <input
              type="text"
              placeholder="Search features, docs, tutorials..."
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue"
              autoFocus
            />
          </div>
        )}
      </div>
    </nav>
  )
}
