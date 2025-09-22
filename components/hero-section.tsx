"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-10" />

      {/* City background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(/assets/cidade-master.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Transforme sua presença online com a{" "}
            <span className="text-accent bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              YHollie
            </span>{" "}
            <Sparkles className="inline-block w-8 h-8 md:w-12 md:h-12 text-accent animate-pulse" />
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Sites modernos, rápidos e otimizados para gerar clientes.
          </p>

          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            asChild
          >
            <a
              href="https://www.instagram.com/yhollie.ofc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Peça seu site pelo Instagram
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
