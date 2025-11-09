import { Shield, Calendar, MessageSquare, Wallet, Users, Clock, Star, TrendingDown, Lock, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: Shield,
    title: "Verified & Safe",
    description: "Every user is verified with ID, phone number, and photo. Our community maintains a 4.8★ average rating.",
    stat: "100% verified",
    color: "orange"
  },
  {
    icon: TrendingDown,
    title: "Save Up to 60%",
    description: "Pay R250 instead of R600 for Durban to Johannesburg. Split petrol costs and travel smart.",
    stat: "Average savings",
    color: "orange"
  },
  {
    icon: Wallet,
    title: "Secure Payments",
    description: "Built-in payment system with buyer protection. No awkward cash exchanges or sharing bank details.",
    stat: "Bank-level security",
    color: "orange"
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Find a ride in seconds, not hours. No more scrolling through endless WhatsApp messages.",
    stat: "3-minute booking",
    color: "orange"
  },
  {
    icon: Users,
    title: "Trusted Community",
    description: "Read real reviews from real travelers. Build your reputation with every completed trip.",
    stat: "5,000+ members",
    color: "orange"
  },
  {
    icon: MessageSquare,
    title: "Stay Connected",
    description: "In-app messaging, real-time tracking, and instant notifications keep everyone informed.",
    stat: "24/7 support",
    color: "orange"
  },
];

const stats = [
  { value: "5,000+", label: "Active Users" },
  { value: "15,000+", label: "Trips Completed" },
  { value: "4.8★", label: "Average Rating" },
  { value: "R2.5M+", label: "Money Saved" },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-orange-50 border border-orange-200 rounded-full mb-4 sm:mb-6">
            <Shield className="h-4 w-4 text-orange-600" />
            <span className="text-xs sm:text-sm font-semibold text-orange-900">Trusted by thousands of South Africans</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 px-2">
            Why Woza is the{" "}
            <span className="text-orange-600">Smart Choice</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
            Everything you need for safe, affordable, stress-free long-distance travel—
            all in one beautiful app.
          </p>
        </div>
        
        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-2 shadow-lg text-center p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
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
                
                <div className="mb-3 flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {benefit.stat}
                  </Badge>
                </div>
                
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
                <span>Join 5,000+ smart travelers today</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
