import { ShoppingCart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  cartItemCount: number;
}

export const Header = ({ cartItemCount }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <ShieldCheck className="text-primary" size={28} />
          <div>
            <h1 className="text-xl font-bold">BioSecure.AI</h1>
            <p className="text-xs text-muted-foreground">Secure Shopping Platform</p>
          </div>
        </button>

        <nav className="flex items-center gap-4">
          {location.pathname !== "/" && (
            <Button variant="ghost" onClick={() => navigate("/")}>
              Products
            </Button>
          )}
          
          <Button 
            variant={location.pathname === "/cart" ? "default" : "outline"}
            className="relative"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart size={20} />
            {cartItemCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </nav>
      </div>
    </header>
  );
};
