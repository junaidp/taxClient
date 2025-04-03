import React from 'react'
import conatct from "../../assets/contact.svg"

const Body = () => {
    return (
        <div>
            <div className='mt-[66px] mx-[130px] flex flex-col md:flex-row gap-[50px]'>
                <div className='flex flex-col gap-[22px] flex-1'>
                    <div className='flex flex-col gap-[10px]'>
                        <h1 className='archivo text-[60px] font-bold' style={{ color: "rgba(0, 48, 73, 1)" }}>Contact us</h1>
                        <p className='archivo text-[28px] leading-[43px]' style={{ color: "rgba(6, 38, 62, 0.64)" }}>Need help with something?  Get in touch with our friendly  team and we’ll get back to you within 2 hours.</p>
                    </div>
                    <div>
                        <label className='text-[24px] archivo' style={{ color: "rgba(6, 38, 62, 1)" }}>Name</label>
                        <input className='h-[50px] w-[100%] rounded-[8px] border border-[1px] border-[#C4C4C4]' />
                    </div>
                    <div>
                        <label className='text-[24px] archivo' style={{ color: "rgba(6, 38, 62, 1)" }}>Email</label>
                        <input className='h-[50px] w-[100%] rounded-[8px] border border-[1px] border-[#C4C4C4]' />
                    </div>
                    <div>
                        <label className='text-[24px] archivo' style={{ color: "rgba(6, 38, 62, 1)" }}>Message</label>
                        <textarea className='h-[50px] w-[100%] rounded-[8px] border border-[1px] border-[#C4C4C4] h-[100px]'></textarea>
                    </div>
                    <button className='h-[58px] w-[100%] bg-[#003049] rounded-[8px] text-[24px] archivo text-[#FFFFFF]'>Get in touch</button>
                </div>
                <div className='flex-1'>
                    <img src={conatct} />
                </div>
            </div>
            <p className='text-[20px] archivo text-center mt-[50px] pb-[30px]' style={{ color: "rgba(183, 192, 197, 1)" }}>© 2025 TaxReady. All rights reserved.</p>
        </div>
    )
}

export default Body