import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-primary/90 to-primary/70"
    >
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:24px_24px]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Tu distribuidor de alimentos<br />
          <span className="text-accent">de calidad importados</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10">
          Llevamos las mejores marcas de Brasil y el mundo a tu negocio. Calidad, confianza y variedad en cada producto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 rounded-full"
            asChild
          >
            <a href="#contacto">Contactanos</a>
          </Button>
          <Button
            size="lg"
            className="bg-white text-[#003E75] hover:bg-white/90 text-base px-8 rounded-full transition-all"
            asChild
          >
            <a href="#marcas">Nuestras marcas</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
