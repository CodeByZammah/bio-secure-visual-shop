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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <SecurityBadge fraudScore={product.fraudScore} verified={product.seller.verified} size="sm" />
        </div>
        {priceComparison && savingsPercent > 10 && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
            <TrendingDown size={12} />
            {savingsPercent}% OFF
          </div>
        )}
      </div>
      
      <CardContent className="flex-1 p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
          <span>{product.seller.name}</span>
          {product.seller.verified && (
            <span className="text-verified">✓</span>
          )}
        </div>

        <div className="flex items-center gap-1 mb-3">
          <Star className="fill-yellow-400 text-yellow-400" size={14} />
          <span className="text-sm font-medium">{product.seller.rating}</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">${product.price}</span>
            {priceComparison && (
              <span className="text-sm text-muted-foreground line-through">${product.averagePrice}</span>
            )}
          </div>
          
          {priceComparison ? (
            <div className="flex items-center gap-1 text-xs text-primary">
              <TrendingDown size={12} />
              <span>Below average price</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp size={12} />
              <span>Avg: ${product.averagePrice}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={() => onViewDetails(product)}
        >
          View Details
        </Button>
        <Button 
          variant="default"
          className="flex-1"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
