import Image from "next/image";
import Header from "./_components/Header";
import { LuTrophy } from "react-icons/lu";
import { FaCirclePlay } from "react-icons/fa6";
import { IoFootballOutline } from "react-icons/io5";


export default function Home() {
  return (
    <main className="h-full  w-full relative bg-second">
      {/*nav*/}
      <div className="relative flex w-7/12   text-lg p-4 top-16 rounded-tl-xl rounded-bl-xl  ml-[500px]   bg-gae flex-row justify-between " >
<h1 className="flex justify-between gap-3  h-full ">
<p className="bg-teal w-32 text-center rounded-md py-1  top-0  cursor-pointer"> مباريات الغد</p>
<p className="bg-teal w-32 text-center rounded-md py-1  top-0 cursor-pointer"> مباريات الامس</p>
</h1>        
      <p className="mr-3 flex py-1 justify-between gap-5"><p>30/3/2024</p> مباريات اليوم </p>
      <nav className="w-5 top-0 right-0  bg-teal absolute h-full"></nav>

      </div>
      {/*match cards*/}
      <div className="flex flex-col w-7/12 rounded-lg mb-12 p-4  gap-2 bg-niga bg-opacity-45 relative mt-24  ml-[500px]">
                  {/*(before) card*/}
    
      <a href={`/match`} className="w-full relative  h-36 bg-gae rounded-lg  cursor-pointer ">
      <div className="w-full  bg-center rounded-lg  h-full bg-teal2 opacity-0 hover:opacity-90  absolute text-white ">
        <h1 className="text-center mt-16 text-2xl">لم تبدأ بعد</h1>
      </div>

        <div className="flex justify-between w-full mt-4 ">
        {/*team 1*/}
        <div className="ml-10">
          <div className="w-60 justify-center flex bg-">    
          <img className="w-20 h-20 " src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt=""></img>
        </div>
        <div className="w-60 justify-center flex bg-">    
       <span className="  text-lg pt-1">مانشستر سيتي</span>
       
        </div>
        </div>
        
        {/*center */}
    <div className="">
      <div className="w-48 flex justify-center bg-">
        <span className="text-3xl mt-8">13 : 45</span>

      </div>
      <div className="w-48 flex justify-center bg-">
      <LuTrophy  className="mt-2 mr-2 text-second"/>
        <span className="text-sm pt-2 text-second">الدوري الانجليزي الممتاز
</span>

        
      </div>
    </div>
        {/*team 2  */}
        <div className="mr-10">
          <div className="w-60 justify-center flex bg-">    
          <img className="w-20 h-20  " src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt=""></img>
        </div>
        <div className="w-60 justify-center flex bg-">    
       <span className="  text-lg pt-1"> مانشستر يونايتد </span>
        </div>
        </div>
        </div>

      </a>
      
                  {/*(live now) card*/}
      <p className="w-full relative h-36 bg-gae   rounded-lg cursor-pointer">
      <div className="w-full rounded-lg flex justify-center gap-3  h-full bg-teal2 opacity-0 hover:opacity-90  absolute text-white ">
      <FaCirclePlay className="text-3xl mt-16 text-center"/>
        <h1 className="text-center  mt-16 text-2xl">     مشاهدة مباشر </h1>
      </div>
        <div className="flex justify-between w-full mt-4">
        {/*team 1*/}
        <div className="ml-10 ">
          <div className="w-60 justify-center flex bg-">    
          <img className="w-20 h-20 " src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt=""></img>
        </div>
        <div className="w-60 justify-center flex bg-">    
       <span className="  text-lg pt-1">مانشستر سيتي</span>
       
        </div>
        </div>
        
        {/*center */}
    <div className="">
      <div className="w-48 flex justify-center ">
<span className="text-2xl flex bg-teal py-1 gap-1 px-2 rounded-md "> <IoFootballOutline className="mt-2 text-lg"/>
جارية الان</span>
      </div>
      <div className="w-48 flex justify-center gap-3 bg-">
        <left className="text-3xl mt-3">2</left>
                <span className="text-3xl mt-3">-</span>

        <right className="text-3xl mt-3">6</right>


      </div>
      <div className="w-48 flex justify-center bg-">
      <LuTrophy  className="mt-2 mr-2 text-second"/>
        <span className="text-sm pt-2 text-second">الدوري الانجليزي الممتاز
</span>

        
      </div>
    </div>
        {/*team 2  */}
        <div className="mr-10">
          <div className="w-60 justify-center flex bg-">    
          <img className="w-20 h-20  " src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt=""></img>
        </div>
        <div className="w-60 justify-center flex bg-">    
       <span className="  text-lg pt-1"> مانشستر يونايتد </span>
        </div>
        </div>
        </div>

      </p>
                  {/*(after) card*/}
      <p className=" w-full relative h-36 bg-gae   rounded-lg">
      <div className="w-full  rounded-lg flex justify-center gap-3  h-full bg-teal2 opacity-0 hover:opacity-90  absolute text-white ">
      <FaCirclePlay className="text-3xl mt-16 text-center"/>
        <h1 className="text-center  mt-16 text-2xl">     مشاهدة الملخص </h1>
      </div>
        <div className="flex justify-between w-full mt-4">
        {/*team 1*/}
        <div className="ml-10">
          <div className="w-60 justify-center flex bg-">    
          <img className="w-20 h-20 " src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" alt=""></img>
        </div>
        <div className="w-60 justify-center flex bg-">    
       <span className="  text-lg pt-1">مانشستر سيتي</span>
       
        </div>
        </div>
        
        {/*center */}
    <div className="">
      <div className="w-48 flex justify-center gap-3 bg-">
        <left className="text-3xl mt-8">2</left>
                <span className="text-3xl mt-8">-</span>

        <right className="text-3xl mt-8">6</right>


      </div>
      <div className="w-48 flex justify-center bg-">
      <LuTrophy  className="mt-2 mr-2 text-second"/>
        <span className="text-sm pt-2 text-second">الدوري الانجليزي الممتاز
</span>

        
      </div>
    </div>
        {/*team 2  */}
        <div className="mr-10">
          <div className="w-60 justify-center flex bg-">    
          <img className="w-20 h-20  " src="https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png" alt=""></img>
        </div>
        <div className="w-60 justify-center flex bg-">    
       <span className="  text-lg pt-1"> مانشستر يونايتد </span>
        </div>
        </div>
        </div>

      </p>
      

      </div>
      {/*most watched cards*/}
    <div className="absolute w-full top-0">
      <div className=" text-white flex flex-col text-center w-3/12 absolute mt-28 gap-3 ml-[52px] ">
        <p className="pb-2 text-xl"> الأكثر مشاهدة مؤخرا  ( ملخصات )</p>
        <hr class="h-px mt- w-full  bg-teal1  border-0 dark:bg-gray-700"/>
      </div>
      <div className="flex flex-col w-3/12 rounded-lg h- p-4  gap-2 bg-niga bg-opacity-45 absolute mt-48 ml-[50px]">


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
      
      
    

      </div>
    </div>
    {/*description*/}
    <div className="border-2 relative mb-10 border-niga border-opacity-20 w-9/12 h-full bg-niga bg-opacity-45  rounded-lg ml-[245px] flex flex-col "> 
      <p className="w-full bg-niga bg-opacity-50 h- border-b-2 text-right  text-white text-xl border-teal p-2 border-opacity-15"> <span className=" mr-4">اسم الموقع هنا</span></p>
      <p className="w-full h-full text-gae  text-md text-right  p-3"><span className="p-2 ">النقل المباشر المجاني وبدون تقطيع لكل الأحداث الرياضية، دوري أبطال أوروبا، الدوري الإنجليزي، الدوري الإسباني، الدوري الإيطالي و غيرها من الدوريات و البطولات الكبرى عالميا، بالاضافة لنقل أقوى مباريات الدوريات العربية، كما تنقل لكم بي---,, ماتش BeinMatch الفرق الكبيرة ك برشلونة، ريال مدريد، ليفربول، مانشستر سيتي، مانشستر يونايتد، تشيلسي،, بايرن ميونخ، جيفونتيس، أسي ميلان، إنتر ميلان، أجاكس أمستردام وغيرها من الفرق العالمية الكبرى، بالإضافة لنقل مباريات بشكل مباشر للفرق العربية القوية,,,,,,,,,الأهلي المصريال,داد ,,,,,,,البيضا, ي المغربي، الرجاء البيضاوي المغربي، الترجي التونسي، نجم الساحل التونسي، الهلال السعودي، النصر السعودي، العين الإماراتي وغيرها في كل البطولات القارية الافريقية و الأسيوية، كما تنقل لكم بين ماتش BeinMatch ل بطولات المنتخبات,,,, كأس العالم 2022 بقطر,, كأس أوروبا لأمم 2020، كوب, أمريكا 2021، والتصفيات المؤهلة لهذه البطولات بتعليق عربي و بمختلف الجودات من الضعيفة الى العالية الجودة بتعليق عربي ودون أي انقطاعات و بشكل مجاني بشكل كامل و لا ننسى أننا - بين ماتش BeinMatch نتوفر على أهداف و ملخصات لكل المباريات التي ننقلها عبر موقعنا ,,,,,,,,بشكل سريع وفور انتهاء المباريات بجودة عالية وفي سيرفرات خاصة لنضمن لكم بقاءها و توفرها متى شئتم العودة إليها.</span></p>
    </div>


    </main>
  );
}
