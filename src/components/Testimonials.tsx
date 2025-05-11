
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  position: string;
  content: string;
  image: string;
  projectImage: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Александр Петров",
      company: "СтройИнвест",
      position: "Генеральный директор",
      content: "Сотрудничаем уже более 3 лет. Приобрели два бетонных завода MEKAMIX. Работают без нареканий, отличная производительность и надежность. Особенно ценим оперативность сервисной поддержки и качество монтажа.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
      projectImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716"
    },
    {
      id: 2,
      name: "Елена Сидорова",
      company: "ГК Монолит",
      position: "Руководитель производства",
      content: "Заказывали мобильный завод для удаленного строительного объекта. Установка и запуск прошли точно в срок, без задержек. Завод работает уже 2 года, никаких проблем не возникало. Довольны сотрудничеством.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3",
      projectImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    },
    {
      id: 3,
      name: "Игорь Николаев",
      company: "БетонСтрой",
      position: "Технический директор",
      content: "Приобрели стационарный завод MEKAMIX-60 в прошлом году. Впечатляет автоматизация процессов и высокая точность дозирования. Отдельно хочу отметить квалификацию специалистов, проводивших шефмонтаж.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      projectImage: "https://images.unsplash.com/photo-1460574283810-2aab119d8511"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-concrete-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-concrete-800">Отзывы наших клиентов</h2>
          <p className="text-xl text-concrete-600 max-w-3xl mx-auto">
            Узнайте, что говорят о нас те, кто уже выбрал наши бетонные заводы
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute flex justify-between w-full top-1/2 -translate-y-1/2 z-10 px-4">
            <button 
              onClick={handlePrev} 
              className="bg-white rounded-full p-2 shadow-lg hover:bg-blue-50 transition-colors text-blue-800"
              aria-label="Предыдущий отзыв"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={handleNext} 
              className="bg-white rounded-full p-2 shadow-lg hover:bg-blue-50 transition-colors text-blue-800"
              aria-label="Следующий отзыв"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img 
                        src={testimonial.projectImage} 
                        alt={`Проект ${testimonial.company}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Card className="border-none shadow-lg p-2">
                      <CardContent className="p-6 pt-8 relative">
                        <MessageCircle className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/2 text-blue-800 h-10 w-10" />
                        <p className="text-lg mb-6 italic text-concrete-700">{testimonial.content}</p>
                        <div className="flex items-center">
                          <div className="h-14 w-14 rounded-full overflow-hidden mr-4 flex-shrink-0">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-concrete-900">{testimonial.name}</p>
                            <p className="text-concrete-700">{testimonial.position}, {testimonial.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  idx === activeIndex ? "bg-blue-800" : "bg-concrete-300"
                }`}
                aria-label={`Перейти к отзыву ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
