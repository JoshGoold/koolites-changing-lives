"use client"
import { useState } from "react";
import Image from "next/image";

import banner from "./assets/koolites_banner.jpg";
import check from "./assets/check.png";
import TeamSection from "@/components/TeamSection";

import e1 from "./assets/events/completed-event-1.jpg"
import e2 from "./assets/events/completed-event-2.jpg"

export default function Home() {

  const [eventState, setEventState] = useState("Upcoming")

  const [upcoming, setUpcoming] = useState([])

  const [completed, setCompleted] = useState([e1,e2])

  return (
    <>
      <section className="banner-section lg:h-[100vh] h-[1000px]" id="contact">
        <Image src={banner} className=" banner-img lg:h-[100vh] h-[1000px] object-cover" alt="banner image" />
        <div className="container abs-center">
          <div className="flex lg:flex-row flex-col justify-between items-center lg:mt-[70px] mt-[350px] ">
            <div className="text-white lg:w-full w-[95%]">
              <h1 className="text-[45px] py-5 lg:text-left text-center">Koolites Changing Lives</h1>
              <ul className="text-[20px] flex flex-col lg:items-start items-center gap-3">
                <li className="flex gap-2 items-center">
                  <Image src={check} alt="check" width={30} height={30} />{" "}
                  <span className="text-[20px]">Koolites Change Lives</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src={check} alt="check" width={30} height={30} />{" "}
                  <span className="text-[20px]">Non-Profit Organization</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src={check} alt="check" width={30} height={30} />{" "}
                  <span className="text-[20px]">Passionate Music Lovers</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src={check} alt="check" width={30} height={30} />{" "}
                  <span className="text-[20px]">
                    Founded and Based in Jamaica
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src={check} alt="check" width={30} height={30} />{" "}
                  <span className="text-[20px]">
                    Proudly Fund and Support Childhood Institutions
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white py-5 px-3 rounded-md lg:mt-0 lg:w-[550px] w-[90%] mt-5">
              <h1 className="text-blue-500 text-[45px] text-center py-5 px-3">
                Contact Us
              </h1>
              <form className="head-form text-[20px] flex flex-col gap-1 ml-auto mr-auto">
                <input type="text" placeholder="Enter your Name" />
                <input type="text" placeholder="Enter your Organization" />
                <input type="tel" placeholder="Enter your Phone Number" />
                <input type="email" placeholder="Enter your Email" />
                <textarea placeholder="Enter your message"></textarea>
                <button className="mt-5 bg-blue-500 text-white py-3" type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="aboutus">
        <div style={{ margin: "0 auto" }} className="container">
          <div className="">
            <h1 className="text-[45px] text-blue-500 text-center py-5">About Us</h1>
            <div className="text-neutral-800 flex flex-col gap-6 lg:w-full w-[95%] lg:text-left text-center mr-auto ml-auto">
            <p>
              At Koolites Changing Lives, we are driven by a passion to uplift
              and empower the vibrant communities of Jamaica. Founded in [insert
              fictional founding year, e.g., 2015], our nonprofit organization
              is dedicated to transforming lives through sustainable initiatives
              that address poverty, education, and health disparities. Inspired
              by the resilience and spirit of the Jamaican people, we strive to
              create lasting change by providing essential resources, fostering
              opportunities, and building stronger, self-sufficient communities.
            </p>
            <p>
              Our mission is to break the cycle of poverty and ignite hope
              across Jamaica by focusing on three core pillars: Education,
              Community Empowerment, and Health and Wellness. We provide school
              supplies, scholarships, and vocational training to empower youth,
              distribute food and hygiene items to families in need, and partner
              with local health providers to improve access to medical care.
              From rural villages to urban centers, our programs are designed to
              meet the unique needs of each community we serve.
            </p>
            <p>
              Koolites Changing Lives is more than a charity—it’s a movement of
              compassion and action. We collaborate with local leaders,
              volunteers, and international donors to deliver impactful
              projects, such as building classrooms, supporting small farmers,
              and providing disaster relief. Every donation, whether it’s school
              supplies, clothing, or a heartfelt contribution of time, helps us
              leave a lasting fingerprint on the lives we touch.
            </p>
            <p>
              Join us in our journey to create a brighter future for Jamaica,
              where every individual has the opportunity to thrive. Together, we
              can change lives, one act of kindness at a time.
            </p>
            </div>
          </div>
        </div>
      </section>

      <TeamSection/>

      
      <section className="events-section" id="events">
          <div style={{ margin: "0 auto" }} className="container">
              <div className="">
                <h1 className="text-[45px] text-blue-500 text-center py-5">Events</h1>
                <div className="flex w-full">
                  <button onClick={()=> setEventState("Upcoming")} disabled={eventState === "Upcoming"} className={`flex-1 border ${eventState === "Upcoming" ? "text-white bg-blue-500 " : "text-blue-500"} hover:shadow-md hover:scale-105 duration-300  py-3`}>Upcoming</button>
                  <button onClick={()=> setEventState("Completed")} disabled={eventState === "Completed"} className={`flex-1 border ${eventState === "Completed" ? "text-white bg-blue-500 " : "text-blue-500"}  hover:shadow-md hover:scale-105 duration-300 0 py-3`}>Completed</button>
                </div>
                <div className="">
                  {eventState === "Upcoming" && (
                    <div className="">
                        {upcoming.length === 0 ? (
                          <p className="text-[20px] text-neutral-800 text-center py-5">No Events Are Upcoming at this Time.</p>
                        ): (
                          <div className="">
                            {upcoming.map((item,index)=> (
                              <div className="" key={index}>
                                {item}
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  )}
                  {eventState === "Completed" && (
                    <div className="">
                        {completed.length === 0 ? (
                          <p className="text-[20px] text-neutral-800 text-center py-5">No Events Have been Completed yet..</p>
                        ): (
                          <div className="flex flex-wrap gap-5 py-5">
                            {completed.map((item,index)=> (
                              <div className="" key={index}>
                                <Image alt={`event image ${index}`} src={item} height={300} width={300} className="object-contain"/>
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  )}
                </div>
              </div>
          </div>
      </section>
    </>
  );
}
