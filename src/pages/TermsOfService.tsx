import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
            <p className="text-gray-500 mb-8">Last updated: 8/10/2025</p>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                <p>
                  Welcome to Woza, a ride-sharing platform designed to connect drivers and passengers for long-distance trips. By downloading, registering, or using the Woza app ("App" / "Platform"), you agree to the following Terms & Conditions in full. If you do not agree, you must not use Woza.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">2. Nature of Service</h2>
                <p>
                  Woza is a technology platform that facilitates connections between drivers and passengers.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Woza is not a transport provider, taxi service, travel agency, or logistics company.</li>
                  <li>All rides are arranged directly between users. Woza does not employ, control, or manage drivers or passengers.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">3. Assumptions of Risk</h2>
                <p>
                  By using Woza, you acknowledge and accept the inherent risks of ride-sharing, including but not limited to: accidents, injury, death, property damage, theft, fraud, or disputes.
                </p>
                <p>
                  You agree that you voluntarily assume all risks of entering a vehicle with a stranger, or of carrying strangers in your vehicle.
                </p>
                <p>
                  Woza is not responsible for vetting or verifying users beyond what may be required by law. Any trust or reliance placed on another user is entirely your responsibility.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">4. No Liability</h2>
                <p>
                  Woza and its owners, affiliates, employees, or partners shall not be held liable for any injury, loss, damages, costs, claims, or disputes that arise from use of the platform.
                </p>
                <p>
                  Woza does not provide insurance of any kind for users, vehicles, or rides. It is your responsibility to ensure that you and your vehicle (if applicable) are properly insured.
                </p>
                <p>
                  You hereby release Woza from any and all liability connected to your use of the platform.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">5. User Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are solely responsible for your own safety, decisions, and actions when using Woza.</li>
                  <li>Drivers are responsible for complying with all legal requirements (valid license, vehicle registration, insurance, roadworthiness).</li>
                  <li>Passengers are responsible for their own conduct and ensuring they feel safe before entering a ride.</li>
                  <li>Any disputes, accidents, or issues between users must be resolved directly between the parties involved.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">6. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless Woza, its affiliates, employees, and partners from any claims, liabilities, damages, or expenses (including legal fees) arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use of the platform.</li>
                  <li>Your actions as a driver or passenger.</li>
                  <li>Any disputes, accidents, or misconduct involving you.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">7. No Guarantee</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Woza does not guarantee the availability, safety, quality, or completion of any ride.</li>
                  <li>Woza makes no promises about the accuracy of user profiles, trip details, or reliability of participants.</li>
                  <li>Use of the platform is entirely at your own risk.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">8. Governing Law</h2>
                <p>
                  These Terms & Conditions are governed by the laws of South Africa. Any disputes shall be handled exclusively in the courts of South Africa.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">9. Acceptance</h2>
                <p>
                  By using Woza, you confirm that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You have read and understood these Terms & Conditions.</li>
                  <li>You accept full responsibility for your safety, property, and decisions.</li>
                  <li>You release Woza from any and all liability arising from your use of the platform.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;

