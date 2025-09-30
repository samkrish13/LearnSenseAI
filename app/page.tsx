import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LiveDemoSection } from "@/components/live-demo-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { GamificationSection } from "@/components/gamification-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <LiveDemoSection />
        <AboutSection />
        <FeaturesSection />
        <HowItWorksSection />
        <GamificationSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
