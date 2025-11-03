import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <Badge variant="secondary" className="w-fit">
              Flash Prices
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Incredible Prices
              <br />
              on All Your
              <br />
              <span className="text-primary">Favorite Items</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Get more for less on selected brands with AI-powered fraud protection on every purchase.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Browse Categories
              </Button>
            </div>

            <div className="flex items-center gap-2 p-4 bg-secondary/10 rounded-lg border border-secondary/20 w-fit">
              <ShieldCheck className="text-secondary" size={20} />
              <span className="text-sm font-medium">Protected by BioSecure.AI</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Premium electronics showcase"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg">
              <div className="text-sm font-medium">Up to</div>
              <div className="text-3xl font-bold">50% OFF</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
