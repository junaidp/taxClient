import React from 'react'
import arrow from "../../assets/about-arrow.svg"
import { useNavigate } from 'react-router-dom'
import check from "../../assets/check.svg"
import pricing from "../../assets/pricing.svg"

const Body = () => {
    const navigate = useNavigate()
    return (
        <div>

            <div className='mt-[40px] md:mt-[66px] ml-[20px] md:ml-[130px] mr-[20px] md:mr-[0px] flex flex-col md:flex-row gap-[50px]'>
                <div className='bg-gradient-to-t from-[#0073AF] to-[#003049] py-[47px] px-[56px] flex-1 rounded-[10px] flex flex-col gap-[22px]'>
                    <h1 className='font-bold text-[30px] md:text-[60px]' style={{ color: "rgba(255, 255, 255, 1)" }}>Simple Pricing</h1>
                    <h1 className='archivo  text-[25px] md:text-[43px] font-semibold' style={{ color: "rgba(255, 255, 255, 1)" }}>£ 12.00 / per filing</h1>
                    <button className='h-[46px] w-[196px] bg-[#40B7B0] rounded-[4px] flex flex-row justify-center items-center gap-[5px]' onClick={() => navigate("/start")}>
                        <p className='archivo text-[20px] text-[#FFFFFF]'>Start for free</p>
                        <div className='h-[29px] w-[29px] flex justify-center'>
                            <img src={arrow} />
                        </div>
                    </button>
                    <div className='mt-[59px] flex flex-col gap-[32px]'>
                        <div className='flex items-center gap-[21px]'>
                            <div className='h-[36px] w-[36px] bg-black flex justify-center items-center' style={{ borderRadius: "50%" }}>
                                <img src={check} />
                            </div>
                            <p className='archivo text-[20px] md-text-[28px] ' style={{ color: 'rgba(255, 255, 255, 1)' }}>Unlimited business types</p>
                        </div>
                        <div className='flex items-center gap-[21px]'>
                            <div className='h-[36px] w-[36px] bg-black flex justify-center items-center' style={{ borderRadius: "50%" }}>
                                <img src={check} />
                            </div>
                            <p className='archivo text-[20px] md-text-[28px]  ' style={{ color: 'rgba(255, 255, 255, 1)' }}>Unlimited expense types</p>
                        </div>
                        <div className='flex items-center gap-[21px]'>
                            <div className='h-[36px] w-[36px] bg-black flex justify-center items-center' style={{ borderRadius: "50%" }}>
                                <img src={check} />
                            </div>
                            <p className='archivo text-[20px] md-text-[28px]  ' style={{ color: 'rgba(255, 255, 255, 1)' }}>Secure payment through Stripe</p>
                        </div>
                        <div className='flex items-start gap-[21px]'>
                            <div className='h-[36px] w-[36px] bg-black flex justify-center items-center' style={{ borderRadius: "50%" }}>
                                <img src={check} />
                            </div>
                            <p className='archivo text-[20px] md-text-[28px]  ' style={{ color: 'rgba(255, 255, 255, 1)' }}>Submit directly to HMRC and receive instant confirmation.</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1  mt-[50px]'>
                    <img src={pricing} />
                </div>
            </div>
            <p className='text-[20px] archivo text-center mt-[50px] pb-[30px]' style={{ color: "rgba(183, 192, 197, 1)" }}>© 2025 TaxReady. All rights reserved.</p>
        </div>
    )
}

export default Body