"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Flame, Target, Award } from "lucide-react"

export function GamificationDashboard() {
  const [xp, setXp] = useState(1250)
  const [level, setLevel] = useState(5)
  const [streak, setStreak] = useState(12)
  const [badges, setBadges] = useState([
    { name: "First Steps", icon: "🎯", earned: true },
    { name: "Speed Learner", icon: "⚡", earned: true },
    { name: "Problem Solver", icon: "🧩", earned: true },
    { name: "Streak Master", icon: "🔥", earned: false },
  ])

  const leaderboard = [
    { name: "You", score: 1250, rank: 3 },
    { name: "Alex Chen", score: 1450, rank: 1 },
    { name: "Sarah Kim", score: 1380, rank: 2 },
    { name: "Mike Johnson", score: 1180, rank: 4 },
    { name: "Emma Davis", score: 1050, rank: 5 },
  ]

  const nextLevelXp = level * 300
  const currentLevelXp = (level - 1) * 300
  const progressToNext = ((xp - currentLevelXp) / (nextLevelXp - currentLevelXp)) * 100

  // Simulate XP gain
  useEffect(() => {
    const interval = setInterval(() => {
      setXp((prev) => prev + Math.floor(Math.random() * 10) + 5)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* Level & XP */}
      <Card className="p-6 bg-gradient-to-r from-electric-blue/10 to-neon-green/10 border-electric-blue/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Level {level}</h3>
              <p className="text-muted-foreground">Learning Champion</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-electric-blue">{xp.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">XP</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress to Level {level + 1}</span>
            <span className="text-foreground">{Math.round(progressToNext)}%</span>
          </div>
          <Progress value={progressToNext} className="h-3" />
          <div className="text-xs text-muted-foreground text-center">{nextLevelXp - xp} XP to next level</div>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-card/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-warm-orange/20 rounded-lg flex items-center justify-center">
              <Flame className="h-5 w-5 text-warm-orange" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{streak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-card/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-neon-green/20 rounded-lg flex items-center justify-center">
              <Target className="h-5 w-5 text-neon-green" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">89%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Badges */}
      <Card className="p-6 bg-card/50 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Award className="h-5 w-5 text-electric-blue" />
          Achievements
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg border transition-all duration-300 ${
                badge.earned
                  ? "bg-neon-green/10 border-neon-green/30 text-foreground"
                  : "bg-muted/50 border-border text-muted-foreground"
              }`}
            >
              <div className="text-2xl mb-1">{badge.icon}</div>
              <div className="text-sm font-medium">{badge.name}</div>
              {badge.earned && (
                <Badge variant="secondary" className="mt-1 text-xs bg-neon-green/20 text-neon-green">
                  Earned
                </Badge>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Leaderboard */}
      <Card className="p-6 bg-card/50 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-electric-blue" />
          Leaderboard
        </h3>
        <div className="space-y-3">
          {leaderboard.map((user, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                user.name === "You" ? "bg-electric-blue/10 border border-electric-blue/30" : "bg-muted/30"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    user.rank === 1
                      ? "bg-yellow-500 text-black"
                      : user.rank === 2
                        ? "bg-gray-400 text-black"
                        : user.rank === 3
                          ? "bg-orange-500 text-black"
                          : "bg-muted text-muted-foreground"
                  }`}
                >
                  {user.rank}
                </div>
                <span className={`font-medium ${user.name === "You" ? "text-electric-blue" : "text-foreground"}`}>
                  {user.name}
                </span>
              </div>
              <div className="text-foreground font-semibold">{user.score.toLocaleString()} XP</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
