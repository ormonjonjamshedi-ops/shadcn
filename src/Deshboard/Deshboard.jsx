import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { CaretDownOutlined } from '@ant-design/icons'
import { Button } from '@base-ui/react'


export const Deshboard = () => {
  return (
    <div>
      <nav className="w-380 my-5 h-20 m-auto  flex justify-around text-center text-black items-center text-3xl">
      <img src="/public/worktap.png" alt="" />
      <div className='flex gap-10'>
        <Link className="text-2xl" to="/">
          Биржа
        </Link>
        <Link to="Catalog" className="text-2xl">
          Ворки
        </Link>

        <Link to="About" className="text-2xl">
        Конкурсы
        </Link>
         <Link to="Vork" className="text-2xl">
        Создать ворк
        </Link>
        <Link to="Vork" className="text-2xl">
        Создать заказ
        </Link></div>
        <div className='flex justify-between gap-10'>
        <Button className="bg-blue-50 text-2xl text-green-500 rounded-3xl p-5  hover:bg-blue-200">Регистрация</Button>
        <Button className="bg-green-500 text-2xl text-white  rounded-3xl p-5 hover:bg-green-700">Войти</Button>
         </div>
      </nav>

      <Outlet />
    </div>
  )
}
