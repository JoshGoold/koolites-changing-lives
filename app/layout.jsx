
import "./globals.css";
import Image from "next/image";

import logo from "./assets/koolites_logo.jpg"

export const metadata = {
  title: "Koolites Changing Lives",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <section className="sticky top-0 lg:h-[150px] h-[90px] z-[1000]  bg-white shadow-lg shadow-neutral-800 flex justify-center items-center">
          <div className="container ">
            <div className="flex justify-between items-center ">
              <div className="">
                <Image alt="oolites logo" src={logo} className="lg:h-[150px] lg:w-[200px] h-[70px] w-[100px]"/>
              </div>
              <div className="">
                <ul className="flex gap-5 text-blue-500 head-ul lg:text-[20px] text-[12px] lg:mr-0 mr-5">
                  <li><a href="#aboutus">About Us</a></li>
                  <li><a href="#ourteam">Our Team</a></li>
                  <li><a href="#events">Events</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {children}
        <footer id="contact" className="bg-blue-500 flex  justify-center items-center py-[60px]">
          <div className="container">
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 items-center justify-between ">
              <div className="">
                <Image alt="koolites logo" src={logo} height={100} width={150}/>
              </div>
              
              
              <div className=" flex-1 py-5 px-3 rounded-md lg:mt-0 lg:w-[950px] w-[90%] mt-5">
              <h1 className="text-white text-[45px] text-center py-5 px-3">
                Contact Us
              </h1>
              <form className="head-form text-[20px] flex flex-col gap-1 ml-auto mr-auto">
                <input type="text" placeholder="Enter your Name" />
                <input type="text" placeholder="Enter your Organization" />
                <input type="tel" placeholder="Enter your Phone Number" />
                <input type="email" placeholder="Enter your Email" />
                <textarea placeholder="Enter your message"></textarea>
                <button className="mt-5 bg-white text-blue-500 py-3" type="submit">Send Message</button>
              </form>
            
              </div>
              <div className="">
                <ul className="flex flex-col gap-4">
                  <li><u>Useful Links</u></li>
                  <li><a href="#aboutus">About Us</a></li>
                  <li><a href="#ourteam">Our Team</a></li>
                  <li><a href="#events">Events</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
