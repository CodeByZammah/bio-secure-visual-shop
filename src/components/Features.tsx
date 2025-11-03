import { Package, ShieldCheck, DollarSign, Clock } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Curb-side pickup",
    description: "Fast and convenient",
  },
  {
    icon: ShieldCheck,
    title: "Free shipping on orders over $50",
    description: "Shop with confidence",
  },
  {
    icon: DollarSign,
    title: "Low prices guaranteed",
    description: "Best deals online",
  },
  {
    icon: Clock,
    title: "Available to you 24/7",
    description: "Always here to help",
  },
];

export const Features = () => {
  return (
    <section className="border-y bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center">
                  <feature.icon className="text-primary" size={24} />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm leading-tight mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
