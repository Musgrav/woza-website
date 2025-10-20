import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import icon from "@/assets/icon.png";

export const Header = () => {
  const navigate = useNavigate();

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
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
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

          {/* Navigation */}
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

          {/* CTA Button */}
          <Button 
            variant="outline" 
            className="border-gray-300 hover:bg-gray-50 text-sm font-medium"
          >
            Get the app 📱
          </Button>
        </div>
      </div>
    </header>
  );
};

