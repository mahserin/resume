import React from 'react'
import LanguageItem from './LanguageItem'

export default () => {
    return (
        <>
            <div id='language' className='max-w-7xl mx-auto px-5 pt-32'>
                <h3 className='text-3xl mb-4'>زبان های مسلط</h3>
                <div className='flex flex-col gap-5'>
                    <LanguageItem title='فارسی' reading='95' writing='90' listening='100' speaking='93' vocab='87' />
                    <LanguageItem title='انگلیسی' reading='80' writing='70' listening='60' speaking='50' vocab='65' />
                </div>
            </div>
        </>
    )
}
