import React, { useEffect } from 'react'
import { Tooltip } from 'react-tooltip'

export default () => {
    useEffect(() => {
        const date = new Date()
        const hijryDate = date.getFullYear() - 621
        const timeline = document.getElementById('timeline')
        const timePeriod = hijryDate - timeline.children[0].dataset.start
        const widthIndex = timeline.offsetWidth / timePeriod
        const education = document.getElementById('education')
        const newParent = document.createElement('div')
        newParent.classList.add('flex', 'h-10', 'px-5')
        let newChild, period
        for (let i = 0; i < timeline.children.length - 1; i++) {
            period = timeline.children[i].dataset.end - timeline.children[i].dataset.start
            newChild = document.createElement('div')
            newChild.style.width = `${Math.floor(widthIndex * period)}px`
            newChild.classList.add('flex', 'relative', 'justify-center', 'items-center', 'text-zinc-200', '[&_div]:text-zinc-800', 'dark:[&_div]:text-zinc-200')
            newChild.style.backgroundColor = timeline.children[i].dataset.color

            newChild.dataset['tooltipId'] = timeline.children[i].dataset.tooltipId
            newChild.dataset['tooltipContent'] = timeline.children[i].dataset.tooltipContent
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) newChild.dataset['tooltipVariant'] = 'light'

            newChild.innerText = timeline.children[i].dataset.title
            newChild.insertAdjacentHTML('beforeend', `<div style='position: absolute; top: -30px; right: -20px ;'>${timeline.children[i].dataset.start}</div>`)
            newParent.appendChild(newChild)
        }

        period = hijryDate - timeline.children[timeline.children.length - 1].dataset.start
        newChild = document.createElement('span')
        newChild.style.width = `${Math.floor(widthIndex * period)}px`
        newChild.classList.add('flex', 'relative', 'justify-center', 'items-center', 'text-zinc-200', '[&_div]:text-zinc-800', 'dark:[&_div]:text-zinc-200')
        newChild.style.backgroundColor = timeline.children[timeline.children.length - 1].dataset.color

        newChild.dataset['tooltipId'] = timeline.children[timeline.children.length - 1].dataset.tooltipId
        newChild.dataset['tooltipContent'] = timeline.children[timeline.children.length - 1].dataset.tooltipContent

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) newChild.dataset['tooltipVariant'] = 'light'

        newChild.innerText = timeline.children[timeline.children.length - 1].dataset.title
        newChild.insertAdjacentHTML('beforeend', `<div style='position: absolute; top: -30px; right: -20px ;'>${timeline.children[timeline.children.length - 1].dataset.start}</div>`)
        newChild.insertAdjacentHTML('beforeend', `<div style='position: absolute; top: -30px; left: -20px ;'>${hijryDate}</div>`)
        newParent.appendChild(newChild)

        education.appendChild(newParent)
    }, [])
    return (
        <><div id='education' className='pt-32 max-w-7xl mx-auto px-5 text-xl'>
            <h3 className='text-3xl mb-20'>خط زمانی تحصیلات</h3>
            <div id="timeline" className='invisible' >
                <div
                    data-start='1396'
                    data-color='#371B58'
                    data-end='1402'
                    data-title='متوسطه اول و دوم'
                    data-tooltip-id='tooltip1'
                    data-tooltip-content={'تحصیل کرده در مدرسه استعداد های درخشان شهید بهشتی واقع در رودهن با مدرک دیپلم ریاضی فیزیک به درجات بالاتر'}

                />
                <div
                    data-start='1402'
                    data-color='#4C3575'
                    data-end='1403'
                    data-title='کاردانی'
                    data-tooltip-id='tooltip2'
                    data-tooltip-content={'محصل در رشته  مهندسی کامپیوتر گرایش نرم افزار در دانشگاه آزاد پردیس'}

                />
            </div>
            <Tooltip id="tooltip1" />
            <Tooltip id="tooltip2" />
        </div>
        </>


    )
}
