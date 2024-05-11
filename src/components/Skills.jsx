import React from 'react'
import SkillItem from './SkillItem'
export default () => {
    return (
        <>
            <div id='skills' className='max-w-7xl mx-auto px-5 pt-32'>
                <h2 className='text-3xl mb-10'>مهارت ها</h2>
                <div className='flex gap-5 flex-col'>

                    <SkillItem num='0' title='پیش نیاز های وب' >
                        <item title='html' rate='5' />
                        <item title='CSS' rate='4.5' />
                        <item title='JavaScript' rate='5' />
                    </SkillItem>
                    <SkillItem num='1' title='مهارت های نرم'  >
                        <item title='الگوریتم نویسی' rate='4.5' />
                        <item title='فیکس کردن باگ' rate='4.5' />
                        <item title='رعایت اصول کلین کد' rate='3' />
                    </SkillItem>
                    <SkillItem num='2' title='operating systems' desc='مهارت کار با سیتم عامل ها' rate='3.5' >
                    </SkillItem>
                    <SkillItem num='3' title='react frameWork' desc='لایبری های مورد استفاده در ری اکت' rate='3.5' >
                        <item title='react icons' rate='5' desc='یک کتابخانه همه کاره و جامع از آیکون های محبوب که می تواند به راحتی در پروژه های React شما پیاده سازی شود' />
                        <item title='tailwind css' rate='4.5' desc='یک فریمورک CSS پر از کلاس ها' />
                        <item title='axios' rate='4.5' desc='یک کتابخانه HTTP مبتنی بر وعده که به توسعه‌دهندگان اجازه می‌دهد برای واکشی داده‌ها از سرور خود یا سرور شخص ثالث درخواست کنند.' />
                        <item title='react-router' rate='4' desc='جهت روت بندی اپلیکیشن های ری اکتی' />
                        <item title='Prettier' rate='4' desc='یک قالب‌کننده کد که از زبان‌های برنامه‌نویسی مختلف پشتیبانی می‌کند' />
                        <item title='vite' rate='4' desc='شروع فوری سرور · HMR سریع رعد و برق · ویژگی های غنی · ساخت بهینه · افزونه های جهانی · APIهای کاملاً تایپ شده' />
                        <item title='create-react-app' rate='3.5' desc='بهترین راه برای شروع ساخت یک برنامه تک صفحه ای جدید در React است.' />
                        <item title='sweetAlert 2' rate='3.5' desc='یک جایگزین زیبا، پاسخگو، قابل تنظیم و در دسترس (WAI-ARIA) برای جعبه های بازشو جاوا اسکریپت' />
                        <item title='react tooltip' rate='3.5' desc='یک عنصر واکنش شناور که اطلاعات مربوط به یک عنصر لنگر را هنگامی که فوکوس صفحه کلید را دریافت می کند یا ماوس روی آن قرار می گیرد، نمایش می دهد.' />
                        <item title='swiperJs' rate='3.5' desc='یک کتابخانه جاوا اسکریپت که اسلایدر های زیبا و روان ایجاد میکند' />
                        <item title='React Spinners' rate='3' desc='مجموعه ای از اسپینرهای بارگیری با React.js بر اساس هالوژن' />
                        <item title='lodash' rate='3' desc='یک کتابخانه ابزار جاوا اسکریپت که سازگاری، مدولار بودن، عملکرد و موارد اضافی را ارائه می دهد' />
                        <item title='formik' rate='2.5' desc='گروه کوچکی از کامپوننت ها و هوک های React برای ساخت فرم ها در React و React Native' />
                        <item title='bootstrap' rate='2' desc='بوت استرپ محبوب ترین فریمورک CSS برای توسعه وب سایت های واکنش گرا و  اولویت موبایل است' />
                        <item title='firebase' rate='2' desc='یک پلتفرم توسعه برنامه که به شما کمک می کند برنامه ها و بازی هایی را که کاربران دوست دارند بسازید و رشد دهید' />
                        <item title='Material UI' rate='1' desc='Material UI یک کتابخانه کامپوننت React منبع باز است که طراحی متریال گوگل را پیاده سازی می کند' />
                        <item title='ESLint' rate='1' desc='ابزاری قابل اتصال و تنظیم برای شناسایی و گزارش الگوها در جاوا اسکریپت' />
                        <item title='nextjs' rate='1' desc='فریم ورک همه چی تموم React برای وب ...' />
                        <item title='CKEditor' rate='1' desc='یک ویرایشگر متن جاوا اسکریپت مدرن و غنی با رابط کاربری تمیز و UX عالی' />
                    </SkillItem>
                    <SkillItem num='4' title='node js runtime' desc='ماژول های تحت نود جی اس' rate='4.5' >
                        <item title='dotenv' rate='5' desc='ماژولی که در اکثر زبان های برنامه نویسی وجود دارد که متغیرهای محیطی را از یک بارگیری می کند. فایل env برای مدیریت راحت تر' />
                        <item title='regex' rate='5' desc='دنباله ای از کاراکترها که الگوی مطابقت را در متن مشخص می کند.' />
                        <item title='jwt' rate='5' desc='یک استاندارد باز برای انتقال ایمن داده ها در احزاب با استفاده از یک شی JSON.' />
                        <item title='معماری mvc' rate='5' desc='یک الگوی معماری نرم افزار که یک برنامه کاربردی را به سه جزء به هم پیوسته جدا می کند: Model، View و Controller' />
                        <item title='bodyParser' rate='5' desc='در Node.js برای فیلتر کردن بدنه یک درخواست HTTP ورودی استفاده می شود' />
                        <item title='bcrypt' rate='5' desc='یک الگوریتم هش طراحی شده توسط نیلز پروووس و دیوید مازیرس بر اساس رمز Blowfish' />
                        <item title='express' rate='4.5' desc='یک چارچوب برنامه وب حداقلی و انعطاف پذیر Node.js که مجموعه ای قوی از ویژگی ها را برای برنامه های وب و موبایل ارائه می کند.' />
                        <item title='mongoose' rate='4.5' desc='یک کتابخانه Object Data Modeling (ODM) برای MongoDB و Node.js.' />
                        <item title='npm' rate='4.5' desc='بزرگترین ثبت نرم افزار (کتابخانه) جهان.' />
                        <item title='axios' rate='4.5' desc='یک کتابخانه HTTP مبتنی بر وعده که به توسعه‌دهندگان اجازه می‌دهد برای واکشی داده‌ها از سرور خود یا سرور شخص ثالث درخواست کنند.' />
                        <item title='rest' rate='4' desc='یک روش ساختاریافته و مقیاس پذیر برای اجزای مختلف نرم افزار برای برقراری ارتباط از طریق اینترنت فراهم می کند' />
                        <item title='webSocket' rate='4' desc='یک پروتکل ارتباطی کامپیوتری که کانال های ارتباطی دو طرفه همزمان را روی یک پروتکل کنترل انتقال (TCP) فراهم می کند.' />
                        <item title='multer' rate='4' desc='یک گره میان‌افزار js برای مدیریت داده‌های چندبخشی/فرم' />
                        <item title='fastestValidator' rate='4' desc='یک اعتبار سنج با ارزش برابر این یک مقدار را با یک مقدار ثابت یا با یک ویژگی دیگر بررسی می کند.' />
                        <item title='nodemailer' rate='3.5' desc='یک ماژول Node JS که به شما امکان می دهد به راحتی از سرور خود ایمیل ارسال کنید' />
                        <item title='CORS' rate='3' desc='اشتراک‌گذاری منابع متقاطع (CORS) یک مکانیسم مبتنی بر هدر HTTP است که به سرور اجازه می‌دهد هر منبعی را نشان دهد.' />
                        <item title='helmet' rate='3' desc='یک ماژول مفید Node.js که به شما کمک می کند هدرهای HTTP را که توسط برنامه های Express خود بازگردانده شده است ایمن کنید' />
                        <item title='lodash' rate='3' desc='یک کتابخانه ابزار جاوا اسکریپت که سازگاری، مدولار بودن، عملکرد و موارد اضافی را ارائه می دهد' />
                        <item title='morgan' rate='2.5' desc='میان افزار ثبت درخواست HTTP برای Node. js' />
                        <item title='ejs' rate='2' desc='یک موتور قالب که توسط Node استفاده می شود. js' />
                        <item title='pug' rate='2' desc='موتور قالب به ما اجازه می دهد تا داده ها را تزریق کنیم و سپس HTML تولید کنیم' />
                        <item title='hbs' rate='1.5' desc='یک موتور قالب مشابه ماژول ejs در گره. js، اما استفاده از آن قدرتمندتر و ساده تر است' />
                        <item title='CKEditor' rate='1' desc='یک ویرایشگر متن جاوا اسکریپت مدرن و غنی با رابط کاربری تمیز و UX عالی' />
                    </SkillItem>
                    <SkillItem num='5' title='ECMAScript language' desc='مهم ترین کتاب خانه های جاوا اسکریپت' rate='4.5' >
                        <item title='wowjs' rate='5' desc='کتابخانه‌ای برای ایجاد انیمیشن‌های واکنش‌گرا در وب‌سایت‌ها.' />
                        <item title='aos' rate='4' desc='کتابخانه‌ای برای ایجاد انیمیشن‌های پیش‌فرض در هنگام نمایش عناصر در صفحه.' />
                        <item title='ParticleJs' rate='3.5' desc='کتابخانه‌ای برای ایجاد افکت‌های ذرات در پس‌زمینه وب‌سایت.' />
                        <item title='typeWriter' rate='4.5' desc='کتابخانه‌ای برای ایجاد افکت تایپ‌نویسی در متن‌ها.' />
                        <item title='sweetAlert' rate='3.5' desc='کتابخانه‌ای برای نمایش پیام‌های زیبا و تعاملی به کاربر.' />
                        <item title='videoJs' rate='3' desc='یک پلیر ویدیو قدرتمند برای وب‌سایت‌ها.' />
                        <item title='lodash' rate='2' desc='کتابخانه‌ای کارآمد برای کار با آرایه‌ها، رشته‌ها و داده‌های مختلف در جاوااسکریپت.' />
                        <item title='chartJs' rate='3' desc='کتابخانه‌ای برای ایجاد نمودارهای زیبا و تعاملی در وب‌سایت‌ها.' />
                        <item title='iziToast' rate='3.5' desc='کتابخانه‌ای برای نمایش پیام‌های خوراکی و زیبا به کاربر.' />
                        <item title='tippyJs' rate='4' desc='کتابخانه‌ای برای ایجاد ابزارهای راهنما (tooltip) در وب‌سایت‌ها.' />
                        <item title='owlSlider' rate='3' desc='کتابخانه‌ای برای ایجاد اسلایدرهای تصویری در وب‌س' />
                        <item title='swiperJs' rate='4' desc='کتابخانه‌ای برای ایجاد اسلایدرهای قابلیت لمسی و کشویی در وب‌سایت‌ها.' />
                        <item title='CKEditor' rate='1' desc='یک ویرایشگر متن قدرتمند برای وب‌سایت‌ها که امکانات ویژه‌ای مانند ویرایش WYSIWYG، افزودن تصاویر و جداول، ویرایش کدهای HTML و … را فراهم می‌کند.' />
                        <item title='clientJs' rate='2.5' desc='کتابخانه‌ای کم حجم برای تشخیص ویژگی‌های مرورگر و دستگاه کاربر در وب‌سایت‌ها.' />
                        <item title='Paralax' rate='3' desc='کتابخانه‌ای برای ایجاد افکت پارالاکس در پس‌زمینه وب‌سایت.' />
                        <item title='validatorJs' rate='2.5' desc='کتابخانه‌ای برای اعتبارسنجی داده‌ها در فرم‌ها و ورودی‌ها در وب‌سایت‌ها.' />
                    </SkillItem>


                    <SkillItem num='6' title='telegram bot api' desc='راه اندازی ربات تلگرام' rate='4' >
                        <item title='node telegram bot api' rate='4.5' />
                        <item title='telegraf' rate='4' />

                    </SkillItem>
                    <SkillItem num='7' title='امنیت وب' desc='بررسی و جلوگیری از راه های ورود به سایت' rate='3.5' >
                        <item title='xss' rate='3' desc='جلو گیری از ایجاد اسکریپت های کراس ساید' />
                        <item title='ddos' rate='4' desc='جلوگیری از ایجاد رکوئست اتک' />
                        <item title='csref' rate='1' />
                    </SkillItem>
                    <SkillItem num='8' title='علم ورژن بندی' desc='دانایی کافی از نحوه ورژن بندی اصولی و پلتفورم های مورد نیاز آن' rate='4' >
                        <item title='git' rate='3' />
                        <item title='github' rate='4' />

                    </SkillItem>
                    <SkillItem num='9' title='علم پایگاه داده' desc='علم مورد نیاز برای ایجاد پایگاه داده های اصولی و امن به همراه ماژول های مورد استفاده آن' rate='4' >

                        <item title='MongoDB' rate='4.5' />
                        <item title='RDBMS structure' rate='4' />
                        <item title='redis' rate='3' />
                    </SkillItem>
                </div>

            </div>
        </>
    )
}
