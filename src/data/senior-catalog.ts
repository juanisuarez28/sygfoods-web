export interface ProductDetail {
    peso_neto: string;
    presentacion?: string;
    caracteristicas?: string[];
}

export interface Product {
    id: string;
    titulo: string;
    descripcion: string;
    detalles: ProductDetail;
    category: string;
    image?: string;
}

export interface Category {
    id: string;
    name: string;
}

export const seniorCategories: Category[] = [
    { id: "cafe-vacuo", name: "Café envasado al vacío" },
    { id: "cafe-doypack", name: "Café doypack" },
    { id: "cafe-soluble", name: "Café soluble" },
];

export const seniorProducts: Product[] = [
    // Tradicional - Vacío
    {
        id: "tradicional-vacuo-250g",
        titulo: "Café Tradicional",
        descripcion: "Café tostado y molido 100% café, sin azúcar y sin gluten. Envasado al vacío.",
        detalles: {
            peso_neto: "250 g",
            presentacion: "Envase al vacío",
            caracteristicas: [
                "100% café",
                "Sin azúcar",
                "Sin gluten",
                "Apto diabéticos",
                "Apto celíacos",
                "Conserva sabor, aroma y propiedades nutricionales",
                "Prolonga la frescura y vida útil"
            ]
        },
        category: "cafe-vacuo",
        image: "/assets/Tradicional_250g_lateral-caja.jpeg"
    },
    {
        id: "tradicional-vacuo-500g",
        titulo: "Café Tradicional",
        descripcion: "Café tostado y molido 100% café, sin azúcar y sin gluten. Envasado al vacío.",
        detalles: {
            peso_neto: "500 g",
            presentacion: "Envase al vacío",
            caracteristicas: [
                "100% café",
                "Sin azúcar",
                "Sin gluten",
                "Apto diabéticos",
                "Apto celíacos",
                "Conserva sabor, aroma y propiedades nutricionales",
                "Prolonga la frescura y vida útil"
            ]
        },
        category: "cafe-vacuo",
        image: "/assets/Tradicional-500-caja.png"
    },

    // Extra Fuerte - Vacío
    {
        id: "extra-fuerte-vacuo-250g",
        titulo: "Café Extra Fuerte",
        descripcion: "Café tostado y molido 100% café, sin azúcar y sin gluten. Envasado al vacío.",
        detalles: {
            peso_neto: "250 g",
            presentacion: "Envase al vacío",
            caracteristicas: [
                "100% café",
                "Sin azúcar",
                "Sin gluten",
                "Apto diabéticos",
                "Apto celíacos",
                "Conserva sabor, aroma y propiedades nutricionales",
                "Prolonga la frescura y vida útil"
            ]
        },
        category: "cafe-vacuo",
        image: "/assets/extrafuerte-250g-caja.png"
    },
    {
        id: "extra-fuerte-vacuo-500g",
        titulo: "Café Extra Fuerte",
        descripcion: "Café tostado y molido 100% café, sin azúcar y sin gluten. Envasado al vacío.",
        detalles: {
            peso_neto: "500 g",
            presentacion: "Envase al vacío",
            caracteristicas: [
                "100% café",
                "Sin azúcar",
                "Sin gluten",
                "Apto diabéticos",
                "Apto celíacos",
                "Conserva sabor, aroma y propiedades nutricionales",
                "Prolonga la frescura y vida útil"
            ]
        },
        category: "cafe-vacuo",
        image: "/assets/Extra-Fuerte-500.jpg"
    },

    // Tradicional - Doypack
    {
        id: "tradicional-doypack-250g",
        titulo: "Café Tradicional Doypack",
        descripcion: "Café tostado y molido 100% café, sin azúcar y sin gluten. Envase doypack.",
        detalles: {
            peso_neto: "250 g",
            presentacion: "Envase doypack",
            caracteristicas: [
                "100% café",
                "Sin azúcar",
                "Sin gluten",
                "Apto diabéticos",
                "Apto celíacos",
                "Protege el café en su interior",
                "Propiedades barrera",
                "Conservación óptima del café"
            ]
        },
        category: "cafe-doypack",
        image: "/assets/Cafe-Senior-Pouch-250g.png"
    },
    {
        id: "tradicional-doypack-500g",
        titulo: "Café Tradicional Doypack",
        descripcion: "Café tostado y molido 100% café, sin azúcar y sin gluten. Envase doypack.",
        detalles: {
            peso_neto: "500 g",
            presentacion: "Envase doypack",
            caracteristicas: [
                "100% café",
                "Sin azúcar",
                "Sin gluten",
                "Apto diabéticos",
                "Apto celíacos",
                "Protege el café en su interior",
                "Propiedades barrera",
                "Conservación óptima del café"
            ]
        },
        category: "cafe-doypack",
        image: "/assets/Tradicional-Pouch-500g.png"
    },

    // Café soluble
    {
        id: "cafe-soluble-tradicional-100g",
        titulo: "Café Soluble Tradicional",
        descripcion: "Café soluble tradicional.",
        detalles: {
            peso_neto: "100 g",
            presentacion: "Frasco",
            caracteristicas: [
                "Apto diabéticos",
                "Apto celíacos"
            ]
        },
        category: "cafe-soluble",
        image: "/assets/Cafe-Instantaneo tradicional-100g.jpeg"
    }
];