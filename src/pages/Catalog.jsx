import React, { useState } from 'react'
import { Contacte } from './Contacte'

export const Catalog = () => {
  const [user, setuser]= useState([
          {
              id:1,
              img:"/public/alina.png",
              name:"Марина Королёва",
              work:"Разработчик PHP  ",
              tipwork:"Выполено проектов: 65",
              image:"/public/stars.png"
          },
           {
              id:2,
              img:"/public/alina.png",
              name:"Марина Королёва",
              work:"Разработчик PHP  ",
              tipwork:"Выполено проектов: 65",
              image:"/public/stars.png"
          },
           {
              id:3,
              img:"/public/alina.png",
              name:"Марина Королёва",
              work:"Разработчик PHP  ",
              tipwork:"Выполено проектов: 65",
              image:"/public/stars.png"
          },
           {
              id:4,
              img:"/public/alina.png",
              name:"Марина Королёва",
              work:"Разработчик PHP  ",
              tipwork:"Выполено проектов: 65",
              image:"/public/stars.png"
          },
           {
              id:5,
              img:"/public/alina.png",
              name:"Марина Королёва",
              work:"Разработчик PHP  ",
              tipwork:"Выполено проектов: 65",
              image:"/public/stars.png"
          },
      ])
  return (
    <div>
      <div className='flex flex-col gap-20 w-380 items-center'>
        <h1 className='text-5xl'>Ищите и находите подходящую работу среди <br /> <span className='text-green-500'>10,000+</span>  проектов и покажите на что Вы способны!</h1>
        <div className='flex  gap-5'>
   <input type="text" placeholder='Какую работу ищете?' className='w-80 p-5 rounded-4xl' />
   <button type="button" className='bg-orange-400 w-50 p-5  rounded-4xl '>Найти</button></div>
   <div className='flex gap-20'>
    <h1>Тексты и переводы </h1>
    <h1>Разработка</h1>
    <h1>Дизайн</h1>  
    <h1>Аудио, видео монтаж </h1>
    
   </div>
   <div className='flex gap-20 items-center'>
    <h1>SEO и оптимизация</h1>
    <h1>Бизнес и жизнь</h1>
    <h1>Соцсети и реклама</h1>
    <button className='p-5 border-2 border-amber-400 text-amber-400 rounded-4xl'>Все категории</button>
   </div>
   <h1 className='text-3xl'>Ниже все заказы по <span className='text-green-500'> дизайну </span></h1>
      </div>
      <div className='flex justify-between p-10'>
        <h1>65 проектов по дизайну</h1>
        <h1 className='text-gray-400'>Минимальная цена
—
Максимальная цена</h1>
<h1>По возрастанию цены</h1>

      </div>
    
<div className=''>
    {
        user.map((e) => (
            <div key={e.id} className=' w-[1320px] h-[270px] m-7 border-2 shadow-2xl p-10 '>
                <div className='flex justify-between mb-5'>
                  <h1>Нужно сделать Дизайн сайта по тематике авто</h1>
                  <p className='text-green-400'>Бюджет: 50 000 тенге</p>
                </div>
              
                <div className='flex gap-10 items-center'>

                     <img src={e.img} alt="" className='w-40 h-40' />
                  <div>   <h1>{e.name}</h1>
                    <h1>{e.work}</h1>
                    <h1>{e.tipwork}</h1>
                    <div className='flex gap-10'>
                    <img src={e.image} alt="" /> 
                    <h1 className='text-2xl text-gray-500'>15 отзывов</h1></div>
                 </div>
                </div>
               
            </div>
        ))
    } <button className='border-2 border-green-500 p-5 rounded-4xl text-green-600 w-80 ml-150 m-20'>Загрузить еще</button>
      </div>
      <Contacte/>
    </div>
  )
}
