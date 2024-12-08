import React from 'react'
import Image from 'next/image'
import locationLogo from "../../../public/images/location-logo.png"
import copyWriteTextImage from "../../../public/images/copy-write-image.png"
import twitorLogo from "../../../public/images/twitor-logo.png"
import facebookLogo from "../../../public/images/facebook-logo.png"
import youtubeLogo from "../../../public/images/youtube-logo.png"
import instagramLogo from "../../../public/images/instagram-logo.png"

export const Footer = () => {
  return (
    <>
    <div className='footerCon  w-screen h-[400px] bg-[#111111] '>
      
      <div className='footerLeftDiv    flex gap-x-7 items-center'>
        <div className='div-1  w-[246px] h-[200px] bg-re-400 mt-[50px] text-white'>
          <p>FIND A STORE</p>
          <p>BECOME A MEMBER</p>
          <p>SIGN UU FOR EMAIL</p>
          <p>Send Us Feedback</p>
          <p>STUDENTS DISCOUNT</p>
        </div>
        <div className='div-2  w-[246px] h-[200px] bg-re-400 mt-[50px] ml-[70px] '>
          <p className='text-white'>GET HEPL</p>
          <p className='text-[#7E7E7E]'>Order Status</p>
          <p className='text-[#7E7E7E]'>Delivery</p>
          <p className='text-[#7E7E7E]'>Returns</p>
          <p className='text-[#7E7E7E]'>Payment Option</p>
          <p className='text-[#7E7E7E]'>Contact Us On Nike.com Inquires</p>
          <p className='text-[#7E7E7E]'>Contact Us On All Other Inquires</p>
        </div>
        <div className='div-3  w-[246px] h-[200px] bg-re-400 mt-[50px] ml-[140px]'>
          <p className='text-white'>ABOUT NIKE</p>
          <p className='text-[#7E7E7E]'>News</p>
          <p className='text-[#7E7E7E]'>Careers</p>
          <p className='text-[#7E7E7E]'>Investors</p>
          <p className='text-[#7E7E7E]'>Sustainability</p>
        </div>

      </div>
      <div className='footerRightDiv '>
        <div className='footerImageDiv w-[370px] h-[40px] bg-slat-200 relative left-[999px]  bottom-[200px] flex gap-6 '>
         
         <Image src={twitorLogo} width={40} height={40} alt='twitor logo'></Image>
         <Image src={facebookLogo} width={30} height={30} alt='facebook logo'></Image>
         <Image src={youtubeLogo} width={30} height={30} alt='youtube logo'></Image>
         <Image src={instagramLogo} width={30} height={30} alt='instagram logo'></Image>
      


        </div>
        
      </div>
     
     
     
     <div className='bottomDiv  w-full h-[62px] bg-slat-600 mt-[60px] flex justify-between'>
      <div className='bottomDivLeft flex gap-x-4 bg-re-700 w-[300px] h-[20px] '>
        <Image src={locationLogo} width={18} height={5} alt='location logo' className='bg-slat-500'></Image>
        <p className='text-white bg-slat-900'>India</p>
        
        <Image src={copyWriteTextImage} width={300} height={13} alt='copy write text image'></Image>
      
      </div>
      <div className='bottomDivRight flex gap-5 bg-re-700'>
        <p className='text-[#7E7E7E]'>Guides</p>
        <p className='text-[#7E7E7E]'>Terms of Sale</p>
        <p className='text-[#7E7E7E]'>Terms of uses</p>
        <p className='text-[#7E7E7E]'>Nike Privacy Notice</p>

      </div>
     </div>

    </div>
    
    </>
  )
}
export default Footer