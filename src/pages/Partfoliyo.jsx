import React, { useState } from 'react'

const Portfolio = () => {
  // 1. Joriy til holati (default: Tojik tili)
  const [lang, setLang] = useState('tj')

  // 2. Tarjimalar lug'ati (i18n dictionary)
  const translations = {
    tj: {
      badge: 'Омода барои лоиҳаҳои нав',
      greeting: 'Салом, ман',
      role: 'Frontend Developer. Ман веб-сайтҳо ва барномаҳои муосир, бароҳат ва тезкоро эҷод мекунам.',
      btnProjects: 'Дидани лоиҳаҳо',
      btnContact: 'Дар тамос шудан',
      skillsTitle: 'Технология ва Афзорҳо',
      projectsTitle: 'Лоиҳаҳои Охирин',
      contactTitle: 'Биёед якҷоя кор кунем!',
      contactSub: 'Барои лоиҳаҳои нав, саволҳо ё ҳамкорӣ метавонед тавассути шабакаҳои зерин пайваст шавед:',
      rights: 'Ҳамаи ҳуқуқҳо ҳифз шудаанд.',
      proj1Title: 'E-Commerce Платформа',
      proj1Desc: 'Онлайн-мағоза бо сабад, пардохти онлайн ва панели админ.',
      proj2Title: 'Веб-барнома',
      proj2Desc: 'Системаи идоракунии супоришҳо бо интерфейси муосир.',
    },
    en: {
      badge: 'Available for new projects',
      greeting: "Hello, I'm",
      role: "Frontend Developer. I build modern, fast, and user-friendly websites and web applications.",
      btnProjects: 'View Projects',
      btnContact: 'Get in Touch',
      skillsTitle: 'Technologies & Tools',
      projectsTitle: 'Recent Projects',
      contactTitle: "Let's Work Together!",
      contactSub: 'For new projects, questions, or collaboration, feel free to reach out via social media:',
      rights: 'All rights reserved.',
      proj1Title: 'E-Commerce Platform',
      proj1Desc: 'Online store with shopping cart, online payment, and admin panel.',
      proj2Title: 'Web Application',
      proj2Desc: 'Task management system with a modern user interface.',
    },
    ru: {
      badge: 'Открыт для новых проектов',
      greeting: 'Привет, я',
      role: 'Frontend Developer. Я создаю современные, удобные и быстрые веб-сайты и приложения.',
      btnProjects: 'Смотреть проекты',
      btnContact: 'Связаться со мной',
      skillsTitle: 'Технологии и Инструменты',
      projectsTitle: 'Последние Проекты',
      contactTitle: 'Давайте работать вместе!',
      contactSub: 'Для новых проектов, вопросов или сотрудничества свяжитесь со мной через соцсети:',
      rights: 'Все права защищены.',
      proj1Title: 'E-Commerce Платформа',
      proj1Desc: 'Онлайн-магазин с корзиной, онлайн-оплатой и админ-панелью.',
      proj2Title: 'Веб-приложение',
      proj2Desc: 'Система управления задачами с современным интерфейсом.',
    },
  }

  // Joriy til matnlari
  const t = translations[lang]

  const skills = [
    {
      name: 'JavaScript',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#F7DF1E">
          <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.544-.225-1.258-.45-1.583-.627-.375-.203-.493-.383-.493-.653 0-.398.312-.668.859-.668.58 0 .977.203 1.258.627l1.523-.984c-.45-.691-1.191-1.121-2.529-1.121-1.748 0-2.889.977-2.889 2.457 0 1.258.742 1.881 2.129 2.438.742.293 1.348.514 1.582.697.352.246.471.473.471.812 0 .543-.461.883-1.238.883-.883 0-1.414-.402-1.777-1.047l-1.574 1.023c.531 1.031 1.574 1.574 3.109 1.574 2.008 0 3.125-.945 3.125-2.613 0-.156-.023-.426-.082-.652zM11.63 12.1v6.867h1.969V12.1H11.63z" />
        </svg>
      ),
    },
    {
      name: 'React.js',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#61DAFB">
          <path d="M12 9a3 3 0 100 6 3 3 0 000-6zm0-7c-5.52 0-10 2.24-10 5s4.48 5 10 5 10-2.24 10-5-4.48-5-10-5zm0 8c-4.42 0-8-1.79-8-4s3.58-4 8-4 8 1.79 8 4-3.58 4-8 4zm-7.07 9.07c-2.76 4.78-1.12 7.62 1.64 6.3 2.76-1.32 7.24-5.8 10-10.58 2.76-4.78 1.12-7.62-1.64-6.3-2.76 1.32-7.24 5.8-10 10.58zm12.31-1.05c2.76 4.78 6.09 4.19 7.44 1.32 1.35-2.87-.29-7.35-3.05-12.13-2.76-4.78-6.09-4.19-7.44-1.32-1.35 2.87.29 7.35 3.05 12.13z" />
        </svg>
      ),
    },
    {
      name: 'HTML5 & CSS3',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#E34F26">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm17.09 4.513H5.41l.362 4.075h11.83l-.401 4.512-5.231 1.458-5.232-1.458-.335-3.755H2.332l.623 7.001 9.015 2.508 9.016-2.508 1.228-13.833z" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#06B6D4">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      ),
    },
    {
      name: 'C++',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#00599C">
          <path d="M22.38 12.35l-9.84 5.68a1.05 1.05 0 0 1-1.05 0l-9.85-5.68a1.05 1.05 0 0 1 0-1.82l9.85-5.68a1.05 1.05 0 0 1 1.05 0l9.84 5.68a1.05 1.05 0 0 1 0 1.82zM12 2L1 8.35v7.3L12 22l11-6.35v-7.3L12 2z" />
        </svg>
      ),
    },
    {
      name: 'Git & GitHub',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#F05032">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
  ]

  const projects = [
    {
      title: t.proj1Title,
      desc: t.proj1Desc,
      tech: ['React', 'CSS3', 'Node.js'],
    },
    {
      title: t.proj2Title,
      desc: t.proj2Desc,
      tech: ['React', 'JavaScript', 'Flexbox'],
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skills.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skills.length) % skills.length)
  }

  return (
    <div
      style={{
        backgroundColor: '#0a0d14',
        color: '#f0f6fc',
        fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        minHeight: '100vh',
        margin: 0,
        padding: '20px 20px 40px 20px',
      }}
    >
      <main
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
        }}
      >
        {/* Tilni Tanlash Tugmalari (Language Switcher) */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          {['tj', 'en', 'ru'].map((item) => (
            <button
              key={item}
              onClick={() => setLang(item)}
              style={{
                backgroundColor: lang === item ? '#6366f1' : '#111827',
                color: lang === item ? '#ffffff' : '#9ca3af',
                border: '1px solid #1f2937',
                padding: '6px 14px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '13px',
                textTransform: 'uppercase',
                transition: 'all 0.2s',
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* 1. Hero Section */}
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '40px',
          }}
        >
          <div style={{ flex: '1 1 450px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: '#818cf8',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                }}
              ></span>
              {t.badge}
            </div>

            <h1
              style={{
                fontSize: '46px',
                fontWeight: '800',
                lineHeight: '1.2',
                margin: '0 0 16px 0',
              }}
            >
              {t.greeting} <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Ormon Jamshedzoda
              </span>
            </h1>

            <p
              style={{
                fontSize: '17px',
                color: '#9ca3af',
                lineHeight: '1.6',
                marginBottom: '28px',
              }}
            >
              {t.role}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="#projects"
                style={{
                  background: 'linear-gradient(90deg, #6366f1, #4f46e5)',
                  color: '#ffffff',
                  padding: '12px 28px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                  boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
                }}
              >
                {t.btnProjects}
              </a>
              <a
                href="#contact"
                style={{
                  backgroundColor: '#1f2937',
                  color: '#e5e7eb',
                  border: '1px solid #374151',
                  padding: '12px 28px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                }}
              >
                {t.btnContact}
              </a>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                right: '-10px',
                bottom: '-10px',
                background: 'linear-gradient(45deg, #6366f1, #ec4899)',
                borderRadius: '24px',
                filter: 'blur(20px)',
                opacity: 0.4,
              }}
            ></div>
            <img
              src="/ormon.png"
              alt="Ormon Jamshedzoda"
              style={{
                position: 'relative',
                width: '260px',
                height: '260px',
                borderRadius: '20px',
                objectFit: 'cover',
                border: '2px solid #374151',
              }}
            />
          </div>
        </section>

        {/* 2. Swiper Section */}
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <h2
            style={{
              fontSize: '24px',
              fontWeight: '700',
              borderLeft: '4px solid #6366f1',
              paddingLeft: '12px',
              margin: 0,
            }}
          >
            {t.skillsTitle}
          </h2>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              padding: '20px',
              backgroundColor: '#111827',
              borderRadius: '16px',
              border: '1px solid #1f2937',
            }}
          >
            <button
              onClick={prevSlide}
              style={{
                backgroundColor: '#1f2937',
                color: '#fff',
                border: '1px solid #374151',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              &#10094;
            </button>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                minWidth: '200px',
              }}
            >
              <div
                style={{
                  padding: '16px',
                  backgroundColor: '#1f2937',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {skills[currentSlide].icon}
              </div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  margin: 0,
                  color: '#f3f4f6',
                }}
              >
                {skills[currentSlide].name}
              </h3>
              <span
                style={{
                  fontSize: '12px',
                  color: '#6b7280',
                }}
              >
                {currentSlide + 1} / {skills.length}
              </span>
            </div>

            <button
              onClick={nextSlide}
              style={{
                backgroundColor: '#1f2937',
                color: '#fff',
                border: '1px solid #374151',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              &#10095;
            </button>
          </div>
        </section>

        {/* 3. Projects Section */}
        <section
          id="projects"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <h2
            style={{
              fontSize: '24px',
              fontWeight: '700',
              borderLeft: '4px solid #6366f1',
              paddingLeft: '12px',
              margin: 0,
            }}
          >
            {t.projectsTitle}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {projects.map((proj, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#111827',
                  border: '1px solid #1f2937',
                  padding: '24px',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '16px',
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: '0 0 8px 0',
                      fontSize: '18px',
                      color: '#f3f4f6',
                    }}
                  >
                    {proj.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '14px',
                      color: '#9ca3af',
                      lineHeight: '1.5',
                    }}
                  >
                    {proj.desc}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                  }}
                >
                  {proj.tech.map((techItem, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: '#1f2937',
                        color: '#818cf8',
                        fontSize: '12px',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                      }}
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Contact Section */}
        <section
          id="contact"
          style={{
            backgroundColor: '#111827',
            border: '1px solid #1f2937',
            borderRadius: '20px',
            padding: '36px 20px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '26px',
              margin: '0 0 10px 0',
            }}
          >
            {t.contactTitle}
          </h2>
          <p
            style={{
              color: '#9ca3af',
              marginBottom: '24px',
              fontSize: '14px',
            }}
          >
            {t.contactSub}
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            {/* Telegram */}
            <a
              href="https://t.me/Ormonjon_official"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '15px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                backgroundColor: '#0088cc',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.119.098.152.228.166.331.016.112.033.359.018.558z" />
              </svg>
              Telegram
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/Ormonjon_official"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '15px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                background:
                  'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>

            <a
              href="https://wa.me/992000000000"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '15px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                backgroundColor: '#25D366',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99 0-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.285-.143-1.689-.834-1.95-.929-.261-.095-.452-.143-.643.143-.191.286-.738.929-.905 1.119-.167.19-.333.214-.618.071-.285-.143-1.205-.444-2.296-1.417-.849-.758-1.421-1.694-1.587-1.98-.167-.286-.018-.44.125-.582.129-.128.285-.333.428-.5.143-.167.19-.286.285-.476.095-.19.048-.357-.024-.5-.071-.143-.643-1.548-.881-2.119-.232-.556-.468-.48-.643-.489-.167-.008-.357-.01-.548-.01s-.5.071-.762.357c-.261.286-1 1.001-1 2.441 0 1.441 1.048 2.834 1.191 3.025.143.19 2.063 3.149 4.996 4.417.698.301 1.243.482 1.668.617.701.223 1.338.191 1.843.116.563-.084 1.689-.691 1.928-1.358.238-.667.238-1.239.167-1.358-.071-.119-.262-.19-.547-.333z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Portfolio