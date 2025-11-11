import { Shield, Calendar, MessageSquare, Wallet, Users, Clock, Star, TrendingDown, Lock, Phone, Home, Coffee, MapPin, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: TrendingDown,
    title: "More Affordable Than Flying",
    description: "Save hundreds on long-distance travel by sharing petrol costs instead of paying for expensive plane tickets and airport fees.",
    color: "orange"
  },
  {
    icon: Clock,
    title: "Travel On Your Schedule",
    description: "Unlike buses and trains with fixed departure times, find rides that match your exact timing or offer your own ride when it suits you.",
    color: "orange"
  },
  {
    icon: Home,
    title: "Door-to-Door Convenience",
    description: "No rushing to bus stations or airports. Get picked up and dropped off exactly where you need to be—your home, office, or chosen location.",
    color: "orange"
  },
  {
    icon: Users,
    title: "Comfortable, Personal Travel",
    description: "Travel in small groups with verified people you can trust, unlike cramped buses. Choose your travel companions and enjoy a social journey.",
    color: "orange"
  },
  {
    icon: MapPin,
    title: "Direct Routes, No Stops",
    description: "Unlike buses that make multiple stops, enjoy direct routes to your destination. Save hours compared to public transportation.",
    color: "orange"
  },
  {
    icon: Wallet,
    title: "Secure, Cashless Payments",
    description: "Built-in payment protection and no awkward cash exchanges. Everything is handled securely through the app.",
    color: "orange"
  },
  {
    icon: Shield,
    title: "Safety Through Verification",
    description: "Every user is verified with ID, phone number, and photo. See real ratings and reviews before you travel—something buses and taxis can't offer.",
    color: "orange"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Travel",
    description: "Reduce your carbon footprint by sharing rides instead of everyone driving separately. Better for the environment than taking multiple individual trips.",
    color: "orange"
  },
  {
    icon: Coffee,
    title: "Make Travel Social",
    description: "Meet interesting people, make friends, and build a trusted travel network. Turn boring bus rides into enjoyable social experiences.",
    color: "orange"
  },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-orange-50 border border-orange-200 rounded-full mb-4 sm:mb-6">
            <Shield className="h-4 w-4 text-orange-600" />
            <span className="text-xs sm:text-sm font-semibold text-orange-900">The smarter way to travel long distances</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 px-2">
            Why Woza is the{" "}
            <span className="text-orange-600">Smart Choice</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
            Real advantages over planes, buses, and taxis—discover why ridesharing is the future of long-distance travel in South Africa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="mb-4 sm:mb-6 inline-flex p-3 sm:p-4 rounded-xl bg-orange-50">
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-50 to-orange-50 border-2 border-gray-200 p-6 sm:p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 px-2">
                The Woza Difference
              </h3>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                See why thousands are leaving WhatsApp groups behind
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* WhatsApp Groups */}
              <div className="bg-white rounded-2xl p-5 sm:p-8 border-2 border-red-100">
                <div className="flex items-center gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2">
                  <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-base sm:text-xl text-gray-900">WhatsApp Groups</h4>
                    <p className="text-xs sm:text-sm text-red-600">The old, chaotic way</p>
                  </div>
                </div>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg sm:text-xl flex-shrink-0">✗</span>
                    <span className="leading-relaxed">Scroll through 500+ messages to find a ride</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg sm:text-xl flex-shrink-0">✗</span>
                    <span className="leading-relaxed">Zero verification—anyone can join</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg sm:text-xl flex-shrink-0">✗</span>
                    <span className="leading-relaxed">Awkward cash payments or bank transfers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg sm:text-xl flex-shrink-0">✗</span>
                    <span className="leading-relaxed">Messages disappear in endless chat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg sm:text-xl flex-shrink-0">✗</span>
                    <span className="leading-relaxed">No ratings, no reviews, no accountability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg sm:text-xl flex-shrink-0">✗</span>
                    <span className="leading-relaxed">No tracking or trip updates</span>
                  </li>
                </ul>
              </div>
              
              {/* Woza */}
              <div className="bg-white rounded-2xl p-5 sm:p-8 border-2 border-orange-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-orange-200">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-lg">W</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-xl text-gray-900">Woza</h4>
                    <p className="text-xs sm:text-sm text-orange-600">The modern, smart way</p>
                  </div>
                </div>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                    <span className="leading-relaxed">Find rides in seconds with smart search</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                    <span className="leading-relaxed">100% verified users with ID & phone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                    <span className="leading-relaxed">Secure in-app payments with protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                    <span className="leading-relaxed">Everything organized in one clean interface</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                    <span className="leading-relaxed">Real ratings & reviews from real travelers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                    <span className="leading-relaxed">Real-time tracking & instant notifications</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom highlight */}
            <div className="mt-8 sm:mt-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-white flex-shrink-0" />
                <span>Start traveling smarter today</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
