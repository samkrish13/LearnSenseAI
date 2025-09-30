"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Camera, CameraOff } from "lucide-react"

interface EmotionDetectorProps {
  onEmotionChange: (emotion: string, confidence: number) => void
}

export function EmotionDetector({ onEmotionChange }: EmotionDetectorProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [currentEmotion, setCurrentEmotion] = useState<string>("")
  const [confidence, setConfidence] = useState<number>(0)
  const [stream, setStream] = useState<MediaStream | null>(null)

  // Mock emotion detection for demo purposes
  const mockEmotions = ["happy", "neutral", "focused", "confused", "excited"]
  const emotionEmojis = {
    happy: "😊",
    neutral: "😐",
    focused: "🤔",
    confused: "😕",
    excited: "🤩",
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isActive) {
      interval = setInterval(() => {
        // Mock emotion detection - in real app would use face-api.js
        const randomEmotion = mockEmotions[Math.floor(Math.random() * mockEmotions.length)]
        const randomConfidence = Math.random() * 0.4 + 0.6 // 60-100% confidence

        setCurrentEmotion(randomEmotion)
        setConfidence(randomConfidence)
        onEmotionChange(randomEmotion, randomConfidence)
      }, 2000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, onEmotionChange])

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 240 },
      })
      setStream(mediaStream)
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
      }
      setIsActive(true)
    } catch (error) {
      console.error("Camera access denied:", error)
    }
  }

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
      setStream(null)
    }
    setIsActive(false)
    setCurrentEmotion("")
    setConfidence(0)
  }

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Live Emotion Detection</h3>
        <Button
          onClick={isActive ? stopCamera : startCamera}
          variant={isActive ? "destructive" : "default"}
          size="sm"
          className="transition-all duration-300"
        >
          {isActive ? <CameraOff className="h-4 w-4 mr-2" /> : <Camera className="h-4 w-4 mr-2" />}
          {isActive ? "Stop" : "Start"}
        </Button>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className={`w-full h-32 bg-muted rounded-lg object-cover ${!isActive ? "hidden" : ""}`}
          />
          <canvas ref={canvasRef} className="hidden" />
          {!isActive && (
            <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Camera off</p>
            </div>
          )}
        </div>

        {isActive && currentEmotion && (
          <div className="text-center space-y-2">
            <div className="text-4xl">{emotionEmojis[currentEmotion as keyof typeof emotionEmojis]}</div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground capitalize">{currentEmotion}</p>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-neon-green h-2 rounded-full transition-all duration-500"
                  style={{ width: `${confidence * 100}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">{Math.round(confidence * 100)}% confidence</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
