
import React, { useState } from 'react'
import { Contacte } from './Contacte'

export const Main = () => {
    const [Data, setData]= useState([
        {
            id:1,
            img:"/public/Ellipse.png",
            name:"Сделать дизайн интернет-магазина",
            direction:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis..."
            
        },
         {
            id:2,
            img:"/public/Ellipse.png",
            name:"Верстка landing page",
            direction:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis..."
            
        },
         {
            id:3,
            img:"/public/Ellipse.png",
            name:"Сделать дизайн сайта-каталога и посадить на какой нибудь ко...",
            direction:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis..."
            
        },
         {
            id:4,
            img:"/public/Ellipse.png",
            name:"Продвижение instagram ",
            direction:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis..."
            
        },
         {
            id:5,
            img:"/public/Ellipse.png",
            name:"Срочно! Нужен веб дизайнер!",
            direction:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis..."
            
        },


    ])
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
        <div className='flex bg-blue-100 w-380 '>
        <div className='flex flex-col gap-10 p-20 w-250'>
            <h1 className='text-5xl'>Покупайте фриланс-услуги в <span>два клика</span></h1>
            <p className='text-3xl'>Ворк — единица работы продавца, которую можно купить как товар в магазине </p>
            <div  className='flex'>
            <input type="text" placeholder='Что нужно сделать?' className='rounded-3xl p-3  w-100 bg-white' />
             <button className='bg-amber-500 text-white rounded-3xl p-3 w-100' >Найти</button></div>
            <h1 className='text-2xl m-auto'>Выберите рубрику, чтобы начать</h1>
            <div className='flex justify-around'>
                <h1>
                    Тексты и переводы 
                </h1>
                <h1>Разработка
                </h1>
                <h1>Дизайн</h1>

            </div>
            <div className='flex justify-around'>
                <h1>Аудио, видео монтаж </h1>
                <h1>SEO и оптимизация</h1>

            </div>
            <div className='flex justify-around'>
                <p>Бизнес и жизнь</p>
                <p>Соцсети и реклама</p>
                <button className='text-amber-300 bg-white p-5 rounded-4xl'>Все категории</button>
            </div>
   

        </div>
             <img src="/public/Group(1).png" alt="" className='w-100' /></div>
           <h1 className='w-280 ml-100 text-5xl p-10'>Актуальные ворки</h1>
             <div  className='grid grid-cols-3  '>
               
                {Data.map((elem)=>{
                    return(
                      <div className="w-120 min-h-100  shadow-2xl p-3 grid grid-cols-2 gap-3 m-5 rounded-4xl">
     <img
    src={elem.img}
    alt={elem.name}
    className="w-20 h-20 object-cover rounded-lg"
  />

  <span className="font-bold text-lg">
    {elem.name}
  </span>

  <p className="col-span-2 break-words">
    {elem.direction}
  </p>

  <button className="col-span-2   hover:bg-green-400 hover:text-white text-green-400  border-3 border-green-400 rounded-lg p-2">
  Посмотреть
  </button>
</div>
                    )
                })}
             </div>
             <h1>Топ фрилансеров</h1>
<div className='grid grid-cols-3 '>
    {
        user.map((e) => (
            <div key={e.id} className=' w-120 m-7 border-2 shadow-2xl p-10 '>
                
              
                <div className='flex gap-20'>
                     <img src={e.img} alt="" className='w-40 h-40' />
                  <div>   <h1>{e.name}</h1>
                    <h1>{e.work}</h1>
                    <h1>{e.tipwork}</h1>
                    <img src={e.image} alt="" /></div>
                 
                </div> <button className="col-span-2 w-100 m-auto mt-10  hover:bg-green-400 hover:text-white text-green-400  border-3 border-green-400 rounded-lg p-2">
  
  Написать
  </button>
            </div>
        ))
    }
</div>

<div>
    <h1 className='text-4xl m-5' >Как решать задачи на WorkTap?</h1><br />
    <h1 className='text-2xl'>Идеально подходит для бизнеса и частных лиц</h1> <br />
    <div className='flex gap-20 m-10'>
    <div >
               <img src="/public/Group (14).png" alt="" className='w-50' />
               <h1>Выберите услугу</h1>
               <p>В супермаркете WorkTap представлен широкий <br /> выбор услуг от квалифицированных специалистов.</p>
    </div>
        <div>
               <img src="/public/Group (14).png" alt="" className='w-50' />
               <h1>Выберите услугу</h1>
               <p>В супермаркете WorkTap представлен широкий <br /> выбор услуг от квалифицированных специалистов.</p>
    </div>
        <div>
               <img src="/public/Group (14).png" alt="" className='w-50' />
               <h1>Выберите услугу</h1>
               <p>В супермаркете WorkTap представлен широкий <br /> выбор услуг от квалифицированных специалистов.</p>
    </div>
    </div>
</div>
<div className='flex gap-40 w-379 m-auto items-center bg-[rgba(230,169,1,1)] p-10'>
  <div className='flex flex-col gap-20'>
<h1 className='text-5xl'>    Как WorkTap помогает бизнесу?</h1>
    <input type="text" className='bg-white p-5  rounded-4xl' placeholder=' 💳 Оплачивайте с р/с или карты компании' />
    <input type="text"  className='bg-white p-5  rounded-4xl' placeholder=' 💵 Экономьте до 87% бюджета на фрилансе' />
    <input type="text"  className='bg-white p-5  rounded-4xl' placeholder=' 🕑 Экономьте до 75% времени на решении фриланс задач' />
    <h1>WorkTap — быстро, просто и безопасно!</h1>
    <button className='bg-blue-700 p-5 rounded-4xl'>Начать!</button>
  </div>
  <img src="/public/workspace.png" alt="" className='w-180 h-180 ' />
</div>
<Contacte/>
    </div>
  )
}
