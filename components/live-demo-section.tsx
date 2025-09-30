"use client"

import { useState } from "react"
import { EmotionDetector } from "./emotion-detector"
import { AdaptiveLearningDemo } from "./adaptive-learning-demo"
import { GamificationDashboard } from "./gamification-dashboard"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Gamepad2 } from "lucide-react"

export function LiveDemoSection() {
  const [currentEmotion, setCurrentEmotion] = useState("")
  const [confidence, setConfidence] = useState(0)

  const handleEmotionChange = (emotion: string, conf: number) => {
    setCurrentEmotion(emotion)
    setConfidence(conf)
  }

  return (
    <section id="demo" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            See AI Learning in
            <span className="text-electric-blue"> Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how our AI detects your emotions and adapts learning content in real-time
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Emotion Detection */}
          <div className="lg:col-span-1">
            <EmotionDetector onEmotionChange={handleEmotionChange} />
          </div>

          {/* Main Demo Area */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="learning" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="learning" className="flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  Adaptive Learning
                </TabsTrigger>
                <TabsTrigger value="gamification" className="flex items-center gap-2">
                  <Gamepad2 className="h-4 w-4" />
                  Gamification
                </TabsTrigger>
              </TabsList>

              <TabsContent value="learning">
                <AdaptiveLearningDemo currentEmotion={currentEmotion} confidence={confidence} />
              </TabsContent>

              <TabsContent value="gamification">
                <GamificationDashboard />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Status Indicator */}
        {currentEmotion && (
          <div className="mt-8 text-center">
            <Card className="inline-block p-4 bg-electric-blue/10 border-electric-blue/30">
              <p className="text-sm text-muted-foreground mb-1">AI Status</p>
              <p className="text-foreground font-semibold">
                Detected: <span className="text-electric-blue capitalize">{currentEmotion}</span> (
                {Math.round(confidence * 100)}% confidence)
              </p>
              <p className="text-xs text-muted-foreground mt-1">Content automatically adapted for optimal learning</p>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
