import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import sygLogo3 from "@/assets/SYG-logo3.png";
import seniorLogo from "@/assets/senior-logo.png";
import { seniorCategories, seniorProducts, type Product } from "@/data/senior-catalog";
import Footer from "@/components/Footer";

const CatalogoSenior = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Brand colors
  const primaryColor = "#DA291C"; // Rojo Senior
  const secondaryColor = "#2B2B2B"; // Gris oscuro para contraste

  const filteredProducts = activeCategory
    ? seniorProducts.filter((p) => p.category === activeCategory)
    : seniorProducts;

  // Check if a product title repeats within its category (different presentations)
  const hasDuplicateTitle = (product: Product) => {
    return seniorProducts.filter(
      (p) => p.category === product.category && p.titulo === product.titulo
    ).length > 1;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: primaryColor }}>
        <div className="container mx-auto flex items-center justify-between px-4 py-1">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium text-sm">Volver al inicio</span>
          </Link>
          <Link to="/">
            <img src={sygLogo3} alt="SyG Foods" className="h-12 md:h-20 object-contain cursor-pointer" />
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-1">
            <h1 className="text-xl md:text-3xl font-bold text-foreground">
              Catálogo
            </h1>
            <img src={seniorLogo} alt="Senior" className="h-16 md:h-20 object-contain" />
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explorá todos los productos de la línea Café Senior disponibles para distribución.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            className="rounded-full transition-colors hover:bg-[#DA291C] hover:text-white hover:border-[#DA291C]"
            style={activeCategory === null ? { backgroundColor: primaryColor, color: "white", borderColor: primaryColor } : {}}
            onClick={() => setActiveCategory(null)}
          >
            Todos
          </Button>
          {seniorCategories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              className="rounded-full transition-colors hover:bg-[#DA291C] hover:text-white hover:border-[#DA291C]"
              style={activeCategory === cat.id ? { backgroundColor: primaryColor, color: "white", borderColor: primaryColor } : {}}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-card rounded-xl border border-border p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="w-full aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <img src={product.image} alt={product.titulo} className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <span className="text-muted-foreground text-xs">Sin imagen</span>
                )}
              </div>
              <p className="text-sm font-medium text-black leading-tight transition-colors">
                {product.titulo}
                {hasDuplicateTitle(product) && (
                  <span className="block text-xs text-muted-foreground mt-0.5 font-normal">
                    {product.detalles.peso_neto}
                  </span>
                )}
              </p>
              <span className="text-xs mt-1 font-semibold" style={{ color: primaryColor }}>
                {seniorCategories.find((c) => c.id === product.category)?.name}
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

      <Footer />

      {/* Product detail modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedProduct?.titulo}
          </DialogTitle>
          {selectedProduct && (
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-1/2 bg-muted flex items-center justify-center p-8 min-h-[250px]">
                {selectedProduct.image ? (
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.titulo}
                    className="max-h-64 object-contain"
                  />
                ) : (
                  <span className="text-muted-foreground text-sm">Sin imagen</span>
                )}
              </div>

              {/* Info */}
              <div className="md:w-1/2 p-6 flex flex-col gap-4">
                <div>
                  <h2 className="text-xl font-bold text-foreground" style={{ color: primaryColor }}>{selectedProduct.titulo}</h2>
                  <span className="text-xs font-semibold" style={{ color: secondaryColor }}>
                    {seniorCategories.find((c) => c.id === selectedProduct.category)?.name}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedProduct.descripcion}
                </p>

                <div className="space-y-2 text-sm">
                  {selectedProduct.detalles.peso_neto && (
                    <div className="flex justify-between border-b border-border pb-1">
                      <span className="text-muted-foreground">Peso neto</span>
                      <span className="font-medium text-foreground">{selectedProduct.detalles.peso_neto}</span>
                    </div>
                  )}
                  {selectedProduct.detalles.presentacion && (
                    <div className="flex justify-between border-b border-border pb-1">
                      <span className="text-muted-foreground">Presentación</span>
                      <span className="font-medium text-foreground">{selectedProduct.detalles.presentacion}</span>
                    </div>
                  )}
                </div>

                {selectedProduct.detalles.caracteristicas && selectedProduct.detalles.caracteristicas.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {selectedProduct.detalles.caracteristicas.map((c) => (
                      <span key={c} className="text-white text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: primaryColor }}>
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CatalogoSenior;
