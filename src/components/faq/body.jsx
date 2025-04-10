import React from 'react'
import plus from "../../assets/plus-icon.svg"
import minus from "../../assets/minus-icon.svg"
import search from "../../assets/search.svg";
import { useNavigate } from 'react-router-dom'
import { faqsArray } from "../../config/constants"

const Body = () => {
    const navigate = useNavigate()
    const [questions, setQuestions] = React.useState(faqsArray || [])

    function handleClick(id) {
        setQuestions((pre) => pre?.map((item) => item?.id === id ? { ...item, selected: !item?.selected } : { ...item, selected: false }))
    }
    return (
        <div>
            <div className='pt-[40px] md:pt-[130px] px-[20px] md:px-[90px]'>
                <h1 className='text-[30px] md:text-[60px] font-bold text-[#003049]'>Frequently asked questions</h1>
                <p className='archivo text-[20px] md:text-[28px] leading-[43px]' style={{ color: 'rgba(6, 38, 62, 0.64)' }}>Search for for any questions you have or contact us directly.</p>
                <div className='flex flex-col md:flex-row gap-[10px] justify-between items-start md:items-center'>

                    <div className='h-[70px] w-[70%] relative mt-[9px]'>
                        <img src={search} className='absolute top-[20px] left-[6px]' />
                        <input placeholder='Search' className='archivo text-[24px] h-[100%] w-[100%] pl-[40px] rounded-[8px] border border-[1px] border-[#C4C4C4]' />
                    </div>
                    <button className='h-[58px] bg-[#003049] px-[56px] rounded-[2px] py-[10px] archivo text-[24px] text-[#FFFFFF]' onClick={() => navigate("/contact")}>Contact Us</button>
                </div>
            </div>
            <div className='pt-[51px] px-[33px] mt-[66px]' style={{ background: "rgba(217, 217, 217, 0.75)" }}>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-[27px] auto-rows-auto place-items-start'>
    {questions?.map((item, ind) => (
      <div
        key={ind}
        className={`transition-all duration-500 ease-in-out bg-white rounded-[8px] border border-[#C4C4C4] px-[26px] py-[20px] w-full`}
      >
        <div className='flex justify-between items-center'>
          <p className='archivo text-[18px] leading-[33px] font-bold' style={{ color: !item?.selected ? "rgba(6, 38, 62, 0.64)" : "rgba(6, 38, 62, 0.9)" }}>
            {item?.question}
          </p>
          <img
            src={item?.selected ? minus : plus}
            className='cursor-pointer'
            onClick={() => handleClick(item?.id)}
          />
        </div>

        <div
          className='transition-all duration-500 ease-in-out overflow-hidden'
          style={{
            maxHeight: item?.selected ? "500px" : "0px",
            marginTop: item?.selected ? "23px" : "0px",
          }}
        >
          <p
            className='archivo leading-[30px] text-[24px]'
            style={{ color: "rgba(6, 38, 62, 0.53)", opacity: item?.selected ? 1 : 0 }}
          >
            {item?.answer}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
    )
}

export default Body