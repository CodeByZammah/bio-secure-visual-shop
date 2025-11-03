import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailsModal } from "@/components/ProductDetailsModal";
import { products, Product } from "@/data/products";
import { toast } from "@/hooks/use-toast";

interface IndexProps {
  onAddToCart: (product: Product) => void;
}

const Index = ({ onAddToCart }: IndexProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Secure Marketplace</h1>
        <p className="text-muted-foreground">
          Shop with confidence. Every transaction protected by AI-powered fraud detection.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={setSelectedProduct}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <ProductDetailsModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Index;
