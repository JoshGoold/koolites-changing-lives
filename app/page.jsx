"use client";
import { useState } from "react";
import Image from "next/image";
import banner from "./assets/koolites_banner.jpg";
import check from "./assets/check.png";
import TeamSection from "@/components/TeamSection";
import e1 from "./assets/events/completed-event-1.jpg";
import e2 from "./assets/events/completed-event-2.jpg";

export default function Home() {
  const [eventState, setEventState] = useState("Upcoming");
  const [upcoming, setUpcoming] = useState([]);
  const [completed, setCompleted] = useState([e1, e2]);

  return (
    <>
      <section className="banner-section lg:h-[100vh] h-[1000px] relative">
        <Image
          src={banner}
          className="banner-img lg:h-[100vh] h-[1000px] object-cover w-full"
          alt="Koolites Changing Lives banner"
        />
        <div className="container absolute inset-0 flex items-center justify-center">
          <div className="flex lg:flex-row flex-col justify-between items-center lg:mt-[100px] mt-[350px]">
            <div className="text-white lg:w-full w-[95%] z-[200]">
              <h1 className="text-[45px] py-5 lg:text-left text-center font-bold">
                Koolites Changing Lives International
              </h1>
              <ul className="text-[20px] flex flex-col lg:items-start items-center gap-3">
                <li className="flex gap-2 items-center">
                  <Image src={check} alt="check" width={30} height={30} />
                  <span>Transforming Lives in Jamaica</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src={check} alt="check" width={30} height={30} />
                  <span>Non-Profit Organization</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src={check} alt="check" width={30} height={30} />
                  <span>Passionate Music Lovers</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src={check} alt="check" width={30} height={30} />
                  <span>Founded and Based in Jamaica</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src={check} alt="check" width={30} height={30} />
                  Supporting Early Childhood Institutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section py-12" id="aboutus">
        <div className="container mx-auto px-4">
          <h1 className="text-[45px] text-blue-500 text-center py-5 font-bold">
            Who We Are
          </h1>
          <div className="text-neutral-800 flex flex-col gap-6 lg:w-full lg:text-left text-center">
            <p>
              Established in September 2014, <b>Koolites Changing Lives
              International</b> is a non-profit charity group united by a shared love
              of music and a passion for philanthropy. Formed through connections
              made on the social platforms of KOOL 97FM radio, our 22-member team,
              both local and overseas, is dedicated to transforming lives, one
              charitable event at a time.
            </p>
            <p>
              Our mission is to support the development of Early Childhood
              Institutions (ECIs) across Jamaica. We focus on providing essential
              resources, increasing awareness of the needs of these schools, and
              securing financial support through sponsorships and fundraising. From
              supplying books and computers to executing beautification projects,
              we are committed to laying a foundation for the future of Jamaica’s
              children.
            </p>
            <p>
              With a structure of 14 core members and a total of 22 volunteers, we
              combine diverse expertise to drive impactful change. Our initiatives
              include infrastructure improvements, provision of school supplies,
              and community outreach, all aimed at breaking the cycle of poverty
              and fostering hope in Jamaican communities.
            </p>
            <p>
              Join us in our journey to empower Jamaica’s youth and build stronger,
              self-sufficient communities. Together, we can change lives, one act
              of kindness at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-section py-12 bg-gray-100" id="projects">
        <div className="container mx-auto px-4">
          <h1 className="text-[45px] text-blue-500 text-center py-5 font-bold">
            Our Footprints and Projects
          </h1>
          <div className="text-neutral-800 flex flex-col gap-6">
            <p className="text-center">
              Koolites Changing Lives International has made a significant impact
              on Early Childhood Institutions across Jamaica through dedicated
              fundraising and community support. Below are some of our key
              projects:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  Trinitarian Early Childhood Institution
                </h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Roof Repairs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  Port Royal Early Childhood Institution
                </h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>COVID-19 Response Assistance Packages for Students and Staff</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  Braeton Early Childhood Institution
                </h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Deep Freeze for the Canteen</li>
                  <li>Chair for the Principal’s Office</li>
                  <li>Painting of the School Building</li>
                  <li>COVID-19 Response Assistance Packages</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  Waltham Early Childhood Institution
                </h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Perimeter Fencing Project</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  Cradles to Crayons
                </h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>COVID-19 Response Assistance Packages</li>
                  <li>School Sign</li>
                  <li>Refrigerator</li>
                  <li>Stove</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  Marverley Mountain Basic School
                </h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>School Sign</li>
                  <li>Back-to-School Supplies</li>
                  <li>Computers</li>
                  <li>Television</li>
                  <li>Microwave</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  Angle of Fame Early Childhood Institution
                </h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Fans</li>
                  <li>Refrigerator</li>
                  <li>Stove</li>
                  <li>Repairs to Infrastructure</li>
                  <li>Electrical Works and Installation</li>
                  <li>Sanitary Facilities Repairs</li>
                  <li>Chairs and Desks</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  Doris Easy Early Childhood Institution
                </h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Refurbishing of Seven Sanitary Facilities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  Faith United Early Childhood Institution
                </h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Fan</li>
                  <li>Computer</li>
                  <li>Back-to-School Supplies</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  Waterford Development Faith Basic School
                </h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Major Roof Repairs</li>
                  <li>Upcoming: Water Tank, Shelving, Awnings</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  2025 Project: Waugh Hill Early Childhood Institution
                </h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Planned Support for Infrastructure and Resources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="events-section py-12" id="events">
        <div className="container mx-auto px-4">
          <h1 className="text-[45px] text-blue-500 text-center py-5 font-bold">
            Events
          </h1>
          <div className="flex w-full">
            <button
              onClick={() => setEventState("Upcoming")}
              disabled={eventState === "Upcoming"}
              className={`flex-1 border ${
                eventState === "Upcoming"
                  ? "text-white bg-blue-500"
                  : "text-blue-500"
              } hover:shadow-md hover:scale-105 duration-300 py-3`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setEventState("Completed")}
              disabled={eventState === "Completed"}
              className={`flex-1 border ${
                eventState === "Completed"
                  ? "text-white bg-blue-500"
                  : "text-blue-500"
              } hover:shadow-md hover:scale-105 duration-300 py-3`}
            >
              Completed
            </button>
          </div>
          <div>
            {eventState === "Upcoming" && (
              <div>
                {upcoming.length === 0 ? (
                  <p className="text-[20px] text-neutral-800 text-center py-5">
                    No Events Are Upcoming at this Time.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-5 py-5">
                    {upcoming.map((item, index) => (
                      <div key={index}>
                        <Image
                          alt={`upcoming event ${index}`}
                          src={item}
                          height={300}
                          width={300}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            {eventState === "Completed" && (
              <div>
                {completed.length === 0 ? (
                  <p className="text-[20px] text-neutral-800 text-center py-5">
                    No Events Have Been Completed Yet.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-5 py-5">
                    {completed.map((item, index) => (
                      <div key={index}>
                        <Image
                          alt={`completed event ${index}`}
                          src={item}
                          height={300}
                          width={300}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}