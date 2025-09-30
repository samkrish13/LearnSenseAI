"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Sparkles } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [showDemo, setShowDemo] = useState(false)

  const handleGetStarted = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleWatchDemo = () => {
    setShowDemo(true)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-green rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-bright-cyan rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-deep-purple rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border">
              <Sparkles className="h-5 w-5 text-neon-green" />
              <span className="text-foreground font-semibold">AI-Powered Learning</span>
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 text-balance leading-tight">
            Learn Smarter with
            <span className="block text-electric-blue">Emotion AI</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
            AI that reads your emotions and adapts content in real-time. Learn faster, stay engaged.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-electric-blue hover:bg-electric-blue/90 text-white rounded-lg px-8 py-4 text-lg font-semibold transition-all duration-300 glow-effect hover:glow-effect"
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleWatchDemo}
              className="border-border hover:bg-card text-foreground rounded-lg px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              <Camera className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-8">Trusted by</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Stanford</div>
              <div className="text-2xl font-bold">MIT</div>
              <div className="text-2xl font-bold">Berkeley</div>
              <div className="text-2xl font-bold">Harvard</div>
              <div className="text-2xl font-bold">CMU</div>
            </div>
          </div>
        </div>
      </div>

      {showDemo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-foreground">Demo Video</h3>
              <Button variant="ghost" onClick={() => setShowDemo(false)}>
                ✕
              </Button>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Demo video would play here</p>
            </div>
          </div>
        </div>
      )}

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-electric-blue/5 via-transparent to-neon-green/5 pointer-events-none"></div>
    </section>
  )
}
