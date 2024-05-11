import React from 'react'
import WorkItem from './WorkItem'
export default () => {
    return (
        <>
            <div id="work" className='max-w-7xl mx-auto px-5 pt-32 '>
                <h3 className='text-3xl'>سوابق شغلی</h3>
                <div className='mt-20 flex gap-20 flex-wrap justify-center'>
                    <WorkItem url='/hamsooo.jpg' title='استارتاپ همسو' desc='استارتاپ همسو وظیفه مدیریت منابع مالی  اجتماع های مردمی را به عهده دارد و در سال 1401 چندین دستاورد قابل توجه کسب کرده است' position='طراح گرافیک سوشال مدیا' duration='3 ماه' reason='حقوق ناکافی' />
                    <WorkItem url='/olgoo.webp' title='نشر الگو' desc='نشر الگو یکی از قدیمی ترین و معروف ترین نشریه هاست که از بدو تشکیل تا حال کتاب های کمک درسی ارائه میدهد این شرکت در حال حاضر درحال طراحی و تلفیق چند سایت میباشد' position='فول استک دولوپر' duration='2 ماه (مشغول)' reason='---' />

                </div>

            </div>
        </>
    )
}
