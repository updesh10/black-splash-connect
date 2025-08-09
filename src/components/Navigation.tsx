import { Button } from "@/components/ui/button";
import { Video, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of fixed navigation
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
              <Video className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold">VideoConnect</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="hover:bg-video-glass/50">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start hover:bg-video-glass/50">
                  Sign In
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;