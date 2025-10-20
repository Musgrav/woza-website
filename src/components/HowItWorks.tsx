import { Search, UserCheck, Car, CheckCircle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Search,
    title: "Find Your Route",
    description: "Enter your starting point and destination. See all available rides, no more scrolling through WhatsApp groups.",
    time: "Takes 30 seconds",
    color: "orange"
  },
  {
    icon: UserCheck,
    title: "Choose Your Match",
    description: "Browse verified drivers with real ratings and reviews. See their trip history, car details, and departure times.",
    time: "2 minutes to book",
    color: "orange"
  },
  {
    icon: Car,
    title: "Book & Confirm",
    description: "Secure your spot with one tap. Get instant confirmation, trip details, and your driver's contact info—all in one place.",
    time: "Instant confirmation",
    color: "orange"
  },
  {
    icon: CheckCircle,
    title: "Travel Safe",
    description: "Track your journey in real-time. Chat with your driver in-app. Rate your experience after the trip.",
    time: "Peace of mind",
    color: "orange"
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative pt-24 pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full mb-6">
            <Clock className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-900">Book a ride in under 30 seconds</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            So Simple, It's Almost{" "}
            <span className="text-orange-600">Too Easy</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            No more chaotic WhatsApp groups. No more awkward payment arrangements. 
            Just simple, safe, affordable travel—exactly how it should be.
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg border-2 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 text-white flex items-center justify-center text-xl font-bold shadow-xl">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className="mb-6 inline-flex p-4 rounded-xl bg-orange-50">
                <step.icon className="w-8 h-8 text-orange-600" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {step.description}
              </p>
              
              {/* Time indicator */}
              <div className="flex items-center gap-2 pt-3 border-t">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-semibold text-gray-700">{step.time}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Real Example Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 p-8 sm:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Real Example: Pretoria → Durban 🚗
              </h3>
              <p className="text-lg text-gray-600">
                See how much easier and safer Woza makes your journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Old Way */}
              <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">😫</span>
                  <h4 className="font-bold text-lg text-gray-900">The Old Way</h4>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Scroll through 500+ WhatsApp messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Call 5 different drivers to check availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>No idea who you're traveling with</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Awkward cash payment or bank transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="font-semibold text-black">
                      No safety checks or verified drivers
                    </span>
                  </li>
                </ul>
              </div>
              
              {/* Woza Way */}
              <div className="bg-white rounded-xl p-6 border-2 border-orange-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">✨</span>
                  <h4 className="font-bold text-lg text-gray-900">The Woza Way</h4>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>Search "Pretoria to Durban"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>See dozens of verified drivers instantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>Check ratings, reviews, and profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>Book & pay securely in one tap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span className="font-semibold text-black">
                      Every driver is verified for your safety
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
