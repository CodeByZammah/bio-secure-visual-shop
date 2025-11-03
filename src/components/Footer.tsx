import { Facebook, Twitter, Instagram, Youtube, ShieldCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
                BS
              </div>
              <div>
                <h2 className="text-xl font-bold">BioSecure.AI</h2>
                <p className="text-xs text-muted-foreground">Secure Shopping</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Shop with confidence. Every transaction is protected by our AI-powered fraud detection system, ensuring your security with every purchase.
            </p>
            <div className="flex gap-3">
              <button className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Facebook size={18} />
              </button>
              <button className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Twitter size={18} />
              </button>
              <button className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Instagram size={18} />
              </button>
              <button className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Youtube size={18} />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Computers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Mobile Phones</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Audio</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cameras</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Wearables</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 BioSecure.AI. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-secondary" size={16} />
            <span>Secured by AI Fraud Detection</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
