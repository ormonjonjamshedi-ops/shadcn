
import React, { useState } from 'react';
import { Contacte } from './Contacte'

const positiveReviewsData = Array.from({ length: 65 }, (_, index) => ({
  id: `pos-${index + 1}`,
  name: "Никита Евреев",
  rating: 4, 
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla."
}));

const negativeReviewsData = Array.from({ length: 10 }, (_, index) => ({
  id: `neg-${index + 1}`,
  name: "Никита Евреев",
  rating: 2,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris."
}));
export const About = () => {
  const [activeTab, setActiveTab] = useState('positive');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  const reviews = activeTab === 'positive' ? positiveReviewsData : negativeReviewsData;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + itemsPerPage);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };
  return (
    <div>
      <div className='flex gap-20 items-center w-300 m-auto '>
      <div className='flex flex-col gap-10 w-180'> 
        <h1 className='text-orange-400 text-2xl'>Дизайнер </h1>
        <h1 className='text-4xl'><span className='text-green-500 text-4xl'>Ернар </span> Ибрагимов</h1>
        <h1>Работаю дизайнером с 1999 года.
Был опыт в газетах, журналах, типографиях, рекламных агентствах, издательских домах... Порядка 8 лет, занимаюсь логотипами и фирменными стилями.  </h1>
<div className='flex justify-between gap-10 text-2xl text-gray-500'>
  <h1>Figma</h1>
  <h1>Adobe photoshop</h1>
  <h1>Adobe illustrator</h1>
  <h1>Corel draw</h1>
</div>
<div className='flex justify-between text-3xl'>
  <h1>Adobe After Effects</h1>
  <h1>HTML/CSS</h1>
</div><br />
<section>
  <option value="" className='w-110 m-auto text-2xl bg-gray-300 rounded-4xl p-5'>
    Показать подробную информацию
  </option>
  

</section>

      </div>
      <div>
     
       <img src="/public/Ellipse 66.png" alt="" className='w-120' />
        <img src="/public/stars.png" alt="" className='w-50 ml-30' /></div>
      </div>
       <div className='grid grid-cols-3'>
      <div className='flex flex-col gap-10 shadow-2xl w-100 m-10 rounded-4xl p-10' >
         <img src="/public/Rect.png" alt="" className='w-120' />
         <h1 className='text-3xl'>Дизайн сайта</h1>
         
         <h1 className='text-3xl text-green-400'>50 000 тенге</h1>
      </div>
      
      <div className='flex flex-col gap-10 shadow-2xl w-100 m-10 rounded-4xl p-10' >
         <img src="/public/Rect.png" alt="" className='w-120' />
         <h1 className='text-3xl'>Дизайн сайта</h1>
         
         <h1 className='text-3xl text-green-400'>50 000 тенге</h1>
      </div>
      
      <div className='flex flex-col gap-10 shadow-2xl w-100 m-10 rounded-4xl p-10' >
         <img src="/public/Rect.png" alt="" className='w-120' />
         <h1 className='text-3xl'>Дизайн сайта</h1>
         
         <h1 className='text-3xl text-green-400'>50 000 тенге</h1>
      </div>
      
      <div className='flex flex-col gap-10 shadow-2xl w-100 m-10 rounded-4xl p-10' >
         <img src="/public/Rect.png" alt="" className='w-120' />
         <h1 className='text-3xl'>Дизайн сайта</h1>
         
         <h1 className='text-3xl text-green-400'>50 000 тенге</h1>
      </div>
      
      <div className='flex flex-col gap-10 shadow-2xl w-100 m-10 rounded-4xl p-10' >
         <img src="/public/Rect.png" alt="" className='w-120' />
         <h1 className='text-3xl'>Дизайн сайта</h1>
         
         <h1 className='text-3xl text-green-400'>50 000 тенге</h1>
      </div>
      
      <div className='flex flex-col gap-10 shadow-2xl w-100 m-10 rounded-4xl p-10' >
         <img src="/public/Rect.png" alt="" className='w-120' />
         <h1 className='text-3xl'>Дизайн сайта</h1>
         
         <h1 className='text-3xl text-green-400'>50 000 тенге</h1>
      </div>
      
      <div className='flex flex-col gap-10 shadow-2xl w-100 m-10 rounded-4xl p-10' >
         <img src="/public/Rect.png" alt="" className='w-120' />
         <h1 className='text-3xl'>Дизайн сайта</h1>
         
         <h1 className='text-3xl text-green-400'>50 000 тенге</h1>
      </div>
      
      <div className='flex flex-col gap-10 shadow-2xl w-100 m-10 rounded-4xl p-10' >
         <img src="/public/Rect.png" alt="" className='w-120' />
         <h1 className='text-3xl'>Дизайн сайта</h1>
         
         <h1 className='text-3xl text-green-400'>50 000 тенге</h1>
      </div>
      
      <div className='flex flex-col gap-10 shadow-2xl w-100 m-10 rounded-4xl p-10' >
         <img src="/public/Rect.png" alt="" className='w-120' />
         <h1 className='text-3xl'>Дизайн сайта</h1>
         
         <h1 className='text-3xl text-green-400'>50 000 тенге</h1>
      </div>
      
      <div className='flex flex-col gap-10 shadow-2xl w-100 m-10 rounded-4xl p-10' >
         <img src="/public/Rect.png" alt="" className='w-120' />
         <h1 className='text-3xl'>Дизайн сайта</h1>
         
         <h1 className='text-3xl text-green-400'>50 000 тенге</h1>
      </div>
      
      <div className='flex flex-col gap-10 shadow-2xl w-100 m-10 rounded-4xl p-10' >
         <img src="/public/Rect.png" alt="" className='w-120' />
         <h1 className='text-3xl'>Дизайн сайта</h1>
         
         <h1 className='text-3xl text-green-400'>50 000 тенге</h1>
      </div>
      
      <div className='flex flex-col gap-10 shadow-2xl w-100 m-10 rounded-4xl p-10' >
         <img src="/public/Rect.png" alt="" className='w-120' />
         <h1 className='text-3xl'>Дизайн сайта</h1>
         
         <h1 className='text-3xl text-green-400'>50 000 тенге</h1>
      </div>
      
      <div className='flex flex-col gap-10 shadow-2xl w-100 m-10 rounded-4xl p-10' >
         <img src="/public/Rect.png" alt="" className='w-120' />
         <h1 className='text-3xl'>Дизайн сайта</h1>
         
         <h1 className='text-3xl text-green-400'>50 000 тенге</h1>
      </div>
      
      <div className='flex flex-col gap-10 shadow-2xl w-100 m-10 rounded-4xl p-10' >
         <img src="/public/Rect.png" alt="" className='w-120' />
         <h1 className='text-3xl'>Дизайн сайта</h1>
         
         <h1 className='text-3xl text-green-400'>50 000 тенге</h1>
      </div>

      
      </div>      <button className='border-2 border-green-500 p-5 rounded-4xl text-green-600 w-80 ml-150 m-20'>Загрузить еще</button>

      <div>
        <div className="min-h-screen bg-[#f7fafc] p-6 sm:p-12 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
      
        <h1 className="text-3xl font-bold text-black mb-6">
          Отзывы
        </h1>
        <div className="flex items-center space-x-6 mb-8 text-sm sm:text-base font-semibold">
          <button
            onClick={() => handleTabChange('positive')}
            className={`transition-colors ${
              activeTab === 'positive'
                ? 'text-[#22c55e]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Положительные ({positiveReviewsData.length})
          </button>

          <button
            onClick={() => handleTabChange('negative')}
            className={`transition-colors ${
              activeTab === 'negative'
                ? 'text-[#22c55e]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Отрицательные ({negativeReviewsData.length})
          </button>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between"
            >
              <div>
            
                <div className="flex items-center space-x-4 mb-4">
              
                  <div className="w-14 h-14 bg-[#c8cbd0] rounded-full flex-shrink-0" />

                  <div>
                    <h3 className="font-bold text-gray-900 text-base">
                      {review.name}
                    </h3>

                 
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'text-[#ff9e57]' : 'text-[#b2b2d8]'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

             
                <p className="text-gray-600 text-xs leading-relaxed">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Пагинатсия (Саҳифаҳо) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-10 gap-2">
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-9 h-9 rounded-xl font-medium text-sm transition-all ${
                    currentPage === pageNum
                      ? 'bg-[#22c55e] text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
        )}

      </div>
    </div>
      </div>
      <Contacte/>
    </div>
  )
}
