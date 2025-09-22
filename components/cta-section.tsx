import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-accent opacity-10" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Pronto para ter um site profissional que{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              gera clientes?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Não perca mais tempo. Transforme sua presença online hoje mesmo!
          </p>

          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
            asChild
          >
            <a
              href="https://www.instagram.com/yhollie.ofc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              <Instagram className="w-6 h-6" />
              Entre em contato pelo Instagram
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-4">Resposta rápida garantida • Sem compromisso</p>
        </div>
      </div>
    </section>
  )
}
