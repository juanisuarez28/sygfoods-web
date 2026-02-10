import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import qualimaxLogo from "@/assets/qualimax-logo.png";
import { qualimaxCategories, qualimaxProducts } from "@/data/qualimax-catalog";

const CatalogoQualimax = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProducts = activeCategory
    ? qualimaxProducts.filter((p) => p.category === activeCategory)
    : qualimaxProducts;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium text-sm">Volver al inicio</span>
          </Link>
          <img src={qualimaxLogo} alt="Qualimax" className="h-10 md:h-12 object-contain" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Catálogo <span className="text-primary">Qualimax</span>
          </h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Explorá todos los productos de la línea Qualimax disponibles para distribución.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setActiveCategory(null)}
          >
            Todos
          </Button>
          {qualimaxCategories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-xl border border-border p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-full aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-2"
                  />
                ) : (
                  <span className="text-muted-foreground text-xs">Sin imagen</span>
                )}
              </div>
              <p className="text-sm font-medium text-foreground leading-tight">{product.name}</p>
              <span className="text-xs text-muted-foreground mt-1 capitalize">
                {qualimaxCategories.find((c) => c.id === product.category)?.name}
              </span>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No hay productos en esta categoría aún.
          </p>
        )}
      </main>
    </div>
  );
};

export default CatalogoQualimax;
