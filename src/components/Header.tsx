import { ShoppingCart, ShieldCheck, Search, Heart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  cartItemCount: number;
}

export const Header = ({ cartItemCount }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="border-b">
        <div className="container mx-auto px-4 h-12 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <ShieldCheck className="text-secondary" size={16} />
            <span className="hidden sm:inline">Protected by BioSecure.AI Fraud Detection</span>
            <span className="sm:hidden">Secure Shopping</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-foreground transition-colors hidden sm:inline">
              <User size={16} className="inline mr-1" />
              Login
            </button>
            <button className="hover:text-foreground transition-colors">
              <Heart size={16} className="inline mr-1" />
              <span className="hidden sm:inline">Wishlist</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
        >
          <div className="bg-primary text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
            BS
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold">BioSecure.AI</h1>
          </div>
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search for products..." 
              className="pl-10 pr-4 h-11"
            />
            <Button size="sm" className="absolute right-1 top-1/2 -translate-y-1/2">
              Search
            </Button>
          </div>
        </div>

        {/* Actions */}
        <nav className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search size={20} />
          </Button>
          
          <Button 
            variant={location.pathname === "/cart" ? "default" : "ghost"}
            size="icon"
            className="relative"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart size={20} />
            {cartItemCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu size={20} />
          </Button>
        </nav>
      </div>

      {/* Navigation */}
      <div className="border-t hidden md:block">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1 h-12">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              Shop All
            </Button>
            <Button variant="ghost" size="sm">Computers</Button>
            <Button variant="ghost" size="sm">Mobile</Button>
            <Button variant="ghost" size="sm">Audio</Button>
            <Button variant="ghost" size="sm">Cameras</Button>
            <Button variant="ghost" size="sm">Wearables</Button>
            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
              Sale
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
