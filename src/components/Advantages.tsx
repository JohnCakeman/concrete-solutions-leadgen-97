
import React from "react";
import { 
  ShieldCheck, 
  Timer, 
  Truck, 
  Wrench, 
  Headset, 
  Factory
} from "lucide-react";

interface AdvantageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdvantageCard = ({ icon, title, description }: AdvantageProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 animate-fade-in">
      <div className="text-blue-800 mb-4">{icon}</div>
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-concrete-800">{title}</h3>
      <p className="text-concrete-600">{description}</p>
    </div>
  );
};

const Advantages = () => {
  const advantages = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Гарантия 24 месяца",
      description: "Мы уверены в качестве наших заводов и предоставляем расширенную гарантию на всё оборудование"
    },
    {
      icon: <Timer className="w-10 h-10" />,
      title: "Сроки от 30 дней",
      description: "Производство, доставка и монтаж бетонного завода в кратчайшие сроки"
    },
    {
      icon: <Factory className="w-10 h-10" />,
      title: "Собственное производство",
      description: "Контролируем все этапы производства и гарантируем качество каждого узла"
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Оборудование в наличии",
      description: "Поддерживаем складские запасы основных моделей для быстрой отгрузки"
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Бесплатный шефмонтаж",
      description: "Наши инженеры приедут и помогут с установкой и запуском оборудования"
    },
    {
      icon: <Headset className="w-10 h-10" />,
      title: "Техподдержка 24/7",
      description: "Круглосуточная поддержка и сервисное обслуживание после запуска"
    },
  ];

  return (
    <section className="section bg-concrete-50 py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-concrete-800">Почему стоит выбрать нас</h2>
          <p className="text-xl text-concrete-600 max-w-3xl mx-auto">
            Мы не просто продаем бетонные заводы — мы предоставляем комплексное решение для вашего бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard 
              key={index} 
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
              />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
