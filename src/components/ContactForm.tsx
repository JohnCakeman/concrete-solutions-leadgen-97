
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { Phone, Mail, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) {
      toast.error("Пожалуйста, введите номер телефона");
      return;
    }
    
    setLoading(true);
    
    // Имитация отправки данных
    setTimeout(() => {
      toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-concrete-700 to-concrete-900 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Связаться с нами</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Заполните форму ниже, и мы свяжемся с вами в течение 24 часов
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-white bg-opacity-10 backdrop-blur-sm border-0 shadow-lg col-span-1 lg:col-span-2">
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold mb-6">Оставить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Иван Иванов"
                      className="bg-white bg-opacity-20 border-gray-500 text-white placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm">
                      Телефон *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="bg-white bg-opacity-20 border-gray-500 text-white placeholder:text-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-white bg-opacity-20 border-gray-500 text-white placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишите ваши потребности или задайте вопрос"
                    rows={5}
                    className="bg-white bg-opacity-20 border-gray-500 text-white placeholder:text-gray-300"
                  />
                </div>
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="bg-cta hover:bg-cta-hover w-full sm:w-auto"
                    disabled={loading}
                  >
                    {loading ? "Отправка..." : "Отправить заявку"}
                  </Button>
                  <p className="mt-3 text-sm text-gray-300">
                    Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </form>
            </div>
          </Card>
          
          <div className="space-y-6">
            <div className="rounded-lg bg-white bg-opacity-10 p-6">
              <div className="flex items-center mb-4">
                <Phone className="h-5 w-5 mr-3 text-blue-300" />
                <h4 className="text-lg font-medium">Телефон</h4>
              </div>
              <a href="tel:+78001234567" className="text-xl block hover:text-blue-300 transition-colors">
                8 (800) 123-45-67
              </a>
              <p className="mt-1 text-gray-300">Ежедневно 9:00–20:00</p>
            </div>
            
            <div className="rounded-lg bg-white bg-opacity-10 p-6">
              <div className="flex items-center mb-4">
                <Mail className="h-5 w-5 mr-3 text-blue-300" />
                <h4 className="text-lg font-medium">Email</h4>
              </div>
              <a href="mailto:info@concrete-plant.ru" className="text-xl block hover:text-blue-300 transition-colors">
                info@concrete-plant.ru
              </a>
              <p className="mt-1 text-gray-300">Отвечаем в течение 24 часов</p>
            </div>
            
            <div className="rounded-lg bg-white bg-opacity-10 p-6">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-5 w-5 mr-3 text-blue-300" />
                <h4 className="text-lg font-medium">Мессенджеры</h4>
              </div>
              <div className="space-y-2">
                <a href="https://wa.me/78001234567" className="text-lg block hover:text-blue-300 transition-colors">
                  WhatsApp
                </a>
                <a href="https://t.me/concrete_plant" className="text-lg block hover:text-blue-300 transition-colors">
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
