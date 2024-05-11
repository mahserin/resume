import React from 'react'

export default () => {
    const date = new Date()

    return (
        <>
            <div id='info' className='pt-32 max-w-7xl mx-auto px-5 text-xl md:grid md:grid-cols-2 max-md:flex max-md:flex-col gap-6 '>
                <p className="name">نام: متین درویشی</p>
                <p className="job">عنوان شغلی: توسعه دهنده سایت</p>
                <p className="sex">جنسیت: مرد</p>
                <p className="born">سن: {date.getFullYear() - 2005}</p>
                <p className="from">محل سکونت: ایران, تهران</p>
                <p className="marry">وضعیت تاهل: مجرد</p>
                <p className="license">آخرین مدرک تحصیلی: کاردانی مهندسی کامپیوتر (درحال تحصیل)</p>
                <p className="soldier">وضعیت سربازی: معافیت تحصیلی</p>
            </div>

        </>
    )
}
