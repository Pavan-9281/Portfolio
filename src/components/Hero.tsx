import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = [
    'Cybersecurity & Computer Science Student',
    'UI/UX Designer',
    'Full Stack Developer'
  ];

  useEffect(() => {
    let currentIndex = 0;
    const currentTitle = titles[currentTitleIndex];
    
    const timer = setInterval(() => {
      if (currentIndex <= currentTitle.length) {
        setDisplayedText(currentTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
        // Wait 2 seconds before starting next title
        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentTitleIndex]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left">
            <div>
              <p className="text-base lg:text-lg text-gray-600 mb-2">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tanniru Pavan
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-orange-500 font-semibold mt-4 h-8">
                {displayedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I am a passionate developer skilled in Java, DSA, and full-stack web development. I build efficient, responsive, and user-friendly web applications using modern technologies.
            </p>

            <div className="flex justify-center lg:justify-start">
              <a 
                href="https://drive.google.com/file/d/1WjNAqCXusuJli1v2qlCAzDgxihyG_ji9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 lg:px-8 py-3 rounded-full transition-colors duration-200"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/9576db5f-57f7-4d39-a309-099e226e731e.png" 
                  alt="Tanniru Pavan - Profile Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <button
            onClick={scrollToNextSection}
            className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-orange-50"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="text-orange-500" size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};
