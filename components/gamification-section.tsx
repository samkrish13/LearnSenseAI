import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame, Star, Award, TrendingUp } from "lucide-react"

const gamificationFeatures = [
  {
    icon: Flame,
    title: "Daily Streaks",
    description:
      "Maintain your learning momentum with daily study streaks. The longer your streak, the more rewards you unlock!",
    color: "text-rouge-red",
    bgColor: "bg-rouge-red/20",
  },
  {
    icon: Star,
    title: "Points & XP",
    description:
      "Earn experience points for every completed lesson, quiz, and milestone. Level up your learning profile!",
    color: "text-serene-blue",
    bgColor: "bg-serene-blue/20",
  },
  {
    icon: Award,
    title: "Achievement Badges",
    description:
      "Unlock special badges for reaching milestones, mastering topics, and maintaining consistent study habits.",
    color: "text-coral-pink",
    bgColor: "bg-coral-pink/20",
  },
  {
    icon: TrendingUp,
    title: "Leaderboards",
    description: "Compete with friends and classmates on weekly and monthly leaderboards. See how you rank globally!",
    color: "text-peach",
    bgColor: "bg-peach/40",
  },
]

export function GamificationSection() {
  return (
    <section id="gamification" className="py-20 bg-gradient-to-br from-coral-pink/10 to-peach/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4 text-balance">
            Stay Motivated with Gamification
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-pretty leading-relaxed">
            Turn learning into an engaging game with streaks, badges, points, and friendly competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gamificationFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-white/50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer transform hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`mx-auto w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-deep-blue text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
