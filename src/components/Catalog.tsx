
import { useState } from "react";
import CatalogItem, { PlantProps } from "./CatalogItem";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const Catalog = () => {
  const [open, setOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState<{id: number, name: string} | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

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
    
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    console.log("Quote requested for plant:", selectedPlant, "with data:", formData);
    setOpen(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  };
  
  const handleRequestQuote = (plantId: number, plantName: string) => {
    setSelectedPlant({ id: plantId, name: plantName });
    setOpen(true);
  };

  const catalogItems: Omit<PlantProps, "onRequestQuote">[] = [
    {
      id: 1,
      name: "MEKAMIX-30 Мобильный",
      type: "Мобильный",
      productivity: "30 м³/час",
      price: "2 950 000",
      image: "/lovable-uploads/5c8387e3-c900-46cf-b190-b3639b863875.png",
      features: [
        "Мобильность и компактность",
        "Быстрый монтаж/демонтаж",
        "Загрузка с любой стороны",
        "Полный комплект документации"
      ]
    },
    {
      id: 2,
      name: "MEKAMIX-60 Стационарный",
      type: "Стационарный",
      productivity: "60 м³/час",
      price: "4 580 000",
      image: "/lovable-uploads/dd2c2d2c-5660-4c91-ba72-9e7acbf2659f.png",
      features: [
        "Высокая производительность",
        "Автоматизированная система управления",
        "Зимний пакет утепления",
        "Система рециклинга бетона"
      ]
    },
    {
      id: 3,
      name: "MEKAMIX-15 Мини",
      type: "Мини",
      productivity: "15 м³/час",
      price: "1 890 000",
      image: "/lovable-uploads/0983df5a-dde8-4624-bb71-c04a4730caae.png",
      features: [
        "Экономичный вариант",
        "Минимальная площадь размещения",
        "Низкое энергопотребление",
        "Возможность расширения"
      ]
    },
  ];

  return (
    <section id="catalog" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-concrete-800">Каталог бетонных заводов</h2>
          <p className="text-xl text-concrete-600 max-w-3xl mx-auto">
            Выберите оптимальный бетонный завод под ваши задачи. Мы предлагаем решения для любого масштаба производства.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogItems.map((item) => (
            <CatalogItem
              key={item.id}
              {...item}
              onRequestQuote={handleRequestQuote}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4 text-lg text-concrete-700">Не нашли подходящий вариант?</p>
          <Button 
            className="btn-primary"
            onClick={() => handleRequestQuote(0, "Индивидуальный вариант")}
          >
            Запросить индивидуальное предложение
          </Button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Запрос коммерческого предложения</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-3">
            {selectedPlant && (
              <div className="p-3 bg-blue-50 rounded-md text-blue-800 text-sm">
                Завод: <span className="font-medium">{selectedPlant.name}</span>
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Ваше имя</label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Иван Иванов"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">Телефон *</label>
              <Input 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Комментарий</label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Укажите дополнительные требования или вопросы"
                rows={3}
              />
            </div>
            <DialogFooter className="mt-6">
              <Button type="submit" className="bg-cta hover:bg-cta-hover w-full sm:w-auto">
                Отправить запрос
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Catalog;
