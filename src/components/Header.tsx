import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl">
              ET
            </div>
            <span className="font-semibold text-lg text-foreground">EduTech Innovations</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("platform")}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Platform
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Leadership
            </button>
            <button
              onClick={() => scrollToSection("milestones")}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Milestones
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Contact
            </button>
            <Button variant="accent" size="sm">Join Our Team</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-accent transition-smooth font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("platform")}
                className="text-foreground hover:text-accent transition-smooth font-medium text-left"
              >
                Platform
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-foreground hover:text-accent transition-smooth font-medium text-left"
              >
                Leadership
              </button>
              <button
                onClick={() => scrollToSection("milestones")}
                className="text-foreground hover:text-accent transition-smooth font-medium text-left"
              >
                Milestones
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-accent transition-smooth font-medium text-left"
              >
                Contact
              </button>
              <Button variant="accent" size="sm" className="w-full">Join Our Team</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
