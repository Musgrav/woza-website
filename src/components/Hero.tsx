  import { Card } from "@/components/ui/card";
import { Check, Clock } from "lucide-react";
import handMockup from "@/assets/handmockup.svg";
import blonde from "@/assets/blonde.png";
import blackguy from "@/assets/blackguy.png";
import boy from "@/assets/boy.png";
import appstore from "@/assets/appstore.svg?url";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-visible bg-white pb-0 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 relative z-40">
        {/* Header Text */}
        <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight px-2">
            The #1 rideshare app for{" "}
            <span className="block mt-1 sm:mt-2">long distance travel</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Save money on petrol and enjoy cheap rides you can actually trust—connect with real, verified travelers for affordable long-distance trips across South Africa.
          </p>
          
          {/* App Store Badge */}
          <div className="flex justify-center -mt-2 sm:-mt-4">
            <a 
              href="https://apps.apple.com/za/app/woza-rides/id6745831021"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={appstore} 
                alt="Download on the App Store" 
                className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>

      </div>

      {/* Phone Mockup Container with Floating Cards */}
      <div className="relative w-full flex justify-center -mt-8 sm:-mt-20 md:-mt-32 lg:-mt-48 z-20">
        <div className="relative w-full max-w-7xl h-[500px] sm:h-[700px] md:h-[800px] lg:h-[900px]">
          
          {/* Floating Notification Cards */}
          {/* Top Left Card - Moved further down relative to hand mockup */}
          <Card className="absolute top-80 left-12 sm:left-20 lg:left-36 w-64 p-4 shadow-xl border-2 bg-white animate-float hidden md:block z-10">
            <div className="flex items-start gap-3">
              <img 
                src={boy} 
                alt="Driver profile" 
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <div className="font-semibold text-sm mb-1">Durban → Pretoria 🚗</div>
                <div className="text-xs text-gray-600">Arriving in 5 minutes at pickup point</div>
              </div>
            </div>
          </Card>

          {/* Top Right Card */}
          <Card className="absolute top-64 right-4 sm:right-12 lg:right-24 w-72 p-4 shadow-xl border-2 bg-white animate-float-delayed hidden lg:block z-10">
            <div className="flex items-center gap-3">
              <img 
                src={blonde} 
                alt="Driver profile" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="font-semibold text-sm">CPT 🥳 JHB • Departed</div>
                <div className="text-xs text-gray-600">Left at 6:15am 🎉</div>
              </div>
            </div>
          </Card>

          {/* Middle Left Card - Moved further down relative to hand mockup */}
          <Card className="absolute top-[32rem] left-12 sm:left-24 lg:left-40 w-64 p-4 shadow-xl border-2 bg-white animate-float-delayed hidden lg:block z-10">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-sm mb-1">Ride request pending</div>
                <div className="text-xs text-gray-600">Waiting for driver confirmation</div>
              </div>
            </div>
          </Card>

          {/* Middle Right Card - Moved slightly up */}
          <Card className="absolute top-[25rem] right-16 sm:right-16 lg:right-48 w-64 p-4 shadow-xl border-2 bg-green-50 border-green-200 animate-float hidden md:block z-10">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-sm text-green-900 mb-1">Trip completed</div>
                <div className="text-xs text-green-700">Durban → Pretoria • On time arrival</div>
              </div>
            </div>
          </Card>

          {/* Bottom Right Card - Moved down relative to hand mockup */}
          <Card className="absolute bottom-60 right-4 sm:right-16 lg:right-28 w-72 p-4 shadow-xl border-2 bg-orange-50 border-orange-200 animate-float hidden md:block z-10">
            <div className="flex items-center gap-3">
              <img 
                src={blackguy} 
                alt="Driver profile" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="font-semibold text-sm">Durban ✈️ Pietermaritzburg</div>
                <div className="text-xs text-gray-600">Leaving today at 6:00am • 2 seats left</div>
              </div>
            </div>
          </Card>

          {/* Hand Mockup - Positioned higher up, in front */}
          <div className="absolute -top-4 sm:-top-10 md:-top-16 lg:-top-24 left-1/2 -translate-x-1/2 w-[280px] sm:w-[450px] md:w-[550px] lg:w-[700px] xl:w-[800px] z-30">
            <img 
              src={handMockup}
              alt="Hand holding phone showing Woza app" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
