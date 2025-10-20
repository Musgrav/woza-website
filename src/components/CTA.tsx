import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Smartphone, Clock, Shield, TrendingDown } from "lucide-react";

export const CTA = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Main Headline */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-semibold">Launch offer: Get your first ride free</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Stop Wasting Time on{" "}
              <span className="block mt-2">WhatsApp Groups</span>
            </h2>
            
            <p className="text-xl sm:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
              Join 5,000+ smart South Africans who save time, money, and stress 
              with every trip. Your next affordable ride is waiting.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="text-lg px-10 h-16 bg-white text-orange-600 hover:bg-gray-100 shadow-2xl hover:shadow-xl transition-all font-bold text-xl"
            >
              Download Woza Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-10 h-16 bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all font-semibold"
            >
              View Demo
              <Smartphone className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8 opacity-95">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span className="text-sm font-medium">Free to sign up</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span className="text-sm font-medium">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span className="text-sm font-medium">Available on web & mobile</span>
            </div>
          </div>

          {/* Value Props Cards */}
          <div className="grid md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center hover:bg-white/20 transition-all">
              <TrendingDown className="h-10 w-10 mx-auto mb-3" />
              <div className="font-bold text-lg mb-1">Save Up to 60%</div>
              <div className="text-sm opacity-90">On every long-distance trip</div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center hover:bg-white/20 transition-all">
              <Shield className="h-10 w-10 mx-auto mb-3" />
              <div className="font-bold text-lg mb-1">100% Verified</div>
              <div className="text-sm opacity-90">Every driver & passenger</div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center hover:bg-white/20 transition-all">
              <Clock className="h-10 w-10 mx-auto mb-3" />
              <div className="font-bold text-lg mb-1">Book in 3 Minutes</div>
              <div className="text-sm opacity-90">Fast, easy, no hassle</div>
            </Card>
          </div>

          {/* Final Push */}
          <div className="pt-8">
            <p className="text-lg opacity-90 mb-4">
              <span className="font-bold">Limited time offer:</span> First 1,000 new users get their first ride completely free
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-full font-bold text-lg shadow-lg">
              <span>⏰</span>
              <span>Don't miss out—join today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
