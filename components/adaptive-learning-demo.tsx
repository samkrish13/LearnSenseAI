"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain } from "lucide-react"

interface AdaptiveLearningDemoProps {
  currentEmotion: string
  confidence: number
}

export function AdaptiveLearningDemo({ currentEmotion, confidence }: AdaptiveLearningDemoProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [adaptiveMessage, setAdaptiveMessage] = useState("")

  const questions = {
    easy: [
      { q: "What is 2 + 2?", options: ["3", "4", "5"], correct: 1 },
      { q: "What color is the sky?", options: ["Red", "Blue", "Green"], correct: 1 },
    ],
    medium: [
      { q: "What is 15 × 8?", options: ["120", "125", "130"], correct: 0 },
      { q: "What is the capital of France?", options: ["London", "Paris", "Rome"], correct: 1 },
    ],
    hard: [
      { q: "Solve: x² - 5x + 6 = 0", options: ["x = 2,3", "x = 1,6", "x = 2,4"], correct: 0 },
      { q: "What is the derivative of x³?", options: ["3x²", "x²", "3x"], correct: 0 },
    ],
  }

  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium")
  const [currentQuestionSet, setCurrentQuestionSet] = useState(questions.medium)

  // Adaptive logic based on emotion
  useEffect(() => {
    if (!currentEmotion) return

    switch (currentEmotion) {
      case "confused":
        setDifficulty("easy")
        setCurrentQuestionSet(questions.easy)
        setAdaptiveMessage("😊 Let's try something easier! You've got this!")
        break
      case "happy":
      case "excited":
        setDifficulty("hard")
        setCurrentQuestionSet(questions.hard)
        setAdaptiveMessage("🚀 You're doing great! Ready for a challenge?")
        break
      case "neutral":
      case "focused":
        setDifficulty("medium")
        setCurrentQuestionSet(questions.medium)
        setAdaptiveMessage("🎯 Perfect focus! Let's keep learning!")
        break
      default:
        setAdaptiveMessage("🤖 AI is adapting to your learning style...")
    }
  }, [currentEmotion])

  const handleAnswer = (selectedIndex: number) => {
    const isCorrect = selectedIndex === currentQuestionSet[currentQuestion].correct

    if (isCorrect) {
      setScore(score + 10)
      setStreak(streak + 1)
    } else {
      setStreak(0)
    }

    setShowFeedback(true)

    setTimeout(() => {
      setShowFeedback(false)
      setCurrentQuestion((prev) => (prev + 1) % currentQuestionSet.length)
    }, 2000)
  }

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "easy":
        return "text-neon-green"
      case "medium":
        return "text-electric-blue"
      case "hard":
        return "text-warm-orange"
    }
  }

  const getDifficultyBg = () => {
    switch (difficulty) {
      case "easy":
        return "bg-neon-green/10"
      case "medium":
        return "bg-electric-blue/10"
      case "hard":
        return "bg-warm-orange/10"
    }
  }

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <div className="space-y-6">
        {/* Adaptive Status */}
        <div className={`p-4 rounded-lg ${getDifficultyBg()} border border-border/50`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-electric-blue" />
              <span className="font-semibold text-foreground">AI Adaptation</span>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor()} bg-background/50`}>
              {difficulty.toUpperCase()}
            </div>
          </div>
          {adaptiveMessage && <p className="text-sm text-muted-foreground">{adaptiveMessage}</p>}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-electric-blue">{score}</div>
            <div className="text-xs text-muted-foreground">Points</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-neon-green">{streak}</div>
            <div className="text-xs text-muted-foreground">Streak</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warm-orange">{currentQuestion + 1}</div>
            <div className="text-xs text-muted-foreground">Question</div>
          </div>
        </div>

        {/* Question */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">{currentQuestionSet[currentQuestion].q}</h3>

          <div className="space-y-2">
            {currentQuestionSet[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-left h-auto p-4 hover:bg-electric-blue/10 transition-all duration-300 bg-transparent"
                onClick={() => handleAnswer(index)}
                disabled={showFeedback}
              >
                <span className="mr-3 text-electric-blue font-semibold">{String.fromCharCode(65 + index)}.</span>
                {option}
              </Button>
            ))}
          </div>
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className="text-center p-4 bg-neon-green/10 rounded-lg border border-neon-green/20">
            <div className="text-2xl mb-2">🎉</div>
            <p className="text-neon-green font-semibold">Great job! +10 points</p>
          </div>
        )}

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Learning Progress</span>
            <span className="text-foreground">{Math.round((score / 100) * 100)}%</span>
          </div>
          <Progress value={(score / 100) * 100} className="h-2" />
        </div>
      </div>
    </Card>
  )
}
