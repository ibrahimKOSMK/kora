import React from 'react'
import { LuTrophy } from "react-icons/lu";
import { FaHeadset } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import { GrChannel } from "react-icons/gr";
import { MdStadium } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import { IoReloadCircle } from "react-icons/io5";

function page() {
  return (
    <div className='h-full bg-back flex flex-col justify-center items-center  '>
      <h1 className='relative text-white lap:text-xl tap:text-base po:text-sm top-12 ml-'>00/00/0000 مباراة مانشستر سيتي ضد مانشستر يونايتد مباشر</h1>
      {/*image*/}
  <div className='relative  mt-20 ml-  lap:h-60   lap:w-7/12 tap:h-44 po:h-32 tap:w-11/12 po:w-11/12 rounded-2xl bg-cover bg-center '
      style={{backgroundImage: `url(https://i.pinimg.com/originals/a0/fa/59/a0fa59adfcae3328019c3c45c05794c4.jpg)` }}  >
    <div className='flex justify-between lap:mx-20 lap:top-20 tap:mx-10 tap:top-12 po:top-8 po:mx-6 relative'>
        <img className='tap:w-28 tap:h-28 po:w-20 po:h-20' src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt="" />
        <span className='text-white tap:text-[60px] po:text-[30px] po:mt-4'> VS </span>     
        <img className='tap:w-28 tap:h-28 po:w-20 po:h-20' src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt="" />
    </div>
  </div>
      {/*quality*/}
      <div className='lap:w-6/12 tap:w-11/12 po:w-11/12'>
      <p className='flex gap-8 justify-center  w-full ml- mt-16'>
        <button className='bg-purple bg-opacity-65 py-1 px-2 rounded-md lap:text-lg po:text-[14px] text-back  '>
            جودة عالية
        </button>
        <button className='bg-purple bg-opacity-65 py-1 px-2 rounded-md lap:text-lg po:text-[14px] text-back  '>
            جودة متوسطة
        </button>
        <button className='bg-purple bg-opacity-65 py-1 px-2 rounded-md lap:text-lg po:text-[14px]   text-back  '>
            جودة ضعيفة
        </button>
      </p>
      </div>

          {/*video*/}
          <div className='lap:w-7/12 po:w-11/12 flex flex-col items-center'>
      <div className='relative bg-niga bg-opacity-30 tap:h-[400px] po:h-[300px] text-center text-white text-2xl  ml- rounded-2xl mt-6 w-full'> لم تبدأ المبارة بعد</div>
      <div className=' h-[200px] ml- mt-3 w-full p-2 mb-24 rounded-2xl bg- '>
      <a href='' className='bg-teal1 lap:p-2 tap:p-1.5 po:p-1 rounded-lg text-white w-full mb-3 bg-opacity-80 flex justify-center gap-2 lap:text-base po:text-[14px] '> <IoReloadCircle className='mt-0.5 text-xl po:text-base' /> تحديث الصفحة</a>

        <h1 className='text-white text-right lap:text-xl tap:text-lg'>تفاصيل المباراة</h1>
        <list className="grid grid-cols-2 gap-2 tap:p-2  po:h-auto tap:h-full w-full ">
          
          <p className='w-full po:h-10 tap:h-auto flex justify-end bg-teal2 bg-opacity-80 rounded-md tap:gap-2 po:gap-1 text-right '>
            <span className='relative top-3  text-gae lap:text-base tap:text-sm po:text-[12px]'> 31-03-2024</span>
            <span className='text-white tap:mr-2 po:mr-1 top-3 relative flex gap-1 lap:text-base tap:text-sm po:text-[12px]'> :  تاريخ المباراة  <BsCalendarDateFill className='mt-0.5' /></span>
          </p>
          <p className='w-full po:h-10 tap:h-auto flex justify-end bg-teal2 bg-opacity-80 rounded-md gap-2 text-right '>
            <span className='relative top-3  text-gae lap:text-base tap:text-xs po:text-[8px]'> الدوري الانجليزي الممتاز</span>
            <span className='text-white tap:mr-2 po:mr-1 top-3  relative flex gap-1 lap:text-base tap:text-sm po:text-[11px]'> :  البطولة       <LuTrophy  className="lap:mt-1 tap:mt-0.5"/></span>
          </p>
          <p className='w-full po:h-10 tap:h-auto flex justify-end bg-teal2 bg-opacity-80 rounded-md tap:gap-2 po:gap-0 text-right '>
            <span className='relative top-3 text-gae lap:text-base tap:text-sm po:text-[11px]'> 00:00  القاهرة </span>
            <span className='text-white tap:mr-2 po:mr-1 top-3 relative flex gap-1 lap:text-base tap:text-sm po:text-[11px]'> :  موعد المباراة  <FaClock className='mt-1' /></span>
          </p>
          <p className='w-full po:h-10 tap:h-auto flex justify-end bg-teal2 bg-opacity-80 rounded-md tap:gap-2 po:gap-1 text-right '>
            <span className='relative top-3 text-gae lap:text-base tap:text-sm po:text-[10px]'> عصام السروالي</span>
            <span className='text-white tap:mr-2 po:mr-1 top-3 relative flex gap-1 lap:text-base tap:text-sm po:text-[10px]'> :  معلق المباراة  <FaHeadset className='mt-1' /></span>
          </p>
          <p className='w-full po:h-10 tap:h-auto flex justify-end bg-teal2 bg-opacity-80 rounded-md gap-2 text-right '>
            <span className='relative top-3 text-gae lap:text-base tap:text-sm po:text-[13px]'> الكتيبة الخضراء</span>
            <span className='text-white tap:mr-2 po:mr-1 top-3 relative flex gap-1 lap:text-base tap:text-sm po:text-[13px]'> :  الملعب  <MdStadium className='mt-0.5'/></span>
          </p>
          <p className='w-full po:h-10 tap:h-auto flex justify-end bg-teal2 bg-opacity-80 rounded-md gap-2 text-right '>
            <span className='relative top-3 text-gae lap:text-base tap:text-sm po:text-[10px]'> bein Sports 3 HD</span>
            <span className='text-white tap:mr-2 po:mr-1 top-3 relative flex gap-1 lap:text-base tap:text-sm po:text-[10px]'> :  القناة الناقلة  <GrChannel /></span>
          </p>




        </list>
      </div>
          

  </div>  
      {/*description*/}
      <div className="border-2 relative mb-10 border-niga mt-12 border-opacity-20 pc:w-9/12 h-full bg-niga bg-opacity-45   rounded-lg pc:ml- flex flex-col po:ml-4 po:w-11/12"> 
      <p className="w-full bg-niga bg-opacity-50 h- border-b-2 text-right  text-white text-xl border-teal p-2 border-opacity-15"> <span className=" mr-4">اسم الموقع هنا</span></p>
      <p className="w-full h-full text-gae  text-base  text-right  p-3"><span className="p-2 ">النقل المباشر المجاني وبدون تقطيع لكل الأحداث الرياضية، دوري أبطال أوروبا، الدوري الإنجليزي، الدوري الإسباني، الدوري الإيطالي و غيرها من الدوريات و البطولات الكبرى عالميا، بالاضافة لنقل أقوى مباريات الدوريات العربية، كما تنقل لكم بي---,, ماتش BeinMatch الفرق الكبيرة ك برشلونة، ريال مدريد، ليفربول، مانشستر سيتي، مانشستر يونايتد، تشيلسي،, بايرن ميونخ، جيفونتيس، أسي ميلان، إنتر ميلان، أجاكس أمستردام وغيرها من الفرق العالمية الكبرى، بالإضافة لنقل مباريات بشكل مباشر للفرق العربية القوية,,,,,,,,,الأهلي المصريال,داد ,,,,,,,البيضا, ي المغربي، الرجاء البيضاوي المغربي، الترجي التونسي، نجم الساحل التونسي، الهلال السعودي، النصر السعودي، العين الإماراتي وغيرها في كل البطولات القارية الافريقية و الأسيوية، كما تنقل لكم بين ماتش BeinMatch ل بطولات المنتخبات,,,, كأس العالم 2022 بقطر,, كأس أوروبا لأمم 2020، كوب, أمريكا 2021، والتصفيات المؤهلة لهذه البطولات بتعليق عربي و بمختلف الجودات من الضعيفة الى العالية الجودة بتعليق عربي ودون أي انقطاعات و بشكل مجاني بشكل كامل و لا ننسى أننا - بين ماتش BeinMatch نتوفر على أهداف و ملخصات لكل المباريات التي ننقلها عبر موقعنا ,,,,,,,,بشكل سريع وفور انتهاء المباريات بجودة عالية وفي سيرفرات خاصة لنضمن لكم بقاءها و توفرها متى شئتم العودة إليها.</span></p>
    </div>
        
    </div>
  )
}

export default page
