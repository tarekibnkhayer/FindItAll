import Image from 'next/image';
import React from 'react';
import {Dancing_Script, Roboto} from 'next/font/google'
import { FiSearch } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Featured from '@/components/Featured'
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import Reviews from '@/components/Reviews';

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: '700'
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

const Home = () => {
  return (
    <div>
      <div className='bg-green-500'>
     <div className='flex items-center relative text-white ml-20'>
     <Image src="/logo.png" alt='Website logo' width={100} height={100} className='text-green-500'></Image>
     <p className={`${dancing.className} text-5xl`}>FindItAll</p>
     <input type="text" name="" id="" className='shadow-2xl ml-10  pl-4 w-2/5 h-12 rounded-lg text-black' placeholder='Search Products' />
     <div className='flex text-xl items-center gap-3 bg-orange-400 rounded-sm  p-2  h-12'>
      <FiSearch/>
      <p>Search</p>
     </div>
    <button className='flex flex-row items-center gap-1 ml-4'>
    <IoPersonCircleOutline className='text-4xl'/>
     <p className={`${roboto.className}  text-2xl`}>Login</p> 
    </button>
    <p className='ml-4'>|</p>
    <button className={`${roboto.className} font-medium bg-orange-400 p-3 rounded-2xl ml-4 text-xl`}>Sign up</button>
    <button><AiOutlineShoppingCart  className='ml-6 text-4xl'/></button>
     </div>
    </div>
    <Featured></Featured>
    <Products></Products>
    <Reviews></Reviews>
    <Footer></Footer>
    </div>
  );
};

export default Home;