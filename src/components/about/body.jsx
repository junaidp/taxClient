import React from 'react'
import arrow from "../../assets/about-arrow.svg"
import computer from "../../assets/home/computer.svg";
import phone from "../../assets/phone.svg";
import { useNavigate } from 'react-router-dom'

const Body = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-gradient-to-t from-[#0073AF] to-[#003049] pl-[30px] md:pl-[84px] pt-[40px] md:pt-[100px] pb-[50px]'>
            <h1 className='archivo font-bold text-[30px] md:text-[60px] text-[#FFFFFF] mb-[34px]'>Made by Accountants with <br /> simplicity in mind. </h1>
            <div className='flex  flex flex-col lg:flex-row'>
                <div className='flex flex-col gap-[34px]' style={{ flex: '1' }}>
                    <button className='h-[46px] w-[196px] bg-[#40B7B0] rounded-[4px] flex flex-row justify-center items-center gap-[5px]'>
                        <p className='archivo text-[20px] text-[#FFFFFF]' onClick={() => navigate("/start")}>Start for free</p>
                        <div className='h-[29px] w-[29px] flex justify-center'>
                            <img src={arrow} />
                        </div>
                    </button>
                    <p className='jaldi text-[20px]  md:text-[32px]   text-[#FFFFFF]'>Filing your Self-Assessment tax return shouldn’t be complicated, time-consuming, or stressful. That’s why we created TaxReady.uk—a fast, easy, and accurate way to submit your taxes directly to HMRC with confidence.</p>
                    <p className='jaldi text-[20px] md:text-[32px]   text-[#FFFFFF]'>We believe that tax filing should be simple and accessible for everyone. Our goal is to remove the guesswork and frustration from the Self-Assessment process, ensuring that individuals, freelancers, and small business owners can file their taxes quickly and accurately without hassle.</p>
                    <div className='flex flex-col gap-[10px]'>
                        <p className='font-semibold text-[20px] md:text-[32px]  text-[#FFFFFF]'>Why Choose Us?</p>
                        <ul className="list-disc pl-5">
                            <li className="jaldi text-[20px] md:text-[32px]  text-[#FFFFFF]">
                                Speed & Simplicity – Our intuitive platform guides you step-by-step, making tax filing effortless.
                            </li>
                            <li className="jaldi text-[20px] md:text-[32px]  text-[#FFFFFF]">
                                Accuracy & Compliance – Our system ensures that your return is error-free and fully compliant with HMRC regulations.
                            </li>
                            <li className="jaldi text-[20px] md:text-[32px]  text-[#FFFFFF]">
                                Secure & Reliable – Your data is encrypted and protected with top-tier security standards.
                            </li>
                            <li className="jaldi text-[20px] md:text-[32px]  text-[#FFFFFF]">
                                Built for Individuals & Freelancers – Whether you’re self-employed, a landlord, or earning additional income, we cater to your unique tax needs.
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <p className='font-semibold text-[20px] md:text-[32px]  text-[#FFFFFF]'>How It Works</p>
                        <ol className="list-decimal  pl-5">
                            <li className="jaldi text-[20px] md:text-[32px]  text-[#FFFFFF]">
                                Answer Simple Questions – We guide you through your tax return with easy-to-understand prompts and instructions.                        </li>
                            <li className="jaldi text-[20px] md:text-[32px]  text-[#FFFFFF]">
                                Let Our Software Do the Work – We calculate everything automatically, minimizing errors and maximizing efficiency.                        </li>
                            <li className="jaldi text-[20px] md:text-[32px]  text-[#FFFFFF]">
                                Submit Directly to HMRC – With a single click, your Self-Assessment is securely sent to HMRC.</li>
                        </ol>
                    </div>
                    <p className='jaldi text-[20px] md:text-[32px]   text-[#FFFFFF]'>We are dedicated to making tax filing as stress-free as possible. With expert-backed accuracy, real-time error checking, and an intuitive user experience, we make filing your taxes simple and stress free.</p>
                </div>
                <div style={{ flex: '1' }} className='relative'>
                    <img src={computer} />
                    <img src={phone} className='absolute top-[62px] h-[300px] left-[150px] hidden md:block' />
                </div>

            </div>
            {/*  */}
            <p className='text-[20px] archivo text-center mt-[50px]' style={{ color: "rgba(255, 255, 255, 0.83)" }}>© 2025 TaxReady. All rights reserved.</p>
        </div>
    )
}

export default Body