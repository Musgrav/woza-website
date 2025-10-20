import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last updated: 8/10/2025</p>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="space-y-4">
                <p>
                  At Woza, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use the Woza platform ("App" / "Service").
                </p>
                <p>
                  By using Woza, you agree to the practices described below.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
                <p>
                  We may collect the following types of information when you use Woza:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account Information:</strong> Name, email address, phone number, profile photo, age, and any other details you provide when registering.</li>
                  <li><strong>Ride Information:</strong> Trip origins, destinations, dates, times, and communications with other users.</li>
                  <li><strong>Payment Information:</strong> If applicable, billing details, card/payment provider details (processed securely via third-party payment processors).</li>
                  <li><strong>Device Data:</strong> IP address, device type, operating system, app usage, crash logs, and cookies.</li>
                  <li><strong>Location Data:</strong> If you allow location access, we may collect GPS or approximate location to help match drivers and passengers.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
                <p>
                  We use the data we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and improve the Woza service.</li>
                  <li>Match passengers with drivers and facilitate trip arrangements.</li>
                  <li>Process payments (where applicable).</li>
                  <li>Communicate with you about rides, updates, and safety alerts.</li>
                  <li>Enforce Terms & Conditions, detect fraud, and maintain platform security.</li>
                  <li>Comply with legal obligations.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">3. Information Sharing</h2>
                <p>
                  Woza does not sell your personal data to third parties.
                </p>
                <p>
                  We may share your information only in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With other users (e.g., driver and passenger names, contact info, and trip details).</li>
                  <li>With trusted third-party service providers (e.g., payment processors, cloud hosting, analytics).</li>
                  <li>With law enforcement or regulatory authorities if legally required.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">4. Data Security</h2>
                <p>
                  We use reasonable technical and organizational measures to protect your information against unauthorized access, alteration, or disclosure.
                  However, no method of transmission over the internet is 100% secure. You use Woza at your own risk.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">6. Data Retention</h2>
                <p>
                  We keep your information only as long as necessary to provide our service and comply with legal obligations.
                  You may request deletion of your account at any time, subject to our need to retain certain information for legal or security reasons.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">7. Your Rights</h2>
                <p>
                  Depending on your jurisdiction (including POPIA in South Africa and GDPR in the EU), you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal data we hold about you.</li>
                  <li>Request correction or deletion of your data.</li>
                  <li>Restrict or object to certain data processing.</li>
                  <li>Withdraw consent (where applicable).</li>
                  <li>Lodge a complaint with a data protection authority.</li>
                </ul>
                <p>
                  To exercise these rights, contact us at <a href="mailto:help@usewoza.com" className="text-orange-600 hover:text-orange-700 underline">help@usewoza.com</a>.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">8. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted within the App with the updated "Last Updated" date. Continued use of Woza means you accept the updated policy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">9. Contact Us</h2>
                <p>
                  Contact us at <a href="mailto:help@usewoza.com" className="text-orange-600 hover:text-orange-700 underline">help@usewoza.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

