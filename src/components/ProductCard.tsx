import { Star, TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { SecurityBadge } from "./SecurityBadge";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onViewDetails, onAddToCart }: ProductCardProps) => {
  const priceComparison = product.price < product.averagePrice;
  const savingsPercent = Math.round(((product.averagePrice - product.price) / product.averagePrice) * 100);

  return (
    <Card 
      className="group overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border-2 hover:border-primary/20 cursor-pointer"
      onClick={() => onViewDetails(product)}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 z-10">
          <SecurityBadge fraudScore={product.fraudScore} verified={product.seller.verified} size="sm" />
        </div>
        {priceComparison && savingsPercent > 10 && (
          <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 shadow-lg z-10">
            <TrendingDown size={14} />
            {savingsPercent}% OFF
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      
      <CardContent className="flex-1 p-5">
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
          <span>{product.seller.name}</span>
          {product.seller.verified && (
            <span className="text-secondary">✓</span>
          )}
        </div>

        <h3 className="font-semibold text-base mb-3 line-clamp-2 min-h-[3rem]">{product.name}</h3>

        <div className="flex items-center gap-1 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={i < Math.floor(product.seller.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                size={14} 
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({product.seller.rating})</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">${product.price.toFixed(2)}</span>
            {priceComparison && (
              <span className="text-sm text-muted-foreground line-through">${product.averagePrice.toFixed(2)}</span>
            )}
          </div>
          
          {priceComparison && (
            <div className="flex items-center gap-1 text-xs text-secondary font-medium">
              <TrendingDown size={12} />
              <span>Save ${(product.averagePrice - product.price).toFixed(2)}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 flex gap-3">
        <Button 
          size="lg"
          className="flex-1 font-semibold"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
