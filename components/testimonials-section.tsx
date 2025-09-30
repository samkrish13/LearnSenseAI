import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "/professional-woman-headshot.png",
    quote:
      "The team delivered exceptional results that exceeded our expectations. Their attention to detail and innovative approach transformed our business.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    avatar: "/professional-man-headshot.png",
    quote:
      "Outstanding technical expertise combined with creative vision. They understood our needs perfectly and delivered a solution that scales beautifully.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, GrowthLab",
    avatar: "/professional-woman-entrepreneur.png",
    quote:
      "Working with this team was a game-changer for our startup. Their strategic approach and flawless execution helped us achieve our goals faster than expected.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-sky-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-pretty leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-background border-border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-rouge-red text-rouge-red" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-deep-blue font-medium mb-6 text-pretty leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={`${testimonial.name} avatar`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-rouge-red">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
