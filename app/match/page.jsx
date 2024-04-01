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
    <div className='h-full bg-second'>
      <h1 className='relative text-white text-xl top-12 ml-[900px]'>00/00/0000 مباراة مانشستر سيتي ضد مانشستر يونايتد مباشر</h1>
      {/*image*/}
      <div className='relative  mt-20 ml-[600px]  h-60   w-[850px]  rounded-2xl bg-cover bg-center '
      style={{backgroundImage: `url(https://i.pinimg.com/originals/a0/fa/59/a0fa59adfcae3328019c3c45c05794c4.jpg)` }}  >
        <div className='flex justify-between mx-20 top-20 relative'>
        <img className='w-28 h-28 ' src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt="" />
<span className='text-white text-[60px]'> VS </span>     
  <img className='w-28 h-28 ' src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt="" />
</div>

      
        
      
      </div>
      {/*quality*/}
      <p className='flex gap-3 justify-center relative ml-[550px] mt-16'>
        <button className='bg-teal bg-opacity-65 py-1 px-2 rounded-md text-lg text-niga  '>
            جودة عالية
        </button>
        <button className='bg-teal bg-opacity-65 py-1 px-2 rounded-md text-lg text-niga  '>
            جودة متوسطة
        </button>
        <button className='bg-teal bg-opacity-65 py-1 px-2 rounded-md text-lg text-niga  '>
            جودة ضعيفة
        </button>
      </p>
      {/*video*/}
      <div className='relative bg-niga bg-opacity-30 h-[400px] ml-[600px] rounded-2xl mt-6  w-[850px]'> video here</div>
      <div className=' h-[200px] ml-[600px] mt-3 w-[850px] p-2 mb-24 rounded-2xl bg- '>
      <button className='bg-teal1 p-2 rounded-lg text-white w-full mb-3 bg-opacity-80 flex justify-center gap-2'> <IoReloadCircle className='mt-0.5 text-xl' /> تحديث الصفحة</button>

        <h1 className='text-white text-right text-xl'>تفاصيل المباراة</h1>
        <list className="grid grid-cols-2 gap-2 p-2  h-full w-full ">
          
          <p className='w-full flex justify-end bg-teal1 bg-opacity-80 rounded-md gap-2 text-right '>
            <span className='relative top-3 text-gae'> 31-03-2024</span>
            <span className='text-white mr-2 top-3 relative flex gap-1'> :  تاريخ المباراة  <BsCalendarDateFill className='mt-0.5' /></span>
          </p>
          <p className='w-full flex justify-end bg-teal1 bg-opacity-80 rounded-md gap-2 text-right '>
            <span className='relative top-3 text-gae'> الدوري الانجليزي الممتاز</span>
            <span className='text-white mr-2 top-3 relative flex gap-1'> :  البطولة       <LuTrophy  className="mt-1"/></span>
          </p>
          <p className='w-full flex justify-end bg-teal1 bg-opacity-80 rounded-md gap-2 text-right '>
            <span className='relative top-3 text-gae'> 00:00 بتوقيت القاهرة </span>
            <span className='text-white mr-2 top-3 relative flex gap-1'> :  موعد المباراة  <FaClock className='mt-1' /></span>
          </p>
          <p className='w-full flex justify-end bg-teal1 bg-opacity-80 rounded-md gap-2 text-right '>
            <span className='relative top-3 text-gae'> عصام السروالي</span>
            <span className='text-white mr-2 top-3 relative flex gap-1'> :  معلق المباراة  <FaHeadset className='mt-1' /></span>
          </p>
          <p className='w-full flex justify-end bg-teal1 bg-opacity-80 rounded-md gap-2 text-right '>
            <span className='relative top-3 text-gae'> الكتيبة الخضراء</span>
            <span className='text-white mr-2 top-3 relative flex gap-1'> :  الملعب  <MdStadium className='mt-0.5'/></span>
          </p>
          <p className='w-full flex justify-end bg-teal1 bg-opacity-80 rounded-md gap-2 text-right '>
            <span className='relative top-3 text-gae'> bein Sports 3 HD</span>
            <span className='text-white mr-2 top-3 relative flex gap-1'> :  القناة الناقلة  <GrChannel /></span>
          </p>




        </list>
      </div>
      {/*today match*/}
      <div className=" absolute mb-10 w-full top-0">
      <div className=" text-white flex flex-col text-center w-3/12 absolute mt-32 gap-3 ml-[52px] ">
        <p className="pb-2 text-xl"> مباريات اليوم</p>
      </div>
      <div className="flex flex-col w-3/12 rounded-lg h- p-4  gap-2 bg-niga bg-opacity-45 absolute mt-44 ml-[50px]">


      <p className=" relative  h- bg-gae  cursor-pointer rounded-lg">
      <div className="w-full  rounded-lg flex justify-center gap-3  h-full bg-teal2 opacity-0 hover:opacity-90  absolute text-white ">
      <FaCirclePlay className="text-3xl mt-9 "/>
        <h1 className="text-center  mt-9 text-xl">     مشاهدة الملخص </h1>
      </div>
        <div className="flex justify-between w-full mt-2 mb-2">
        {/*team 1*/}
        <div className="ml-">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20 " src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt=""></img>
        </div>

        </div>
        
        {/*center */}
    <div className="">
      <div className="w-24 flex justify-center gap-2 bg-">
        <left className="text-2xl mt-6">2</left>
                <span className="text-2xl mt-6">-</span>

        <right className="text-2xl mt-6">6</right>


      </div>

    </div>
        {/*team 2  */}
        <div className="mr-2">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20  " src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt=""></img>
        </div>
  
        </div>
        </div>

      </p>
      <p className="  h- bg-gae   rounded-lg">
        <div className="flex justify-between w-full mt-2 mb-2">
        {/*team 1*/}
        <div className="ml-">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20 " src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt=""></img>
        </div>

        </div>
        
        {/*center */}
    <div className="">
      <div className="w-24 flex justify-center gap-2 bg-">
        <left className="text-2xl mt-6">2</left>
                <span className="text-2xl mt-6">-</span>

        <right className="text-2xl mt-6">6</right>


      </div>

    </div>
        {/*team 2  */}
        <div className="mr-2">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20  " src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt=""></img>
        </div>
  
        </div>
        </div>

      </p>
      <p className="  h- bg-gae   rounded-lg">
        <div className="flex justify-between w-full mt-2 mb-2">
        {/*team 1*/}
        <div className="ml-">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20 " src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt=""></img>
        </div>

        </div>
        
        {/*center */}
    <div className="">
      <div className="w-24 flex justify-center gap-2 bg-">
        <left className="text-2xl mt-6">2</left>
                <span className="text-2xl mt-6">-</span>

        <right className="text-2xl mt-6">6</right>


      </div>

    </div>
        {/*team 2  */}
        <div className="mr-2">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20  " src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt=""></img>
        </div>
  
        </div>
        </div>

      </p>
      <p className="  h- bg-gae   rounded-lg">
        <div className="flex justify-between w-full mt-2 mb-2">
        {/*team 1*/}
        <div className="ml-">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20 " src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt=""></img>
        </div>

        </div>
        
        {/*center */}
    <div className="">
      <div className="w-24 flex justify-center gap-2 bg-">
        <left className="text-2xl mt-6">2</left>
                <span className="text-2xl mt-6">-</span>

        <right className="text-2xl mt-6">6</right>


      </div>

    </div>
        {/*team 2  */}
        <div className="mr-2">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20  " src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt=""></img>
        </div>
  
        </div>
        </div>

      </p>
     
      <p className="  h- bg-gae   rounded-lg">
        <div className="flex justify-between w-full mt-2 mb-2">
        {/*team 1*/}
        <div className="ml-">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20 " src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt=""></img>
        </div>

        </div>
        
        {/*center */}
    <div className="">
      <div className="w-24 flex justify-center gap-2 bg-">
        <left className="text-2xl mt-6">2</left>
                <span className="text-2xl mt-6">-</span>

        <right className="text-2xl mt-6">6</right>


      </div>

    </div>
        {/*team 2  */}
        <div className="mr-2">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20  " src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt=""></img>
        </div>
  
        </div>
        </div>

      </p>
      <p className="  h- bg-gae   rounded-lg">
        <div className="flex justify-between w-full mt-2 mb-2">
        {/*team 1*/}
        <div className="ml-">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20 " src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt=""></img>
        </div>

        </div>
        
        {/*center */}
    <div className="">
      <div className="w-24 flex justify-center gap-2 bg-">
        <left className="text-2xl mt-6">2</left>
                <span className="text-2xl mt-6">-</span>

        <right className="text-2xl mt-6">6</right>


      </div>

    </div>
        {/*team 2  */}
        <div className="mr-2">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20  " src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt=""></img>
        </div>
  
        </div>
        </div>

      </p>
      <p className="  h- bg-gae   rounded-lg">
        <div className="flex justify-between w-full mt-2 mb-2">
        {/*team 1*/}
        <div className="ml-">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20 " src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt=""></img>
        </div>

        </div>
        
        {/*center */}
    <div className="">
      <div className="w-24 flex justify-center gap-2 bg-">
        <left className="text-2xl mt-6">2</left>
                <span className="text-2xl mt-6">-</span>

        <right className="text-2xl mt-6">6</right>


      </div>

    </div>
        {/*team 2  */}
        <div className="mr-2">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20  " src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt=""></img>
        </div>
  
        </div>
        </div>

      </p>
      <p className="  h- bg-gae   rounded-lg">
        <div className="flex justify-between w-full mt-2 mb-2">
        {/*team 1*/}
        <div className="ml-">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20 " src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt=""></img>
        </div>

        </div>
        
        {/*center */}
    <div className="">
      <div className="w-24 flex justify-center gap-2 bg-">
        <left className="text-2xl mt-6">2</left>
                <span className="text-2xl mt-6">-</span>

        <right className="text-2xl mt-6">6</right>


      </div>

    </div>
        {/*team 2  */}
        <div className="mr-2">
          <div className="w-32 justify-center flex bg-">    
          <img className="w-20 h-20  " src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt=""></img>
        </div>
  
        </div>
        </div>

      </p>
      
      
    

      </div>
    </div>
      {/*description*/}
      <div className="border-2 relative mb-10 border-niga border-opacity-20 w-9/12 h-full bg-niga bg-opacity-45  rounded-lg ml-[290px] flex flex-col "> 
      <p className="w-full bg-niga bg-opacity-50 h- border-b-2 text-right  text-white text-xl border-teal p-2 border-opacity-15"> <span className=" mr-4">اسم الموقع هنا</span></p>
      <p className="w-full h-full text-gae  text-md text-right  p-3"><span className="p-2 ">النقل المباشر المجاني وبدون تقطيع لكل الأحداث الرياضية، دوري أبطال أوروبا، الدوري الإنجليزي، الدوري الإسباني، الدوري الإيطالي و غيرها من الدوريات و البطولات الكبرى عالميا، بالاضافة لنقل أقوى مباريات الدوريات العربية، كما تنقل لكم بي---,, ماتش BeinMatch الفرق الكبيرة ك برشلونة، ريال مدريد، ليفربول، مانشستر سيتي، مانشستر يونايتد، تشيلسي،, بايرن ميونخ، جيفونتيس، أسي ميلان، إنتر ميلان، أجاكس أمستردام وغيرها من الفرق العالمية الكبرى، بالإضافة لنقل مباريات بشكل مباشر للفرق العربية القوية,,,,,,,,,الأهلي المصريال,داد ,,,,,,,البيضا, ي المغربي، الرجاء البيضاوي المغربي، الترجي التونسي، نجم الساحل التونسي، الهلال السعودي، النصر السعودي، العين الإماراتي وغيرها في كل البطولات القارية الافريقية و الأسيوية، كما تنقل لكم بين ماتش BeinMatch ل بطولات المنتخبات,,,, كأس العالم 2022 بقطر,, كأس أوروبا لأمم 2020، كوب, أمريكا 2021، والتصفيات المؤهلة لهذه البطولات بتعليق عربي و بمختلف الجودات من الضعيفة الى العالية الجودة بتعليق عربي ودون أي انقطاعات و بشكل مجاني بشكل كامل و لا ننسى أننا - بين ماتش BeinMatch نتوفر على أهداف و ملخصات لكل المباريات التي ننقلها عبر موقعنا ,,,,,,,,بشكل سريع وفور انتهاء المباريات بجودة عالية وفي سيرفرات خاصة لنضمن لكم بقاءها و توفرها متى شئتم العودة إليها.</span></p>
    </div>
        
    </div>
  )
}

export default page
