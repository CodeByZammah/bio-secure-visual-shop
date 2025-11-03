import { Laptop, Smartphone, Camera, Watch, Headphones, Tablet, Award, Tv } from "lucide-react";

const categories = [
  { name: "Computers", icon: Laptop, color: "bg-blue-50 text-blue-600 dark:bg-blue-950/30" },
  { name: "Mobile", icon: Smartphone, color: "bg-green-50 text-green-600 dark:bg-green-950/30" },
  { name: "Cameras", icon: Camera, color: "bg-purple-50 text-purple-600 dark:bg-purple-950/30" },
  { name: "Sale", icon: Award, color: "bg-primary/10 text-primary" },
  { name: "Tablets", icon: Tablet, color: "bg-orange-50 text-orange-600 dark:bg-orange-950/30" },
  { name: "Smart Watch", icon: Watch, color: "bg-pink-50 text-pink-600 dark:bg-pink-950/30" },
  { name: "TVs", icon: Tv, color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/30" },
  { name: "Audio", icon: Headphones, color: "bg-teal-50 text-teal-600 dark:bg-teal-950/30" },
];

export const Categories = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Shop by Category</h2>
        <p className="text-muted-foreground">Find exactly what you're looking for</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className="group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-muted/50 transition-all duration-300 hover:scale-105"
          >
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${category.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
              <category.icon size={28} className="md:w-8 md:h-8" />
            </div>
            <span className="text-sm font-medium text-center">{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};
