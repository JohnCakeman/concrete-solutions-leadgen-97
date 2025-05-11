
import { CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Обсуждение требований",
      description: "Обсуждаем ваши потребности и выбираем оптимальный тип бетонного завода",
    },
    {
      number: "02",
      title: "Коммерческое предложение",
      description: "Готовим детальное КП с учетом всех ваших требований и особенностей проекта",
    },
    {
      number: "03",
      title: "Согласование и контракт",
      description: "Согласовываем детали, подписываем контракт и принимаем предоплату",
    },
    {
      number: "04",
      title: "Производство и доставка",
      description: "Производим оборудование и доставляем его на ваш объект в указанные сроки",
    },
    {
      number: "05",
      title: "Монтаж и запуск",
      description: "Наши специалисты проводят шефмонтаж, наладку и запуск завода",
    },
    {
      number: "06",
      title: "Сервисная поддержка",
      description: "Обеспечиваем гарантийное и постгарантийное обслуживание вашего завода",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-concrete-800">Как мы работаем</h2>
          <p className="text-xl text-concrete-600 max-w-3xl mx-auto">
            Прозрачный и понятный процесс от первого обращения до запуска вашего бетонного завода
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-blue-200 mb-3">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2 text-concrete-800">{step.title}</h3>
              <p className="text-concrete-600">{step.description}</p>
              <CheckCircle className="absolute top-6 right-6 text-blue-500 h-6 w-6 opacity-70" />
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 p-8 rounded-xl border border-blue-100 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3 text-concrete-900">Готовы запустить свой бетонный завод?</h3>
            <p className="text-concrete-700 text-lg">Свяжитесь с нами сегодня, и мы подберем для вас оптимальное решение</p>
          </div>
          <a href="#contact" className="btn-primary whitespace-nowrap">
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
