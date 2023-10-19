/*
 * Author: Kevin Tamakuwala (Github: @kevintamakuwala)
 * Date: October 19th, 2003
 * Feature: About Page
 * Issue No: 14
 */

import React from "react";
import coreTeam1 from "./../images/core-team.jpg";

import coreTeam2 from "./../images/iete-core-team-2.jpg";
import TeamCard from "../components/TeamCard";
import FadeInComponent from "../components/FadInComponent";
const About = () => {
  return (
    <>
      <div className="w-full grid px-10 about__container">
        <div className="about pt-28  w-full h-auto bg-white">
          <div className="about-right w-1/2 inline-block">
            <img className="w-full" src={coreTeam1} alt="core-team"/>
          </div>
          <div className="about-left p-2 0 float-left w-1/2 inline-block">
            <h2
              style={{
                fontSize: "3rem",
              }}
              className="flex items-center font-extrabold justify-center tracking-wider md:text-8xl  mb-4 aos-init aos-animate text-blue-900"
              data-aos="zoom-y-out"
            >
              About Us
            </h2>
            <hr className="w-20 mx-auto border-t-2 border-black border-b-0" />
            <p
              style={{
                fontSize: "1rem",
                margin: "40px auto",
                width: "80%",
              }}
            >
              The Institution of Electronics and Telecommunication Engineers
              (IETE) is India's leading recognised professional society devoted
              to advancment of science and technology of Electronics,
              Telecommunication & IT, Founded in 1953.
            </p>
            <p
              style={{
                fontSize: "1rem",
                margin: "40px auto",
                width: "80%",
              }}
            >
              The Institution of Electronics and Telecommunication Engineers
              (IETE) is India's leading recognised professional society devoted
              to the advancement of Science and Technology of Electronics,
              Telecommunication & IT. Founded in 1953. The IETE is the National
              Apex Professional body of Electronics and Telecommunication,
              Computer Science and IT Professionals. It serves more than
              1,25,000 members (including Corporate, Student and ISF members)
              through various 64 Centres, spread all over India and abroad.
            </p>
          </div>

          <div className="clear" />
        </div>

        <FadeInComponent delay={300}>
          <div className="mission pt-20 w-full h-auto bg-white">
            <div className="mission-left w-1/2 inline-block">
              <img src={coreTeam2} className="w-full" alt="core-team"/>
            </div>
            <div className="mission-right p-2 0 float-right w-1/2 inline-block">
              <h2
                style={{ fontSize: "3rem" }}
                className="text-10 flex items-center font-extrabold justify-center tracking-wider md:text-8xl  mb-4 aos-init aos-animate text-blue-900"
                data-aos="zoom-y-out"
              >
                Our Objective
              </h2>
              <hr className="w-28 mx-auto border-t-2 border-black border-b-0" />
              <p
                style={{
                  fontSize: "1rem",
                  margin: "40px auto",
                  width: "80%",
                }}
              >
                The IETE focuses on advancement of the Science and Technology of
                Electronics, Telecommunication, Computers, Information
                Technology and related areas. The Institution is known for
                providing leadership oppurtunities in Scientific and Technical
                areas of direct importance to the national development and
                economy.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  margin: "40px auto",
                  width: "80%",
                }}
              >
                The IETE conducts and sponsors technical meetings, conferences,
                symposia, and exhibitions all over India, publishes technical
                journals and provides continuing education as well as career
                advancement opportunities to its members.
              </p>
            </div>
            <div className="clear-both" />
          </div>
        </FadeInComponent>

        
        <FadeInComponent delay={300}>
          <TeamCard />
        </FadeInComponent>
      </div>
    </>
  );
};
export default About;
