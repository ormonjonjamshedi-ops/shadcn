import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
export function Contacte() {
  return (
    <div>
        <footer className="bg-[#F2F0FE] text-[#333333] pt-12 pb-8 px-6 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 pb-16">
        
        {/* Столбец 1: Топ категории */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl text-black mb-1">Топ категории</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-[#666666]">
            <h1 className="hover:text-black transition-colors">Тексты и переводы</h1>
            <h1 className="hover:text-black transition-colors">Разработка</h1>
            <h1 className="hover:text-black transition-colors">Дизайн</h1>
            <h1 className="hover:text-black transition-colors">Аудио, видео монтаж</h1>
            <h1 className="hover:text-black transition-colors">Соцсети и реклама</h1>
            <h1 className="hover:text-black transition-colors">Бизнес и жизнь</h1>
            <h1 className="hover:text-black transition-colors">SEO и оптимизация</h1>
          </ul>
        </div>

        {/* Столбец 2: О Проекте */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl text-black mb-1">О Проекте</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-[#666666]">
            <h1 className="hover:text-black transition-colors">О Нас</h1>
            <h1 className="hover:text-black transition-colors">Как Это Работает</h1>
            <h1 className="hover:text-black transition-colors">Политика Приватности</h1>
            <h1 className="hover:text-black transition-colors">Правила Пользования</h1>
            <h1 className="hover:text-black transition-colors">Пресса о нас</h1>
          </ul>
        </div>

        {/* Столбец 3: Поддержка */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl text-black mb-1">Поддержка</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-[#666666]">
            <h1 className="hover:text-black transition-colors">Контакты</h1>
            <h1 className="hover:text-black transition-colors">Политика Безопасности</h1>
            <h1 className="hover:text-black transition-colors">FAQ</h1>
          </ul>
        </div>

        {/* Столбец 4: Follow (Социальные сети) */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl text-black mb-1">Follow</h3>
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-[#1C1C1E] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <FaFacebookF size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-[#1C1C1E] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <FaTwitter size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-[#1C1C1E] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <FaInstagram size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-[#1C1C1E] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Копирайт */}
      <div className="text-center text-sm font-medium text-[#222222]">
        Copyright @ 2021 | WorkTap – Worktap.KZ. All Rights Reserved
      </div>
    </footer>

    </div>
  )
}
