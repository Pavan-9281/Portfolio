import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navItems = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl text-gray-900 font-bold">Tanniru <span className="text-orange-500">Pavan</span></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            const isContact = item.name === 'Contact';
            return <button key={item.name} onClick={() => handleNavClick(item.href)} className={`font-medium transition-all duration-300 relative ${isContact ? 'bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 hover:scale-105' : isActive ? 'text-orange-500 scale-110' : 'text-gray-700 hover:text-orange-500'}`}>
                  {item.name}
                  {isActive && !isContact && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 animate-pulse"></span>}
                </button>;
          })}
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-500">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            const isContact = item.name === 'Contact';
            return <button key={item.name} onClick={() => handleNavClick(item.href)} className={`font-medium transition-all duration-300 text-left ${isContact ? 'bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 w-fit' : isActive ? 'text-orange-500 pl-4 border-l-2 border-orange-500' : 'text-gray-700 hover:text-orange-500'}`}>
                    {item.name}
                  </button>;
          })}
            </nav>
          </div>}
      </div>
    </header>;
};