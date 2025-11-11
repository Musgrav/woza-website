import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import icon from "@/assets/icon.png";

export const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
              <img 
                src={icon} 
                alt="Woza" 
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Woza
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                How it Works
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </button>
            </nav>

            {/* CTA Button - Desktop */}
            <Button 
              variant="outline" 
              className="hidden md:flex border-gray-300 hover:bg-gray-50 text-sm font-medium"
              onClick={() => window.open('https://apps.apple.com/za/app/woza-rides/id6745831021', '_blank')}
            >
              Get the app 📱
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left py-3 text-base text-gray-700 hover:text-orange-600 transition-colors border-b border-gray-100"
              >
                How it Works
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-left py-3 text-base text-gray-700 hover:text-orange-600 transition-colors border-b border-gray-100"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left py-3 text-base text-gray-700 hover:text-orange-600 transition-colors border-b border-gray-100"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left py-3 text-base text-gray-700 hover:text-orange-600 transition-colors border-b border-gray-100"
              >
                About
              </button>
              <Button 
                variant="outline" 
                className="mt-2 border-gray-300 hover:bg-gray-50 text-base font-medium w-full py-6"
                onClick={() => window.open('https://apps.apple.com/za/app/woza-rides/id6745831021', '_blank')}
              >
                Get the app 📱
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

