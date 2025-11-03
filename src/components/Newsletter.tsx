import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Mail className="text-primary" size={32} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Exclusive Deals & Updates
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter and be the first to know about new products, special offers, and security updates.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="h-12 flex-1"
            />
            <Button size="lg" className="h-12 px-8">
              Subscribe
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
