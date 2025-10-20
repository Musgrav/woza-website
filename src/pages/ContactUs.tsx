import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Mail className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              We'd love to hear from you
            </p>
          </div>

          {/* Contact Information */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions, feedback, or need support? Send us an email and we'll get back to you as soon as possible.
              </p>
              
              <div className="inline-flex items-center gap-3 px-8 py-6 bg-orange-50 rounded-lg">
                <Mail className="h-6 w-6 text-orange-600 flex-shrink-0" />
                <a 
                  href="mailto:help@woza.co.za" 
                  className="text-2xl font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  help@woza.co.za
                </a>
              </div>

              <p className="text-sm text-gray-500 mt-8">
                We typically respond within 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;

