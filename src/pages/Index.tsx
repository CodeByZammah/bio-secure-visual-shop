import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailsModal } from "@/components/ProductDetailsModal";
import { Hero } from "@/components/Hero";
import { PromoBanners } from "@/components/PromoBanners";
import { Features } from "@/components/Features";
import { Categories } from "@/components/Categories";
import { Newsletter } from "@/components/Newsletter";
import { products, Product } from "@/data/products";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <div>
      <Hero />
      <Features />
      <PromoBanners />
      
      {/* Best Sellers */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Best Sellers</h2>
            <p className="text-muted-foreground">Our most popular products</p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft size={20} />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={setSelectedProduct}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" variant="outline" className="px-12">
            View All Products
          </Button>
        </div>
      </section>

      <Categories />
      <Newsletter />

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
