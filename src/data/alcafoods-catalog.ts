export interface ProductDetail {
    peso_neto: string;
    validez: string;
    presentacion?: string;
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

export const alcafoodsCategories: Category[] = [
    { id: "cereales", name: "Cereales para el desayuno" },
    { id: "granolas", name: "Granolas" },
];

export const alcafoodsProducts: Product[] = [
    // Cereales para el desayuno
    {
        id: "corn-sugar-300g",
        titulo: "Corn Sugar – Copos de maíz azucarados",
        descripcion: "Copos de maíz azucarados con un sabor especial, perfectos para disfrutar en cualquier momento del día.",
        detalles: {
            peso_neto: "300 g",
            validez: "12 meses",
            presentacion: "Caja 24 x 300 g"
        },
        category: "cereales",
        image: "/assets/corn-sugar-300g.jpg"
    },
    {
        id: "choco-boll-200g",
        titulo: "Choco Boll – Bolitas de maíz sabor chocolate",
        descripcion: "Bolitas de maíz con sabor a chocolate y textura crujiente, ideales para empezar el día con energía.",
        detalles: {
            peso_neto: "200 g",
            validez: "12 meses",
            presentacion: "Caja 24 x 200 g"
        },
        category: "cereales",
        image: "/assets/choco-boll-200g.jpg"
    },
    {
        id: "corn-flakes-200g",
        titulo: "Corn Flakes – Copos de maíz sin azúcar agregada",
        descripcion: "Copos de maíz sin azúcar agregada, ideales para combinar con frutas, yogur o leche.",
        detalles: {
            peso_neto: "200 g",
            validez: "12 meses",
            presentacion: "Caja 24 x 200 g"
        },
        category: "cereales",
        image: "/assets/corn-flakes-200g.jpg"
    },
    {
        id: "choco-corn-300g",
        titulo: "Choco Corn – Copos de maíz sabor chocolate",
        descripcion: "Copos de maíz azucarados con sabor a chocolate, con el equilibrio perfecto entre crocancia y sabor.",
        detalles: {
            peso_neto: "300 g",
            validez: "12 meses",
            presentacion: "Caja 24 x 300 g"
        },
        category: "cereales",
        image: "/assets/choco-corn-300g.jpg"
    },
    {
        id: "corn-sugar-leche-condensada-300g",
        titulo: "Corn Sugar Leche Condensada – Copos de maíz sabor leche condensada",
        descripcion: "Copos de maíz azucarados con un suave sabor dulce y cremoso a leche condensada.",
        detalles: {
            peso_neto: "300 g",
            validez: "12 meses",
            presentacion: "Caja 24 x 300 g"
        },
        category: "cereales",
        image: "/assets/corn-sugar-leche-condensada-300g.jpg"
    },
    {
        id: "corn-sugar-banana-300g",
        titulo: "Corn Sugar Banana – Copos de maíz sabor banana",
        descripcion: "Copos de maíz azucarados con un delicioso aroma a banana, perfectos para el desayuno o merienda.",
        detalles: {
            peso_neto: "300 g",
            validez: "12 meses",
            presentacion: "Caja 24 x 300 g"
        },
        category: "cereales",
        image: "/assets/corn-sugar-banana-300g.jpg"
    },
    {
        id: "fruit-rings-200g",
        titulo: "Fruit Rings – Anillos de maíz frutales",
        descripcion: "Anillos de maíz azucarados con un irresistible sabor a frutas tropicales.",
        detalles: {
            peso_neto: "200 g",
            validez: "12 meses",
            presentacion: "Caja 24 x 200 g"
        },
        category: "cereales",
        image: "/assets/fruit-rings-200g.jpg"
    },
    // Granolas
    {
        id: "granola-tradicional-250g",
        titulo: "Granola Tradicional",
        descripcion: "Mezcla de cereales con miel y coco fortificada con vitaminas A, B1, C, D y E, ácido fólico, hierro y zinc. Sabor equilibrado ideal para cualquier momento del día.",
        detalles: {
            peso_neto: "250 g",
            validez: "12 meses",
            presentacion: "Caja 6 x 250 g"
        },
        category: "granolas",
        image: "/assets/granola-tradicional-250g.jpg"
    },
    {
        id: "granola-sin-azucar-250g",
        titulo: "Granola sin azúcar agregada",
        descripcion: "Mezcla de cereales con pasas de uva fortificada con vitaminas A, B1, C, D y E, ácido fólico, hierro y zinc. Sabor suave ideal para acompañar frutas o yogur.",
        detalles: {
            peso_neto: "250 g",
            validez: "12 meses",
            presentacion: "Caja 6 x 250 g"
        },
        category: "granolas",
        image: "/assets/granola-sin-azucar-250g.jpg"
    },
    {
        id: "granola-frutas-250g",
        titulo: "Granola con frutas",
        descripcion: "Mezcla de cereales con frutas deshidratadas fortificada con vitaminas A, B1, C, D y E, ácido fólico, hierro y zinc. Sabor único ideal para empezar el día.",
        detalles: {
            peso_neto: "250 g",
            validez: "12 meses",
            presentacion: "Caja 6 x 250 g"
        },
        category: "granolas",
        image: "/assets/granola-frutas-250g.jpg"
    },
    {
        id: "granola-chocolate-250g",
        titulo: "Granola con chocolate",
        descripcion: "Mezcla de cereales con chips de chocolate fortificada con vitaminas A, B1, C, D y E, ácido fólico, hierro y zinc. Ideal para amantes del chocolate.",
        detalles: {
            peso_neto: "250 g",
            validez: "12 meses",
            presentacion: "Caja 6 x 250 g"
        },
        category: "granolas",
        image: "/assets/granola-chocolate-250g.jpg"
    }
];
