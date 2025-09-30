"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Video, Trophy, Shield, ArrowRight } from "lucide-react"
import { useState } from "react"

const features = [
  {
    icon: Brain,
    title: "Emotion AI",
    description: "AI reads your face, adapts content difficulty instantly.",
    action: "Try Demo",
  },
  {
    icon: Video,
    title: "Smart Content",
    description: "Videos, quizzes, hints adjust to your learning state.",
    action: "See Examples",
  },
  {
    icon: Trophy,
    title: "Gamification",
    description: "Badges, streaks, points keep you motivated daily.",
    action: "View Rewards",
  },
  {
    icon: Shield,
    title: "Secure Login",
    description: "Google OAuth keeps your progress safe and synced.",
    action: "Sign In",
  },
]

export function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)

  const handleFeatureAction = (index: number, action: string) => {
    setSelectedFeature(index)
    console.log(`[v0] Feature action: ${action}`)
    // Simulate feature interaction
    setTimeout(() => setSelectedFeature(null), 2000)
  }

  return (
    <section id="features" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Smart Learning Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            AI that understands emotions and adapts to your learning style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`bg-card border-border rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer transform hover:scale-105 ${
                selectedFeature === index ? "ring-2 ring-electric-blue bg-electric-blue/10" : ""
              }`}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-electric-blue/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-electric-blue/30 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-electric-blue transition-colors duration-300" />
                </div>
                <CardTitle className="text-foreground text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center leading-relaxed text-pretty">{feature.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleFeatureAction(index, feature.action)}
                  disabled={selectedFeature === index}
                  className="w-full group-hover:bg-electric-blue group-hover:text-white transition-all duration-300"
                >
                  {selectedFeature === index ? "Loading..." : feature.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
