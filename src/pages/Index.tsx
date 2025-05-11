
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Catalog from "@/components/Catalog";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll(".scroll-animate");
      
      scrollElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        // When element comes into view (element top is less than 85% of screen height)
        if (elementPosition < screenHeight * 0.85) {
          element.classList.add("active");
        }
      });
    };
    
    // Initial check for elements in view when page loads
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl md:text-2xl text-concrete-800">Бетонные заводы</div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-concrete-700 hover:text-concrete-900 font-medium">Каталог</a>
              <a href="#" className="text-concrete-700 hover:text-concrete-900 font-medium">О компании</a>
              <a href="#" className="text-concrete-700 hover:text-concrete-900 font-medium">Проекты</a>
              <a href="#contact" className="text-concrete-700 hover:text-concrete-900 font-medium">Контакты</a>
            </nav>
            
            <div className="flex items-center">
              <a href="tel:+78001234567" className="text-blue-800 font-medium hidden md:block mr-4">
                8 (800) 123-45-67
              </a>
              <a 
                href="#contact" 
                className="bg-cta hover:bg-cta-hover text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Advantages />
        <Catalog />
        <Testimonials />
        <Process />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
