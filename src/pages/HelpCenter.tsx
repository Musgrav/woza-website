import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Mail, Phone } from "lucide-react";

const HelpCenter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <HelpCircle className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about using Woza
            </p>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Getting Started */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I create an account?</AccordionTrigger>
                  <AccordionContent>
                    Download the Woza app from the App Store or Google Play Store. Tap "Sign Up" and enter your phone number, email, and basic profile information. You'll need to verify your email and phone number. Complete your profile with a photo and any additional details to help build trust with other users.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What do I need to offer a ride?</AccordionTrigger>
                  <AccordionContent>
                    To offer rides, you need a verified account, a valid driver's license, vehicle registration documents, and proof of insurance. Upload these documents in the app, and our team will review them within 24-48 hours. Once verified, you can start posting rides.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I search for a ride?</AccordionTrigger>
                  <AccordionContent>
                    On the home screen, enter your departure location, destination, and travel date. The app will show you available rides that match your criteria. You can filter results by departure time, price, and driver rating. Tap on a ride to see more details and request to book.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Is my personal information safe?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we take your privacy seriously. Your personal information is encrypted and stored securely. We only share necessary details (like your first name and profile photo) with confirmed ride participants. Read our Privacy Policy for more details on how we protect your data.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Booking & Travel */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking & Travel</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I book a ride?</AccordionTrigger>
                  <AccordionContent>
                    After finding a ride that suits your needs, tap "Request to Book." The driver will receive a notification and can accept or decline your request. Once accepted, you'll receive confirmation with pick-up details. You can message the driver directly through the app to coordinate meeting points.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I cancel my booking?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can cancel a booking from your "My Trips" section. If you cancel more than 24 hours before departure, there's no fee. Cancellations within 24 hours may incur a cancellation fee to compensate the driver. Emergency cancellations are reviewed on a case-by-case basis.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>What if the driver cancels on me?</AccordionTrigger>
                  <AccordionContent>
                    If a driver cancels, you'll receive an immediate notification and a full refund (if payment was made). The app will suggest alternative rides for the same route. Drivers who frequently cancel may face account restrictions. Contact support if you need urgent assistance finding alternative transport.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>Can I bring luggage?</AccordionTrigger>
                  <AccordionContent>
                    Yes, but luggage allowance varies by ride. Each ride listing shows how many bags are allowed. If you have extra or oversized luggage, message the driver before booking to confirm it can be accommodated. Being upfront about luggage helps avoid issues on travel day.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger>What happens if I'm running late?</AccordionTrigger>
                  <AccordionContent>
                    Message your driver immediately through the app. Most drivers allow a short grace period, but they're not obligated to wait beyond the agreed time. If you're significantly delayed, the driver may need to leave without you, which could be considered a no-show. Communication is key.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Payments */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payments</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-10">
                  <AccordionTrigger>How does payment work?</AccordionTrigger>
                  <AccordionContent>
                    Passengers can pay through the app using a credit/debit card or mobile money. The amount is held securely until the trip is completed. Drivers receive payment within 24-48 hours after trip completion. Some drivers may also accept cash payment, which can be arranged directly with them.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger>When am I charged for a ride?</AccordionTrigger>
                  <AccordionContent>
                    Your payment method is authorized when you book, but you're only charged after the trip is successfully completed. If the ride is cancelled by the driver, you won't be charged. If you cancel, our cancellation policy applies based on the timing of your cancellation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger>Is there a booking fee?</AccordionTrigger>
                  <AccordionContent>
                    Woza charges a small service fee (typically 10-15%) to cover platform costs, payment processing, insurance, and customer support. This fee is included in the total price you see before booking - there are no hidden charges. Drivers keep the majority of the ride price.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13">
                  <AccordionTrigger>How do refunds work?</AccordionTrigger>
                  <AccordionContent>
                    If you're eligible for a refund (driver cancellation, no-show by driver, etc.), it will be processed automatically to your original payment method within 5-7 business days. For disputed refunds, contact our support team with details, and we'll investigate and respond within 48 hours.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Safety & Trust */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety & Trust</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-14">
                  <AccordionTrigger>How are users verified?</AccordionTrigger>
                  <AccordionContent>
                    All users must verify their phone number and email address. Drivers undergo additional verification including ID checks, driver's license validation, vehicle registration, and insurance verification. We also run background checks where possible. Users build reputation through ratings and reviews.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15">
                  <AccordionTrigger>What safety features does Woza have?</AccordionTrigger>
                  <AccordionContent>
                    Woza includes real-time GPS tracking, an in-app emergency button, trip sharing (so friends/family can track your journey), user ratings and reviews, verified profiles, and 24/7 customer support. We also have a dedicated safety team that investigates reported incidents.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-16">
                  <AccordionTrigger>Can I choose who I ride with?</AccordionTrigger>
                  <AccordionContent>
                    Yes! You can view driver profiles including their ratings, reviews, verification status, and vehicle details before booking. Similarly, drivers can review passenger profiles and ratings before accepting booking requests. This mutual selection process helps ensure comfortable rides.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-17">
                  <AccordionTrigger>What if I feel unsafe during a trip?</AccordionTrigger>
                  <AccordionContent>
                    Your safety is our top priority. Use the in-app emergency button to alert our safety team and local authorities if needed. You can also share your live trip location with trusted contacts. After the trip, report the incident through the app, and we'll investigate immediately and take appropriate action.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Account & Profile */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Account & Profile</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-18">
                  <AccordionTrigger>How do I update my profile information?</AccordionTrigger>
                  <AccordionContent>
                    Go to your profile by tapping the profile icon in the app. You can edit your name, photo, bio, preferences, and contact information. Some details like verification documents require re-verification if changed. Keep your profile updated to maintain trust with other users.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-19">
                  <AccordionTrigger>How do ratings and reviews work?</AccordionTrigger>
                  <AccordionContent>
                    After each trip, both drivers and passengers can rate each other on a 5-star scale and leave a written review. Ratings are visible on profiles and help build trust in the community. Be honest but respectful in reviews. Users with consistently low ratings may face account restrictions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-20">
                  <AccordionTrigger>Can I delete my account?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can delete your account anytime from Settings. Note that this is permanent and cannot be undone. Complete any pending trips first, as account deletion will cancel all future bookings. We retain some data for legal and safety purposes as outlined in our Privacy Policy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-21">
                  <AccordionTrigger>I forgot my password. What do I do?</AccordionTrigger>
                  <AccordionContent>
                    On the login screen, tap "Forgot Password?" and enter your registered email or phone number. You'll receive a password reset link or code. Follow the instructions to create a new password. If you don't receive the reset link, check your spam folder or contact support.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Contact Support */}
            <div className="bg-orange-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still need help?</h2>
              <p className="text-gray-600 mb-6">
                Our support team is here to assist you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:help@usewoza.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Email Support
                </a>
                <a 
                  href="tel:+27123456789"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-orange-600 border-2 border-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;

