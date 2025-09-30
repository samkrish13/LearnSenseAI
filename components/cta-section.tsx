import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-serene-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
          Join thousands of satisfied clients who have already experienced the difference. Let's build something amazing
          together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-rouge-red hover:bg-rouge-red/90 text-white rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="bg-transparent hover:bg-white/10 text-white border-white/30 hover:border-white/50 rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
