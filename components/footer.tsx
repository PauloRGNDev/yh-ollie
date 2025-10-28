import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* <div className="flex items-center justify-center gap-3 mb-6">
            <Instagram className="w-6 h-6 text-accent" />
            <p className="text-lg">
              Fale com a YHollie diretamente pelo Instagram:{" "}
              <a
                href="https://www.instagram.com/yhollie.ofc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors duration-200 font-semibold"
              >
                @yhollie.ofc
              </a>
            </p>
          </div> */}

          <div className="border-t border-border/50 pt-6">
            <p className="text-muted-foreground">© 2025 YHollie. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
