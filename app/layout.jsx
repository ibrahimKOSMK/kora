import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Zheader from "./_components/Zheader"
import localFont from "next/font/local"
const myFont = localFont ({src : "./Fonts/Bahij_TheSansArabic-ExtraBold.ttf"})
const nFont = localFont ({src : "./Fonts/Changa-VariableFont_wght.ttf"})



// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sportawy Live",
  description: "موقع سبورتاوي لايف لنقل جميع المباريات مجانا بجودة عالية دون تقطيع",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nFont.className}>
<div className="bg-back">
        <Zheader/>
        {children}
        <Footer/>
</div>
        </body>
    </html>
  );
}
