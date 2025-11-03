import { Button } from "@/components/ui/button";
import promoPhones from "@/assets/promo-phones.jpg";
import promoAudio from "@/assets/promo-audio.jpg";

export const PromoBanners = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-red-500 to-red-600 min-h-[300px] md:min-h-[400px]">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full md:w-1/2 p-6 md:p-10 text-white z-10">
              <p className="text-sm font-medium mb-2 opacity-90">Holiday Deals</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                Up to
                <br />
                30% off
              </h2>
              <p className="text-sm md:text-base mb-6 opacity-90">Selected Smartphone Brands</p>
              <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Shop
              </Button>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full">
              <img
                src={promoPhones}
                alt="Smartphone deals"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-purple-700 min-h-[300px] md:min-h-[400px]">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full md:w-1/2 p-6 md:p-10 text-white z-10">
              <p className="text-sm font-medium mb-2 opacity-90">Just In</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                Take Your
                <br />
                Sound
                <br />
                Anywhere
              </h2>
              <p className="text-sm md:text-base mb-6 opacity-90">Top Headphone Brands</p>
              <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Shop
              </Button>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full">
              <img
                src={promoAudio}
                alt="Headphone collection"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
