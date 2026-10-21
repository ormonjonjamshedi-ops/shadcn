import React from 'react'

export default function Home() {
  return (
    <div>  <div
        style={{ backgroundImage: `url(${subtractImg})` }}
        className='text-white rounded-2xl'>
        <div
          style={{ backgroundImage: `url(${subtractImg_2})` }}
          className='rounded-2xl py-3 flex items-center justify-between px-10 text-start'>
          <div>
            <p className='font-bold'>Бренд MEDO - российское производство <br /> транспортных лент, прутковых <br /> транспортеров для сельхозтехники <br /> по уробке урожая овощных культур</p>
            <br />
            <button className='text-[#36895F] py-1 px-3 bg-white rounded-2xl'> ОСТАВИТЬ ЗАЯВКУ</button>
          </div>
          <div>
            <img src={img_1} alt="" className='object-cover w-90' />
          </div>
        </div>
      </div>
      <br /> <br />  <br />
      <section>
        <p className='leading-14 text-4xl font-bold'>Каталог товаров</p>
        <p>Небольшое описание блока <br />размеров в две строки</p>
        <br /> <br />
        <div className='flex items-center gap-3'>
          {
            cardsData.map((el) => {
              return <Card_1 title={el.title} imageSrc={el.imageSrc} bgColor={el.bgColor} textColor={el.textColor} />
            })
          }
        </div>
      </section>
      <br /> <br />
      <section>
        <h1>О компании</h1>
        <br />
        <p className='text-[15px] text-start'>ООО «КД-ГРУПП» — это команда единомышленников и профессионалов в таких направлениях, как сельскохозяйственная и специальная <br /> техника. Основной состав компании сформирован из инженеров-производственников, которые не по наслышке знают все трудности  и <br /> проблемы, с которыми Вам приходится сталкиваться в процессе работы с техникой. Мы всегда готовы прийти Вам на помощь.</p>
        <br />
        <p className='text-[15px] text-start'>А также, наша компания предлагает к поставке прутковые транспортеры и комплектующие собственного производства под брендом MEDO. <br /> В кратчайшие сроки выполним заказ на изготовление транспортера для сельхозтехники по уборке урожая овощных культур. <br /> Дополнительно, мы оказывает услуги по восстановлению ваших б/у транспортёров с заменой всех ремней, пластинок, заклёпок и замков.</p>
        <br />
        <div className='flex items-center justify-center gap-10'>
          <div>
            <p className='text-6xl font-bold text-[#36895F]'>500</p>
            <p className='text-xl font-[500] text-black'>товаров</p>
          </div>
          <div>
            <p className='text-6xl font-bold text-[#36895F]'>300+</p>
            <p className='text-xl font-[500] text-black'>клиентов</p>
          </div>
          <div>
            <p className='font-bold text-6xl text-[#36895F]'>15</p>
            <p className='font-[500] text-xl text-black'>специалистов</p>
          </div>
        </div>
        <br /> <br />
        <div className='mx-[-46px] flex items-center justify-center gap-6'>
          <div>
            <img src={img_4} alt="" />
          </div>
           <div>
            <img src={img_5} alt="" className='w-220' />
          </div>
           <div>
            <img src={img_6} alt="" />
          </div>
        </div>
      </section>
      <br /> <br /> <br />
      <Footer/></div>
  )
}
