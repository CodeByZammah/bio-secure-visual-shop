import { Star, TrendingDown, AlertTriangle, ShieldCheck, Package } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Product } from "@/data/products";
import { SecurityBadge } from "./SecurityBadge";
import { Separator } from "@/components/ui/separator";

interface ProductDetailsModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductDetailsModal = ({ product, open, onClose, onAddToCart }: ProductDetailsModalProps) => {
  if (!product) return null;

  const priceComparison = product.price < product.averagePrice;
  const savingsPercent = Math.round(((product.averagePrice - product.price) / product.averagePrice) * 100);
  const isSuspicious = product.fraudScore > 50 || !product.seller.verified;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">{product.name}</DialogTitle>
              <DialogDescription>
                <div className="flex items-center gap-2 text-base">
                  <span>Sold by {product.seller.name}</span>
                  {product.seller.verified && (
                    <span className="text-verified">✓ Verified</span>
                  )}
                </div>
              </DialogDescription>
            </div>
            <SecurityBadge fraudScore={product.fraudScore} verified={product.seller.verified} size="lg" />
          </div>
        </DialogHeader>

        {isSuspicious && (
          <Alert variant={product.fraudScore > 50 ? "destructive" : "default"} className="border-2">
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle className="font-bold">Security Alert</AlertTitle>
            <AlertDescription>
              {product.fraudScore > 50 
                ? "This listing has been flagged as high risk. Price significantly below market average and seller has limited verification." 
                : "This seller is not verified. Exercise caution and verify product authenticity before purchase."}
            </AlertDescription>
          </Alert>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <Star className="fill-yellow-400 text-yellow-400" size={24} />
              <div>
                <div className="font-semibold text-lg">{product.seller.rating} / 5.0</div>
                <div className="text-sm text-muted-foreground">Seller Rating</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Category</div>
              <div className="font-medium">{product.category}</div>
            </div>

            <Separator />

            <div>
              <div className="text-sm text-muted-foreground mb-1">Price Analysis</div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold">${product.price}</span>
                {priceComparison && (
                  <span className="text-lg text-muted-foreground line-through">${product.averagePrice}</span>
                )}
              </div>
              
              {priceComparison && (
                <div className="flex items-center gap-2 text-primary font-medium">
                  <TrendingDown size={16} />
                  <span>Save {savingsPercent}% - Below average market price</span>
                </div>
              )}
              
              <div className="text-sm text-muted-foreground mt-2">
                Average market price: ${product.averagePrice}
              </div>
            </div>

            <Separator />

            <div>
              <div className="text-sm text-muted-foreground mb-2">Description</div>
              <p className="text-sm leading-relaxed">{product.description}</p>
            </div>

            <Separator />

            <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
              <ShieldCheck className="text-primary mt-0.5 flex-shrink-0" size={20} />
              <div className="text-sm">
                <div className="font-semibold mb-1">BioSecure.AI Protection</div>
                <div className="text-muted-foreground">All transactions are monitored for fraud patterns and unusual activity.</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Package size={16} className="text-muted-foreground" />
              <span className={product.inStock ? "text-primary font-medium" : "text-destructive"}>
                {product.inStock ? "In Stock - Ready to ship" : "Out of Stock"}
              </span>
            </div>

            <Button 
              size="lg" 
              className="w-full"
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              disabled={!product.inStock}
            >
              Add to Cart - ${product.price}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
