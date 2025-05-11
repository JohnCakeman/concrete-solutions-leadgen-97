
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-concrete-900 text-gray-300 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <div className="font-bold text-2xl text-white mb-4">Бетонные заводы</div>
            <p className="mb-6">
              Производство, продажа и поставка бетонных заводов под ключ с 2015 года. Гарантия качества, сервисное обслуживание и техническая поддержка.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <span className="sr-only">ВКонтакте</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.785 16.241h.766c.305 0 .467-.145.467-.481 0-.283-.141-.462-.419-.462-.251 0-.361.156-.361.312v.631zm-1.251-.78h-.537V14.03h.537v1.43zm-1.311 1.78h-2.84V14.03h1.133v1.73l.49-1.73h1.183l-.51 1.391.334.874c.333-.801.49-1.358.49-1.673 0-.44-.159-.592-.492-.592h-1.13c-.15-.9.21-1.65 1.172-2.302-.959-.257-1.974-.468-1.974-1.866 0-1.285 1.029-2.051 2.398-2.051h1.452c.798 0 1.064.446 1.064.908 0 .572-.327.908-.695.908h-1.812c-.416 0-.859.176-.859.681 0 .928 2.201.371 2.201 1.866 0 1.129-.826 1.758-1.683 1.758v.002z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <span className="sr-only">Telegram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Продукция</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Мобильные заводы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Стационарные заводы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Мини-заводы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Зимние комплекты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Запчасти</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Проекты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Подпишитесь на рассылку</h3>
            <p className="mb-3">Получайте наши новости и специальные предложения</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Ваш Email"
                className="flex-grow px-4 py-2 text-concrete-900 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-cta hover:bg-cta-hover text-white p-2 rounded-r-md"
                aria-label="Подписаться"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2023 Бетонные заводы. Все права защищены.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
