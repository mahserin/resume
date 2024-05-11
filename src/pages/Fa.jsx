import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import Home from '../components/Home'
import Info from '../components/Info'
import Education from '../components/Education'
import Work from '../components/Work'
import Language from '../components/Language'
import Skills from '../components/Skills'
export default () => {
    useEffect(() => {
        document.title = 'رزومه کاری متین درویشی'
    }, [])
    return (
        <>
            <div dir='rtl'>
                <Nav />
                <Home />
                <Info />
                <Education />
                <Work />
                <Language />
                <Skills />
            </div>
        </>
    )
}
