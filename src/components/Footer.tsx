import React from "react";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ваш проект</h3>
            <p className="text-gray-300 mb-4">
              Создаем современные веб-приложения с использованием лучших практик
              разработки
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Github"
                size={24}
                className="text-gray-400 hover:text-white cursor-pointer"
              />
              <Icon
                name="Twitter"
                size={24}
                className="text-gray-400 hover:text-white cursor-pointer"
              />
              <Icon
                name="Linkedin"
                size={24}
                className="text-gray-400 hover:text-white cursor-pointer"
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Цены
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Документация
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Поддержка
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ваш проект. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
