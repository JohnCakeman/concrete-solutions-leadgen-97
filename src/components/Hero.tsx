
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const Hero = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      toast.error("Пожалуйста, введите корректный номер телефона");
      return;
    }
    
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    console.log("Form submitted:", { name, phone });
    setName("");
    setPhone("");
  };

  return (
    <div className="relative bg-gradient-to-b from-concrete-700 to-concrete-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742')] bg-cover bg-center opacity-20"></div>
      <div className="relative container mx-auto pt-10 pb-20 px-4 sm:pt-16 sm:pb-28 md:pt-24 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-xl mb-4 animate-fade-in">
            Бетонный завод под ключ <span className="text-blue-300">за 30 дней</span> с гарантией
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Мини, мобильные и стационарные бетонные заводы с бесплатным шефмонтажом и техподдержкой
          </p>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Получите расчет стоимости и каталог заводов</h3>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Ваше имя"
                className="flex h-12 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-concrete-900"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Ваш телефон *"
                className="flex h-12 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-concrete-900"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button type="submit" className="btn-primary md:whitespace-nowrap flex items-center justify-center gap-2">
                <span>Получить расчет</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="text-sm mt-3 text-gray-200">
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-12 text-center">
            <div className="bg-white bg-opacity-10 p-3 md:p-4 rounded-lg animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <p className="font-bold text-2xl md:text-3xl">7+</p>
              <p className="text-sm md:text-base text-gray-200">лет на рынке</p>
            </div>
            <div className="bg-white bg-opacity-10 p-3 md:p-4 rounded-lg animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <p className="font-bold text-2xl md:text-3xl">150+</p>
              <p className="text-sm md:text-base text-gray-200">реализованных проектов</p>
            </div>
            <div className="bg-white bg-opacity-10 p-3 md:p-4 rounded-lg animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <p className="font-bold text-2xl md:text-3xl">30</p>
              <p className="text-sm md:text-base text-gray-200">дней до запуска</p>
            </div>
            <div className="bg-white bg-opacity-10 p-3 md:p-4 rounded-lg animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <p className="font-bold text-2xl md:text-3xl">24/7</p>
              <p className="text-sm md:text-base text-gray-200">сервисная поддержка</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
