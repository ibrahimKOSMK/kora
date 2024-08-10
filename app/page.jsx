import Image from "next/image";
import Header from "./_components/Header";
import { LuTrophy } from "react-icons/lu";
import { FaCirclePlay } from "react-icons/fa6";
import { IoFootballOutline } from "react-icons/io5";


export default function Home() {
  return (
    <main className="h-full w-full   bg-back ">
      {/*nav*/}
      <div className="w-full h-full flex justify-center">
      <div className="relative bg-niga flex pc:w-7/12 font-medium  pc:text-lg p-4 top-8 rounded-tl-xl rounded-bl-xl  pc:ml- pc:h-full    flex-row justify-between lap:w-8/12 md:w-9/12  lap:h-full po:ml- po:w-11/12 po:h-[60px] po:text-sm " >
<h1 className="flex justify-between gap-3  h-full po:gap-2">
<p className="bg-purple  lap:w-32 lap:text-lg md:text-[15px] text-center rounded-md  py-1  lap:py-1 top-0  cursor-pointer tap:w-24 po:w-20 po:text-[12px]"> مباريات الغد</p>
<p className="bg-purple  lap:w-32 lap:text-lg  md:text-[15px] text-center rounded-md  py-1 lap:py-1  top-0 cursor-pointer tap:w-24 po:w-20 po:text-[12px]"> مباريات الامس</p>
</h1>        
      <p className="mr-3 text-white flex py-1 lap:text-lg md:text-[15px] justify-between pc: gap-5 tap:gap-2 po:gap-1 po:text-[13px]"><p>30/3/2024</p> مباريات اليوم </p>
      <nav className="w-5 top-0 right-0  bg-purple absolute h-full"></nav>

      </div>
      </div>
      {/*match cards*/}
    <div className="flex lap:flex-row  justify-center  h-full w-full">

      <div className=" flex flex-col pc:w-7/12 justify-center rounded-lg  p-4 h-full  gap-2 bg-niga bg-opacity-45  mt-16 pc:ml- lap:w-8/12 lap:ml- po:ml- md:w-9/12  po:w-11/12">
          {/*(before) card*/}
    
      <a href={`/match`} className="w-full relative text-white font-medium pc:h-32 lap:h-28 md:h-28 bg-back rounded-lg  cursor-pointer po:h-24">
      <div className="w-full  bg-center rounded-lg  h-full bg-purple opacity-0 transition-all delay-100 ease-linear  hover:opacity-90  absolute text-white ">
        <h1 className="text-center pc:mt-14 pc:text-2xl lap:text-xl lap:mt-12 po:mt-10">لم تبدأ بعد</h1>
      </div>

        <div className="flex justify-between  w-full  pc:mt-3 lap:mt-3 md:mt-3 po:mt-2">
        {/*team 1*/}
        <div className="pc:ml- po:ml-0">
          <div className="pc:w-60 lap:w-52 md:w-44 tap:w-32 po:w-28 justify-center flex bg-">    
          <img className="pc:w-[75px] pc:h-[75px] tap:w-16 tap:h-16 po:w-[55px] po:h-[55px] " src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt=""></img>
        </div>
        <div className="pc:w-60 lap:w-52 md:w-44 justify-center flex bg- tap:w-32 po:w-28">    
       <span className="pc:text-lg pt-1 tap:text-sm po:text-[13px]">مانشستر سيتي</span>
       
        </div>
        </div>
        
        {/*center */}
    <div className="">
      <div className="pc:w-48 flex justify-center bg- tap:w-36 po:w-32">
        <span className="pc:text-3xl mt-5 tap:text-2xl po:text-xl">13 : 45</span>

      </div>
      <div className="pc:w-48 flex justify-center bg- tap:w-36 po:w-32">
      <LuTrophy  className="mt-2 pc:mr-2 text-gae po:mr-0 pc:text-base po:text-[14px] lap:mt-2.5  tap:mt-2.5 po:mt-2.5"/>
        <span className="text-sm pc:text-sm pt-2 text-gae po:text-[10px]">الدوري الانجليزي الممتاز
</span>

        
      </div>
    </div>
        {/*team 2  */}
        <div className="pc:mr- po:mr-0">
          <div className="pc:w-60 lap:w-52 md:w-44 tap:w-32 po:w-28 justify-center flex bg-">    
          <img className="pc:w-[75px] pc:h-[75px] tap:w-16 tap:h-16 po:w-[55px] po:h-[55px] " src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt=""></img>
        </div>
        <div className="pc:w-60 lap:w-52 md:w-44 justify-center flex bg- tap:w-32 po:w-28">    
       <span className="  pc:text-lg pt-1 tap:text-sm po:text-[13px]"> مانشستر يونايتد </span>
        </div>
        </div>
        </div>

      </a>

                  {/*(live now) card*/}
      <p className="w-full relative pc:h-32 bg-back text-white font-medium   rounded-lg cursor-pointer md:h-28 po:h-24">
      <div className="w-full rounded-lg flex justify-center gap-3  h-full bg-teal2 opacity-0 transition-all delay-100 ease-linear hover:opacity-90  absolute text-white ">
      <FaCirclePlay className="pc:text-3xl pc:mt-14 text-center po:mt-10 lap:text-2xl lap:mt-12"/>
        <h1 className="text-center pc:mt-14 pc:text-2xl  po:mt-9 lap:text-xl lap:mt-12">     مشاهدة مباشر </h1>
      </div>
        <div className="flex justify-between w-full pc:mt-3 lap:mt-3 po:mt-2">
       {/*team 1*/}
       <div className="pc:ml- po:ml-0">
          <div className="pc:w-60 lap:w-52 md:w-44 tap:w-32 po:w-28 justify-center flex bg-">    
          <img className="pc:w-[75px] pc:h-[75px] tap:w-16 tap:h-16 po:w-[55px] po:h-[55px] " src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt=""></img>
        </div>
        <div className="pc:w-60 lap:w-52 md:w-44 justify-center flex bg- tap:w-32 po:w-28">    
       <span className="pc:text-lg pt-1 tap:text-sm po:text-[13px]">مانشستر سيتي</span>
       
        </div>
        </div>
        
        {/*center */}
    <div className="">
      <div className="pc:w-48 flex justify-center tap:w-36 po:w-32 ">
<span className="pc:text-2xl flex bg-teal2 py-1 gap-1 px-2 rounded-md tap:text-base po:text-sm "> <IoFootballOutline className="pc:mt-2 pc:text-lg lap:mt-1 tap:text-base po:text-sm po:mt-0.5"/>
جارية الان</span>
      </div>
      <div className="pc:w-48 flex justify-center gap-3 bg- tap:w-36 po:w-32">
        <left className="pc:text-3xl pc:mt-3 po:mt-1 tap:text-2xl po:text-xl">2</left>
                <span className="pc:text-3xl pc:mt-3 po:mt-1 tap:text-2xl po:text-xl">-</span>

        <right className="pc:text-3xl pc:mt-3 po:mt-1 tap:text-2xl po:text-xl">6</right>


      </div>
      <div className="pc:w-48 flex justify-center  tap:w-36 po:w-32">
      <LuTrophy  className="mt-2 pc:mr-2 pc:text-base text-gae po:mr-0 po:text-[14px]  po:mt-0"/>
        <span className="pc:text-sm pt-2 text-gae po:text-[10px] po:pt-0">الدوري الانجليزي الممتاز
</span>

        
      </div>
    </div>
         {/*team 2  */}
         <div className="pc:mr- po:mr-0">
          <div className="pc:w-60 md:w-44 lap:w-52 tap:w-32 po:w-28 justify-center flex bg-">    
          <img className="pc:w-[75px] pc:h-[75px] tap:w-16 tap:h-16 po:w-[55px] po:h-[55px] " src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt=""></img>
        </div>
        <div className="pc:w-60 md:w-44 lap:w-52 justify-center flex bg- tap:w-32 po:w-28">    
       <span className="  pc:text-lg pt-1 tap:text-sm po:text-[13px]"> مانشستر يونايتد </span>
        </div>
        </div>
        </div>

      </p>
                  {/*(after) card*/}
      <p className=" w-full relative pc:h-32 bg-back text-white font-medium md:h-28  rounded-lg cursor-pointer po:h-24">
      <div className="w-full  rounded-lg flex justify-center gap-3  h-full bg-teal2 opacity-0 transition-all delay-100 ease-linear hover:opacity-90  absolute text-white ">
      <FaCirclePlay className="pc:text-3xl pc:mt-14 text-center po:mt-10 lap:text-2xl lap:mt-10"/>
        <h1 className="text-center pc:mt-14 pc:text-2xl  po:mt-9 lap:text-xl lap:mt-10">     مشاهدة الملخص </h1>
      </div>
        <div className="flex justify-between w-full pc:mt-3 lap:mt-3 po:mt-2">
       {/*team 1*/}
       <div className="pc:ml- po:ml-0">
          <div className="pc:w-60 lap:w-52 md:w-44 tap:w-32 po:w-28 justify-center flex bg-">    
          <img className="pc:w-[75px] pc:h-[75px] tap:w-16 tap:h-16 po:w-[55px] po:h-[55px] " src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt=""></img>
        </div>
        <div className="pc:w-60 lap:w-52 md:w-44 justify-center flex bg- tap:w-32 po:w-28">    
       <span className="pc:text-lg pt-1 tap:text-sm po:text-[13px]">مانشستر سيتي</span>
       
        </div>
        </div>
        
        {/*center */}
    <div className="">
    <div className="pc:w-48 flex justify-center gap-3 bg- tap:w-36 po:w-32">
        <left className="pc:text-3xl mt-5 tap:text-2xl po:text-xl">2</left>
                <span className="pc:text-3xl mt-5 tap:text-2xl po:text-xl">-</span>

        <right className="pc:text-3xl mt-5 tap:text-2xl po:text-xl">6</right>


      </div>
      <div className="pc:w-48 flex justify-center  tap:w-36 po:w-32">
      <LuTrophy  className="mt-2 pc:mr-2 pc:text-base text-gae po:mr-0 po:text-[14px] po:mt-2"/>
        <span className="pc:text-sm pt-2 text-gae po:text-[10px] po:pt-2">الدوري الانجليزي الممتاز
</span>

        
      </div>
    </div>
         {/*team 2  */}
         <div className="pc:mr- po:mr-0">
          <div className="pc:w-60 lap:w-52 md:w-44 tap:w-32 po:w-28 justify-center flex bg-">    
          <img className="pc:w-[75px] pc:h-[75px] tap:w-16 tap:h-16 po:w-[55px] po:h-[55px] " src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt=""></img>
        </div>
        <div className="pc:w-60 lap:w-52 md:w-44 justify-center flex bg- tap:w-32 po:w-28">    
       <span className="  pc:text-lg pt-1 tap:text-sm po:text-[13px]"> مانشستر يونايتد </span>
        </div>
        </div>
        </div>

      </p>      
      </div>

    </div>
      
    {/*description*/}
    <div className="border-2 relative mb-10 border-niga mt-12 border-opacity-20 pc:w-9/12 h-full bg-niga bg-opacity-45   rounded-lg pc:ml-[245px] flex flex-col po:ml-4 po:w-11/12"> 
      <p className="w-full bg-niga bg-opacity-50 h- border-b-2 text-right  text-white text-xl border-teal p-2 border-opacity-15"> <span className=" mr-4">اسم الموقع هنا</span></p>
      <p className="w-full h-full text-gae  text-base  text-right  p-3"><span className="p-2 ">النقل المباشر المجاني وبدون تقطيع لكل الأحداث الرياضية، دوري أبطال أوروبا، الدوري الإنجليزي، الدوري الإسباني، الدوري الإيطالي و غيرها من الدوريات و البطولات الكبرى عالميا، بالاضافة لنقل أقوى مباريات الدوريات العربية، كما تنقل لكم بي---,, ماتش BeinMatch الفرق الكبيرة ك برشلونة، ريال مدريد، ليفربول، مانشستر سيتي، مانشستر يونايتد، تشيلسي،, بايرن ميونخ، جيفونتيس، أسي ميلان، إنتر ميلان، أجاكس أمستردام وغيرها من الفرق العالمية الكبرى، بالإضافة لنقل مباريات بشكل مباشر للفرق العربية القوية,,,,,,,,,الأهلي المصريال,داد ,,,,,,,البيضا, ي المغربي، الرجاء البيضاوي المغربي، الترجي التونسي، نجم الساحل التونسي، الهلال السعودي، النصر السعودي، العين الإماراتي وغيرها في كل البطولات القارية الافريقية و الأسيوية، كما تنقل لكم بين ماتش BeinMatch ل بطولات المنتخبات,,,, كأس العالم 2022 بقطر,, كأس أوروبا لأمم 2020، كوب, أمريكا 2021، والتصفيات المؤهلة لهذه البطولات بتعليق عربي و بمختلف الجودات من الضعيفة الى العالية الجودة بتعليق عربي ودون أي انقطاعات و بشكل مجاني بشكل كامل و لا ننسى أننا - بين ماتش BeinMatch نتوفر على أهداف و ملخصات لكل المباريات التي ننقلها عبر موقعنا ,,,,,,,,بشكل سريع وفور انتهاء المباريات بجودة عالية وفي سيرفرات خاصة لنضمن لكم بقاءها و توفرها متى شئتم العودة إليها.</span></p>
    </div>


    </main>
  );
}
