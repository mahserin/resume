import React from 'react'

export default (props) => {
    return (
        <>
            <div className={props.className + ' min-w-44 max-w-96  shadow-xl dark:shadow-zinc-700 shadow-zinc-400 hover:shadow-violet-500 hover:border-[#852f8d] dark:border-[#2f2f2f] border-2  duration-700 rounded-3xl transition-all p-8 text-justify [&>p]:mt-5'}>
                <img className='w-40 rounded-full mx-auto' src={props.url} alt="" />
                <p className='text-center text-3xl'>{props.title}</p>
                <p>{props.desc}</p>
                <p className='text-lg'>سمت شغلی: {props.position}</p>
                <p className='text-lg'>مدت مشغولیت: {props.duration}</p>
                <p className='text-lg'>دلیل اتمام همکاری: {props.reason}</p>
            </div>
        </>
    )
}
