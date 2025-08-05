import { useState, useEffect } from "react";

const navItems = [
  { id: "about", label: "О съезде" },
  { id: "speakers", label: "Спикеры" },
  { id: "program", label: "Программа" },
  { id: "materials", label: "Материалы" },
  { id: "location", label: "Локация" },
  { id: "rules", label: "Правила" },
  { id: "contacts", label: "Контакты" }
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-primary/20 shadow-sm">
      {/* Orthodox decorative border */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <span className="text-primary text-lg"><img src="logo/logoconf-2.svg" alt="logo" class="max-w-full h-auto" /></span>
            </div>
            <div>
              <h1 className="text-lg font-medium text-primary">
                X СЪЕЗД ПРАВОСЛАВНОЙ МОЛОДЕЖИ КАЗАХСТАНА
              </h1>
              <p className="text-xs text-muted-foreground">
                много сердец - одна вера
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.id} className="flex items-center">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm transition-all duration-300 rounded-md relative group ${
                    activeSection === item.id
                      ? "text-primary font-medium bg-primary/5"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                  )}
                </button>
                {index < navItems.length - 1 && (
                  <div className="text-primary/30 px-2">•</div>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-primary p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-primary/20 py-4 bg-background/95">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm transition-all duration-300 rounded-md ${
                    activeSection === item.id
                      ? "text-primary font-medium bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-primary/50">✛</span>
                    <span>{item.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Bottom decorative border */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </nav>
  );
}