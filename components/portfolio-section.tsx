import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const portfolioItems = [
  {
    title: "Bella Vita",
    description: "Salão de beleza",
    url: "https://bella-vita-a4urttdym-pauloricardo9581-7814s-projects.vercel.app/",
    category: "Beleza & Estética",
    image: "/modern-beauty-salon-website.jpg",
  },
  {
    title: "AutoLux",
    description: "Concessionária",
    url: "https://autolux-silk.vercel.app/",
    category: "Automotivo",
    image: "/luxury-car-dealership.png",
  },
  {
    title: "Action Informática",
    description: "Loja de conserto eletrônico",
    url: "https://action-informatica.vercel.app/",
    category: "Tecnologia",
    image: "/electronics-repair-shop-website.jpg",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Nosso{" "}
            <span className="text-accent bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfólio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Projetos que transformaram negócios e geraram resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-accent/50 bg-card/80 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs border-accent/50 text-foreground bg-accent/10">
                    {item.category}
                  </Badge>
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-pretty">{item.description}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors duration-200 font-medium"
                >
                  Ver projeto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
