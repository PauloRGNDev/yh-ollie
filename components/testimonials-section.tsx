import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria S.",
    business: "Bella Vita Salão",
    content: "Meu salão nunca teve tanta visibilidade! A YHollie transformou meu negócio.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    business: "AutoLux Concessionária",
    content: "Site profissional que realmente atrai clientes. Vendas aumentaram 40%!",
    rating: 5,
  },
  {
    name: "Ana P.",
    business: "Action Informática",
    content: "Processo super simples pelo Instagram. Site ficou exatamente como imaginei.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Depoimentos reais de quem confia na YHollie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-accent/30 mb-4" />

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-foreground mb-6 text-pretty italic">"{testimonial.content}"</p>

                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-accent">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
