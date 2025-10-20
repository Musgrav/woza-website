import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import blonde from "@/assets/blonde.png";
import blackguy from "@/assets/blackguy.png";
import boy from "@/assets/boy.png";

const testimonials = [
  {
    name: "Tallulah C.",
    role: "University Student",
    route: "Durban → Pretoria",
    image: blonde,
    rating: 5,
    text: "I used to spend hours in WhatsApp groups trying to find a lift home. With Woza, I found a verified driver in 2 minutes. Saved R350 on my last trip!",
    trips: 12
  },
  {
    name: "Sipho K.",
    role: "Business Professional",
    route: "Cape Town → Johannesburg",
    image: blackguy,
    rating: 5,
    text: "As someone who travels weekly, Woza has been a game-changer. The payment system is seamless, drivers are professional, and I always feel safe.",
    trips: 28
  },
  {
    name: "Michael T.",
    role: "Frequent Traveler",
    route: "Pietermaritzburg → Durban",
    image: boy,
    rating: 5,
    text: "No more awkward cash exchanges or banking details shared with strangers. Everything is handled professionally through the app. Highly recommend!",
    trips: 15
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white via-orange-50/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full mb-6">
            <Star className="h-4 w-4 text-yellow-600 fill-yellow-600" />
            <span className="text-sm font-semibold text-yellow-900">4.8★ average rating from real users</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Real People,{" "}
            <span className="text-orange-600">Real Stories</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join thousands of South Africans who've already made the switch to smarter travel
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border-2 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-orange-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-6 border-t-2">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                />
                <div className="flex-1">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {testimonial.trips} trips completed • {testimonial.route}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-orange-500 text-white p-12 shadow-2xl border-0">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-orange-100 text-lg">
                  Would recommend Woza to friends
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">4.8★</div>
                <div className="text-orange-100 text-lg">
                  Average rating from 3,500+ reviews
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">R2.5M+</div>
                <div className="text-orange-100 text-lg">
                  Total money saved by our community
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

