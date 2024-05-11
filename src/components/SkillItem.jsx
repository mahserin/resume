import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
export default (props) => {
    console.log(props.children)
    const stars = (rate) => {
        const starsComps = [];
        for (let i = 0; i < Math.floor(rate) && i < 5; i++) {
            starsComps.push(<TiStarFullOutline key={i} />);
        }
        if (rate <= 5 && Math.floor(rate) != rate) {
            starsComps.push(<TiStarHalfOutline key="half" />);
        }
        while (starsComps.length < 5) {
            starsComps.push(<TiStarOutline key={starsComps.length} />);
        }
        return starsComps;
    };

    const showItems = (e) => {
        const currentElem = document.getElementsByTagName('details')[props.num]
        e.preventDefault()
        if (currentElem.opened) {
            currentElem.opened = false
            console.log('ther1')
            currentElem.lastChild.classList.add('hidden')
            currentElem.getElementsByClassName('dd')[0].classList.remove('rotate-180')
            console.log(currentElem.lastChild)
        } else {
            currentElem.getElementsByClassName('dd')[0].classList.add('rotate-180')
            currentElem.opened = true
            console.log('ther2')
            currentElem.lastChild.classList.remove('hidden')
            currentElem.lastChild.classList.add('grid')
            console.log(currentElem.lastChild)
        }
    }
    let children
    if (props.children && !props.children?.length) {
        children = [props.children]
    } else { children = props.children }
    return (
        <>
            <details id='detail' onClick={showItems} className='transition-[max-height] ' open opened>
                <summary className='list-none flex items-center gap-2 text-xl group max-md:text-sm max-md:gap-0' >

                    {props.title ? <li className='min-w-fit'>{props.title}</li> : ''}
                    {props.rate ? (<div className='text-yellow-600' dir='ltr'>
                        <div className='flex max-md:hidden'>
                            {stars(props.rate)}

                        </div>
                        <div className='flex flex-col md:hidden items-center mx-2 *:m-0'>
                            <p className='text-xs leading-3'>{props.rate}/5</p>
                            <TiStarFullOutline className='text-lg' />
                        </div>
                    </div>) : ''}
                    {props.children ? <RiArrowDropDownLine className='text-5xl min-w-12 group-hover:text-violet-400 transition-all duration-300 group-hover:drop-shadow-4xl shadow-violet-500 dd' /> : ''}
                    {props.desc ? <p className='text-zinc-500 text-ellipsis text-nowrap overflow-hidden'>{props.desc}</p> : ''}
                </summary>
                <div className='hidden overflow-hidden  h-full  max-md:gap-y-6 max-md:gap-x-2  grid-cols-[max-content_max-content_max-content] md:gap-5 items-center *:max-md:mx-auto  max-md:grid-cols-[max-content_max-content_max-content_max-content] text-start max-md:justify-center mr-10 pt-5'>

                    {children?.map(child => (<>

                        {/* <li className='flex items-center gap-1 md:mr-10 md:mt-4'> */}
                        {child.props.title ? <p className='md:col-start-1 text-start w-full'>
                            {child.props.title}
                        </p> : ''}

                        {child.props.rate ? (<div className='text-yellow-600' dir='ltr'>
                            <div className='flex max-md:hidden'>
                                {stars(child.props.rate)}

                            </div>
                            <div className='flex flex-col md:hidden items-center mx-2 *:m-0'>
                                <p className='text-xs leading-3'>{child.props.rate}/5</p>
                                <TiStarFullOutline className='text-lg' />
                            </div>
                        </div>
                        ) : ''}
                        {child.props.desc ? <p className='text-zinc-500 max-md:hidden'>{child.props?.desc}</p> : ''}
                        {/* </li> */}
                    </>
                    ))}
                </div>
            </details>
        </>
    )
}
