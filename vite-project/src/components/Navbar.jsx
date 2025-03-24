'use client'
import React from 'react'
import logo from '../assets/Logo.png'
import { MenuList } from '../utils/Menu'
import {Link, useParams} from 'react-router-dom'

const Navbar = () => {
    const pathname = useParams()
    console.log(pathname)
  return (
    <div className='flex items-center w-full justify-between'>
        <div className=' flex items-center cursor-pointer '>
            <img src={logo} className='w-20 h-20' alt="" />
        </div>
        <div className='flex gap-2 items-center'>
            {MenuList.map((item,index)=>(
                <Link to={item.url}>
                    <p className={`text-2xl font-bold opacity-70 hover:opacity-95 transition duration-300 ${pathname === item.url ? "underline" : ""}`}>{item.name}</p>
                </Link>
            ))}
        </div>
        <div>
            <p>3</p>
        </div>
    </div>
  )
}

export default Navbar
