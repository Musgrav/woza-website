import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, CheckCircle, AlertTriangle, Phone, MapPin, Users, FileCheck, Camera, Bell } from "lucide-react";

const SafetyCenter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Safety Center</h1>
            <p className="text-lg text-gray-600">
              Your safety is our top priority. Learn about our commitment to keeping you secure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Safety Features */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="h-6 w-6 text-orange-600" />
                Our Safety Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FileCheck className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Verified Users</h3>
                    <p className="text-sm text-gray-600">
                      All users undergo identity verification. Drivers provide additional documentation including license, vehicle registration, and insurance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Real-Time GPS Tracking</h3>
                    <p className="text-sm text-gray-600">
                      Share your live trip location with trusted contacts. They can follow your journey in real-time for added peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Bell className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Emergency Assistance</h3>
                    <p className="text-sm text-gray-600">
                      In-app emergency button connects you immediately to our safety team and can alert local authorities if needed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ratings & Reviews</h3>
                    <p className="text-sm text-gray-600">
                      Two-way rating system helps maintain community standards. View ratings and reviews before booking or accepting rides.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Camera className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Profile Photos</h3>
                    <p className="text-sm text-gray-600">
                      Verified profile photos help you identify your driver or passenger. Know who you're riding with before you travel.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-sm text-gray-600">
                      Our dedicated safety team is available around the clock to assist with any concerns or incidents.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Tips for Passengers */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-orange-600" />
                Safety Tips for Passengers
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Check driver details:</strong> Before getting in, verify the driver's photo, name, vehicle make/model, and license plate match the app.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Share your trip:</strong> Use the trip sharing feature to let friends or family track your journey in real-time.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Sit in the back:</strong> Sitting in the back seat provides personal space and a safer seating position.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Trust your instincts:</strong> If something feels wrong, don't get in the vehicle. You can cancel and report concerns.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Keep valuables secure:</strong> Keep your phone, wallet, and other valuables with you at all times.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Buckle up:</strong> Always wear your seatbelt throughout the entire journey.
                  </span>
                </li>
              </ul>
            </div>

            {/* Safety Tips for Drivers */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-orange-600" />
                Safety Tips for Drivers
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Verify passengers:</strong> Check that the passenger's photo and name match before they enter your vehicle.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Review profiles:</strong> Check passenger ratings and reviews before accepting booking requests.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Keep your vehicle maintained:</strong> Regular maintenance ensures your car is safe and reliable for passengers.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Take breaks on long trips:</strong> Don't drive when fatigued. Plan rest stops on long-distance journeys.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Follow traffic laws:</strong> Obey speed limits, traffic signals, and all road rules to ensure everyone's safety.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Maintain insurance:</strong> Keep valid insurance coverage and ensure all documents are up to date.
                  </span>
                </li>
              </ul>
            </div>

            {/* Emergency Procedures */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                What to Do in an Emergency
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">If you feel unsafe during a trip:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                    <li>Use the in-app emergency button to alert our safety team immediately</li>
                    <li>Call local emergency services (10111 for South African Police Service) if in immediate danger</li>
                    <li>Ask the driver to stop in a safe, public location</li>
                    <li>Share your live location with trusted contacts using the trip sharing feature</li>
                    <li>Report the incident through the app as soon as you're safe</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">If you're in an accident:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                    <li>Check for injuries and call emergency services if needed (10177 for ambulance)</li>
                    <li>Move to a safe location if possible, away from traffic</li>
                    <li>Exchange information with other parties involved</li>
                    <li>Take photos of the accident scene, vehicle damage, and any relevant details</li>
                    <li>Report the incident to Woza support immediately through the app</li>
                    <li>File a police report if required</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">If you witness suspicious behavior:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                    <li>Report it through the app's reporting feature</li>
                    <li>Provide as much detail as possible about the incident</li>
                    <li>Our safety team will investigate and take appropriate action</li>
                    <li>Your report remains confidential</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Verification Process */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Verification Process</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">For All Users:</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex gap-2">
                      <span className="text-orange-600">•</span>
                      Phone number verification via SMS
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600">•</span>
                      Email address verification
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600">•</span>
                      Profile photo upload and verification
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600">•</span>
                      Identity document verification
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Additional Driver Verification:</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex gap-2">
                      <span className="text-orange-600">•</span>
                      Valid driver's license verification
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600">•</span>
                      Vehicle registration documents
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600">•</span>
                      Proof of vehicle insurance
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600">•</span>
                      Background check where available
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600">•</span>
                      Vehicle inspection and roadworthiness certificate
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Community Guidelines</h2>
              <p className="text-gray-700 mb-4">
                To maintain a safe and respectful community, all users must adhere to these guidelines:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span><strong>Respect others:</strong> Treat all users with courtesy and respect</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span><strong>No discrimination:</strong> Discrimination based on race, religion, gender, or any other characteristic is strictly prohibited</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span><strong>No harassment:</strong> Verbal, physical, or sexual harassment will result in immediate account suspension</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span><strong>No drugs or alcohol:</strong> Driving under the influence is forbidden. Intoxicated passengers may be refused service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span><strong>Honest reviews:</strong> Leave truthful, fair reviews. False or malicious reviews violate our terms</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span><strong>Report issues:</strong> Report safety concerns, policy violations, or suspicious activity immediately</span>
                </li>
              </ul>
            </div>

            {/* Contact Safety Team */}
            <div className="bg-orange-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety Concerns?</h2>
              <p className="text-gray-600 mb-6">
                Our safety team is available 24/7 to assist you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:help@woza.co.za"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Contact Safety Team
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

export default SafetyCenter;

