import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
export default () => {
    return (
        <>
            <div id='home' className='md:pt-40 max-md:pt-10 max-w-7xl mx-auto px-5'>
                <div className='flex *:flex-1 flex-wrap justify-center gap-16'>
                    <div className='text-xl *:pb-6 max-md:*:pb-2 mt-20 min-w-96'>
                        <h1 className='text-5xl font-bold max-md:text-4xl'>متین درویشی</h1>
                        <p className='text-xl dark:text-zinc-500 text-zinc-400  mt-8'>intermediate MERN-stack developer</p>
                        <p className='text-lg text-justify ml -16 max-lg:mx-auto '>با تجربه‌ای که در توسعه‌ی فول استک با استفاده از MERN Stack دارم، می‌توانم پروژه‌های وب را از ایده تا اجرا به خوبی پیش ببرم. تسلط من بر MongoDB, Express.js, React و Node.js به من امکان می‌دهد تا برنامه‌های کاربردی واکنش‌گرا و کارآمدی بسازم که هم در سمت سرور و هم در سمت کلاینت عملکرد خوبی دارند. علاوه بر مهارت‌های برنامه‌نویسی، در زمینه‌ی طراحی وب نیز دانشی دارم و می‌توانم رابط کاربری زیبا و کاربرپسندی طراحی کنم که تجربه‌ی کاربری را بهبود بخشد. همواره به دنبال یادگیری و بهبود مهارت‌هایم هستم تا بتوانم بهترین خدمات را به مشتریان ارائه دهم.</p>
                    </div>
                    <div className='bg-violet-600 rounded-3xl'>
                        <div className='w-max mx-auto flex flex-col *:flex *:items-center items-center [&>span]:w-72 *:justify-between [&_svg]:text-3xl text-zinc-200 text-xl *:mt-5 py-10' dir='ltr'>

                            <img src="/me.jpg" alt="" className='max-w-72 mx-auto  rounded-full' />
                            <span>+98 902 401 7755<FaPhoneSquareAlt /></span>
                            <span className='text-lg'>mateendarvishi@gmail.com<MdEmail /></span>
                            <span>mateen darvishi<FaLinkedin /></span>
                            <span>@mahserin021<FaTelegram /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
