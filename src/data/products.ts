export interface Product {
  id: string;
  name: string;
  price: number;
  averagePrice: number;
  image: string;
  seller: {
    name: string;
    verified: boolean;
    rating: number;
  };
  description: string;
  category: string;
  fraudScore: number; // 0-100, higher is more suspicious
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 149.99,
    averagePrice: 179.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    seller: {
      name: "AudioTech Store",
      verified: true,
      rating: 4.8,
    },
    description: "High-quality wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality.",
    category: "Electronics",
    fraudScore: 5,
    inStock: true,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 89.99,
    averagePrice: 120.00,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    seller: {
      name: "FitGear Plus",
      verified: true,
      rating: 4.6,
    },
    description: "Track your fitness goals with heart rate monitoring, GPS, and water resistance up to 50m.",
    category: "Electronics",
    fraudScore: 8,
    inStock: true,
  },
  {
    id: "3",
    name: "Designer Leather Handbag",
    price: 299.99,
    averagePrice: 450.00,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    seller: {
      name: "Luxury Goods Outlet",
      verified: false,
      rating: 3.2,
    },
    description: "Genuine leather handbag with elegant design. Limited stock available.",
    category: "Fashion",
    fraudScore: 72,
    inStock: true,
  },
  {
    id: "4",
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    averagePrice: 64.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
    seller: {
      name: "SoundWave Electronics",
      verified: true,
      rating: 4.7,
    },
    description: "Compact, waterproof speaker with 360° sound and 12-hour battery life. Perfect for outdoor adventures.",
    category: "Electronics",
    fraudScore: 3,
    inStock: true,
  },
  {
    id: "5",
    name: "Professional Camera Lens",
    price: 799.99,
    averagePrice: 1100.00,
    image: "https://images.unsplash.com/photo-1606980626347-71e2a28b8f6e?w=800&q=80",
    seller: {
      name: "PhotoPro Deals",
      verified: false,
      rating: 3.8,
    },
    description: "85mm f/1.4 prime lens for professional photography. Brand new in box.",
    category: "Photography",
    fraudScore: 58,
    inStock: true,
  },
  {
    id: "6",
    name: "Ergonomic Office Chair",
    price: 249.99,
    averagePrice: 270.00,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
    seller: {
      name: "Office Comfort Co.",
      verified: true,
      rating: 4.9,
    },
    description: "Premium ergonomic chair with lumbar support, adjustable armrests, and breathable mesh back.",
    category: "Furniture",
    fraudScore: 2,
    inStock: true,
  },
];
