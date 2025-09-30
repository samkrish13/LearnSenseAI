import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Brain, Trophy } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Camera,
    title: "Detect Emotion",
    description:
      "Our AI analyzes your facial expressions through your webcam to understand your current emotional state while learning.",
  },
  {
    step: "02",
    icon: Brain,
    title: "Adapt Learning Content",
    description:
      "Based on your emotions, the platform dynamically adjusts content difficulty, provides hints, or switches to more engaging material.",
  },
  {
    step: "03",
    icon: Trophy,
    title: "Track Progress + Rewards",
    description:
      "Earn points, maintain streaks, and unlock badges as you progress through your personalized learning journey.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-pretty leading-relaxed">
            Three simple steps to transform your learning experience with AI-powered emotion detection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-sky-blue/30 border-sky-blue/50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-peach/30 hover:border-peach/50 group cursor-pointer transform hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-20 h-20 bg-serene-blue/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-deep-blue/20 transition-colors duration-300 relative">
                    <step.icon className="h-10 w-10 text-serene-blue group-hover:text-deep-blue transition-colors duration-300" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-rouge-red rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{step.step}</span>
                    </div>
                  </div>
                  <CardTitle className="text-deep-blue text-xl font-bold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center leading-relaxed text-pretty">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connection line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-coral-pink/50 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
