"use client";
import React, { useState } from "react";
import Image from "next/image";
import decoy from "@/app/assets/woman.png";

const the_team = {
  "Robert Ferguson": {
    description: "Leads with a vision for change, leveraging 38 years in tourism.",
    position: "President & Director",
    img: decoy,
  },
  "Beverly Scott": {
    description: "Guides legal strategy with 36 years as a paralegal.",
    position: "Vice President & Legal Analyst",
    img: decoy,
  },
  "Orlene Scott-Dixon": {
    description: "Drives financial and insurance expertise as a business owner.",
    position: "Secretary",
    img: decoy,
  },
  "Roosie Rutherford Smith": {
    description: "Champions community outreach and charity initiatives.",
    position: "Director",
    img: decoy,
  },
};

const TeamSection = () => {
  const teamMembers = Object.entries(the_team).map(([name, data]) => ({
    name,
    ...data,
  }));

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 3 >= teamMembers.length ? 0 : prevIndex + 3
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 3 < 0 ? Math.floor(teamMembers.length / 3) * 3 : prevIndex - 3
    );
  };

  const displayedMembers = teamMembers.slice(startIndex, startIndex + 3);

  return (
    <section className="team-section bg-gray-900 py-12" id="ourteam">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-center text-[45px] font-bold mb-8">
          Our Leadership Team
        </h1>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600 italic">{member.position}</p>
                <p className="text-gray-700 mt-2">{member.description}</p>
              </div>
            ))}
          </div>
          {teamMembers.length > 3 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 focus:outline-none"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 focus:outline-none"
              >
                →
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;