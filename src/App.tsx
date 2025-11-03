import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { TransactionSummary } from "./pages/TransactionSummary";
import NotFound from "./pages/NotFound";
import { Product } from "./data/products";

const queryClient = new QueryClient();

const App = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background flex flex-col">
            <Header cartItemCount={cartItems.length} />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index onAddToCart={handleAddToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
                <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
                <Route path="/transaction-summary" element={<TransactionSummary cartItems={cartItems} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
