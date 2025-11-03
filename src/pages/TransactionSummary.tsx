import { CheckCircle2, ShieldCheck, ArrowRight, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Product } from "@/data/products";
import { SecurityBadge } from "@/components/SecurityBadge";

interface TransactionSummaryProps {
  cartItems: Product[];
}

export const TransactionSummary = ({ cartItems }: TransactionSummaryProps) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const hasSuspiciousItems = cartItems.some(item => item.fraudScore > 50 || !item.seller.verified);
  const fraudScore = Math.max(...cartItems.map(item => item.fraudScore));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <CheckCircle2 className="text-primary" size={32} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Transaction Summary</h1>
          <p className="text-muted-foreground">Review your order before proceeding to payment</p>
        </div>

        {hasSuspiciousItems && (
          <Alert variant="default" className="mb-6 border-2 border-warning bg-warning/5">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <AlertTitle className="text-warning font-bold">Security Analysis Complete</AlertTitle>
            <AlertDescription className="text-sm">
              <p className="mb-2">
                BioSecure.AI has detected unusual patterns in this transaction. Risk score: <span className="font-bold">{fraudScore}/100</span>
              </p>
              <p>Additional verification will be required in the banking layer to ensure transaction security.</p>
            </AlertDescription>
          </Alert>
        )}

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Order Items</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-3 rounded-lg border">
                <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold line-clamp-1">{item.name}</h3>
                    <span className="font-bold flex-shrink-0">${item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.seller.name}</p>
                  <SecurityBadge fraudScore={item.fraudScore} verified={item.seller.verified} size="sm" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Payment Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal ({cartItems.length} items)</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium text-primary">FREE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-medium">$0.00</span>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between text-xl font-bold">
              <span>Total Amount</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 border-primary">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-primary flex-shrink-0 mt-1" size={24} />
              <div className="space-y-2">
                <h3 className="font-bold">Next Step: Banking Layer (Layer 2)</h3>
                <p className="text-sm text-muted-foreground">
                  Your transaction details will be securely transferred to the banking verification system. 
                  {hasSuspiciousItems && " Due to detected risk factors, enhanced verification protocols will be applied."}
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <span>256-bit encryption</span>
                  <span>•</span>
                  <span>PCI DSS compliant</span>
                  <span>•</span>
                  <span>AI fraud detection</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button variant="outline" className="flex-1" onClick={() => window.history.back()}>
            Back to Checkout
          </Button>
          <Button className="flex-1 gap-2" size="lg">
            Proceed to Banking Layer
            <ArrowRight size={18} />
          </Button>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          By proceeding, you agree to BioSecure.AI's terms of service and fraud protection policies
        </p>
      </div>
    </div>
  );
};
