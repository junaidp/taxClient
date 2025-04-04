import React from 'react'
import arrow from "../../assets/about-arrow.svg"

import search from "../../assets/search.svg";
import { useNavigate } from 'react-router-dom'

const Body = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='pt-[130px] px-[90px]'>
                <h1 className='text-[60px] font-bold text-[#003049]'>Frequently asked questions</h1>
                <p className='archivo text-[28px] leading-[43px]' style={{ color: 'rgba(6, 38, 62, 0.64)' }}>Search for for any questions you have or contact us directly.</p>
                <div className='flex justify-between items-center'>

                    <div className='h-[70px] w-[70%] relative mt-[9px]'>
                        <img src={search} className='absolute top-[20px] left-[6px]' />
                        <input placeholder='Search' className='archivo text-[24px] h-[100%] w-[100%] pl-[40px] rounded-[8px] border border-[1px] border-[#C4C4C4]' />
                    </div>
                    <button className='h-[58px] bg-[#003049] px-[56px] rounded-[2px] py-[10px] archivo text-[24px] text-[#FFFFFF]' onClick={() => navigate("/contact")}>Contact Us</button>
                </div>
            </div>
            <div className='pt-[130px] px-[90px] mt-[66px]' style={{ background: "rgba(217, 217, 217, 0.75)" }}>

            </div>
        </div>
    )
}

export default Body