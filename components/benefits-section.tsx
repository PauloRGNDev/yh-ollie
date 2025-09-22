import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, TrendingUp, Clock, Users, Shield, Rocket } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Autoridade",
    description: "Sites criados com tecnologia de ponta.",
    badge: "Tecnologia",
  },
  {
    icon: TrendingUp,
    title: "Benefício",
    description: "Otimizados para SEO, com potencial de atrair clientes no orgânico.",
    badge: "SEO",
  },
  {
    icon: Zap,
    title: "Escassez",
    description: "Solicite já – vagas limitadas este mês.",
    badge: "Limitado",
  },
  {
    icon: Clock,
    title: "Praticidade",
    description: "Feche seu site sem reuniões demoradas. Tudo por troca de mensagens no Instagram.",
    badge: "Simples",
  },
  {
    icon: Users,
    title: "Prova Social",
    description: "Clientes satisfeitos em diversos setores.",
    badge: "Confiança",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Sites rápidos que convertem visitantes em clientes.",
    badge: "Velocidade",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Por que escolher a{" "}
            <span className="text-accent bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              YHollie?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Diferenciais que fazem a diferença no seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{benefit.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {benefit.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-pretty">{benefit.description}</p>
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
