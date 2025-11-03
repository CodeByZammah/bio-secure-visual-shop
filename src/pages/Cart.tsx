import { X, ShieldCheck, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SecurityBadge } from "@/components/SecurityBadge";
import { Product } from "@/data/products";
import { useNavigate } from "react-router-dom";

interface CartProps {
  cartItems: Product[];
  onRemoveFromCart: (productId: string) => void;
}

export const Cart = ({ cartItems, onRemoveFromCart }: CartProps) => {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const hasSuspiciousItems = cartItems.some(item => item.fraudScore > 50 || !item.seller.verified);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Your cart is empty</h2>
          <p className="text-muted-foreground">Start shopping to add items to your cart</p>
          <Button onClick={() => navigate("/")}>Browse Products</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {hasSuspiciousItems && (
        <Alert variant="default" className="mb-6 border-warning bg-warning/5">
          <AlertTriangle className="h-5 w-5 text-warning" />
          <AlertTitle className="text-warning">Security Notice</AlertTitle>
          <AlertDescription>
            Your cart contains items from unverified sellers or with unusual pricing. Please review before checkout.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg line-clamp-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.seller.name}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onRemoveFromCart(item.id)}
                        className="flex-shrink-0"
                      >
                        <X size={18} />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <SecurityBadge fraudScore={item.fraudScore} verified={item.seller.verified} />
                      <span className="text-xl font-bold">${item.price}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold">Order Summary</h2>
              
              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal ({cartItems.length} items)</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-primary">FREE</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg border border-primary/20 text-sm">
                <ShieldCheck className="text-primary mt-0.5 flex-shrink-0" size={16} />
                <span className="text-muted-foreground">Protected by BioSecure.AI fraud detection</span>
              </div>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
