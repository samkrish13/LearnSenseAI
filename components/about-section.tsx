import { Card } from "@/components/ui/card"
import { CheckCircle, Brain, Camera, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/ai-learning-student-with-webcam-emotion-detection.jpg"
                alt="AI-powered learning with emotion detection"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent divider */}
            <div className="absolute -bottom-4 -right-4 w-24 h-1 bg-rouge-red rounded-full"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4 text-balance">
                How LearnSenseAI Works
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-pretty">
                Our revolutionary platform uses advanced computer vision and machine learning to detect student emotions
                in real-time. By understanding when you're frustrated, bored, or engaged, we dynamically adjust the
                content difficulty to optimize your learning experience.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { text: "Real-time emotion detection via webcam", icon: Camera },
                { text: "Adaptive content difficulty adjustment", icon: Brain },
                { text: "Gamification with points and badges", icon: Zap },
                { text: "Secure Google OAuth integration", icon: CheckCircle },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="h-6 w-6 text-serene-blue flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-sky-blue/30 border-sky-blue/50 rounded-2xl">
              <p className="text-deep-blue font-semibold text-lg text-pretty">
                "Learning is most effective when it adapts to your emotional state. Our AI understands not just what you
                know, but how you feel about learning it."
              </p>
              <p className="text-gray-600 mt-2">— LearnSenseAI Philosophy</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
