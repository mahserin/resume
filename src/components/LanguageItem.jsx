import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
export default (props) => {

    ChartJS.register(ArcElement, Tooltip, Legend);
    return (
        <>
            <div className=" border dark:border-zinc-700 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-400 transition-all duration-700 p-5 mt-5 rounded-xl">

                <p className='text-center text-2xl'>زبان {props.title}</p>
                <div className='flex *:flex-1 justify-center *:max-w-40  *:min-w-40 flex-wrap gap-20 [&_p]:text-xl text-center mt-10'>
                    <div>
                        <p>مهارت خوانداری</p>
                        <Doughnut height='100' width='100'

                            data={{ datasets: [{ data: [props.reading, 100 - props.reading], backgroundColor: ['rgba(54, 162, 235, 1)', 'transparent',], borderWidth: 1, borderAlign: 'inner', borderDashOffset: 0, borderColor: ['transparent', '#ffffff11'] },], }} />
                    </div>
                    <div>
                        <p>مهارت نوشتاری</p>
                        <Doughnut height='100' width='100' data={{ datasets: [{ data: [props.writing, 100 - props.writing], backgroundColor: ['rgba(54, 162, 235, 1)', 'transparent',], borderWidth: 1, borderAlign: 'inner', borderColor: ['transparent', '#ffffff11'] },], }} />
                    </div>

                    <div>
                        <p>مهارت شنیداری</p>
                        <Doughnut height='100' width='100'
                            className='w-1 h-1' data={{ datasets: [{ data: [props.listening, 100 - props.listening], backgroundColor: ['rgba(54, 162, 235, 1)', 'transparent',], borderWidth: 1, borderAlign: 'inner', borderDashOffset: 0, borderColor: ['transparent', '#ffffff11'] },], }} />
                    </div>
                    <div>
                        <p>مهارت گفتاری</p>
                        <Doughnut height='100' width='100'
                            className='w-1 h-1' data={{ datasets: [{ data: [props.speaking, 100 - props.speaking], backgroundColor: ['rgba(54, 162, 235, 1)', 'transparent',], borderWidth: 1, borderAlign: 'inner', borderDashOffset: 0, borderColor: ['transparent', '#ffffff11'] },], }} />

                    </div>
                    <div>
                        <p>دایره لغات</p>
                        <Doughnut height='100' width='100'
                            className='w-1 h-1' data={{ datasets: [{ data: [props.vocab, 100 - props.vocab], backgroundColor: ['rgba(54, 162, 235, 1)', 'transparent',], borderWidth: 1, borderAlign: 'inner', borderDashOffset: 0, borderColor: ['transparent', '#ffffff11'] },], }} />
                    </div>
                </div>
            </div>
        </>
    )
}
