import React from "react";
import { Link } from "react-router-dom";
import coreteam from "../images/core-team.jpg";
import HomeCrousel from "../components/HomeCrousel";
import FadeInComponent from "../components/FadInComponent";
const Home = () => {
  return (
    <section className="relative h-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pb-12 md:pt-2 md:pb-2">
          <div className="text-center pb-12 md:pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="text-center pb-12 md:pb-16">
                  <h1
                    className="text-5xl md:text-8xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate text-blue-900"
                    data-aos="zoom-y-out"
                  >
                    IETE STUDENTS' FORUM
                    <span className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-800">
                      <br />
                      DDU
                    </span>
                  </h1>
                  <div className="max-w-3xl mx-auto">
                    <p
                      className="text-xl text-gray-600 mb-8 aos-init aos-animate"
                      data-aos="zoom-y-out"
                      data-aos-delay="150"
                    >
                      Powered by Innovation
                    </p>
                    <div className="p-10 max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center aos-init aos-animate">
                      <div>
                        <Link
                          to={"/team"}
                          className="p-5 rounded-xl text-white bg-gray-900 hover:border-[2px] hover:border-solid border-gray-400 hover:bg-transparent hover:text-gray-900 w-full mb-4 sm:w-auto sm:mb-0 transition-all delay-75"
                        >
                          Meet Our Team
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FadeInComponent delay={300}>
              <div className="max-w-4xl mx-auto lg:flex lg:gap-4 p-3">
                <div className="h-48 lg:h-auto lg:w-[50%] flex-none flex items-center justify-center bg-cover">
                  <img
                    src={coreteam}
                    className="h-full lg:w-[100%] sm:w-[50%] rounded-md "
                    alt="core-team"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between leading-normal lg:w-[60%]">
                  <div className="mb-8 lg:flex lg:flex-col lg:gap-5 lg:justify-center lg:items-center">
                    <h1 className="text-3xl lg:text-5xl text-blue-900 font-bold">
                      Who we are ?
                    </h1>
                    <p className="text-gray-600 text-xl mt-4">
                      The IETE (Institution of Electronics and Telecommunication
                      Engineers) Students' Forum at DDU (Dharmsinh Desai
                      University) is a student-led club dedicated to fostering
                      knowledge and innovation in the fields of technology.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInComponent>

            <FadeInComponent delay={300}>
              <div className="max-w-4xl mx-auto mt-32">
                <h1 className="text-3xl lg:text-5xl text-blue-900 font-bold">
                  What We Do ?
                </h1>
                <h3 className="my-4 lg:my-10 text-xl text-gray-600">
                  We organize seminars, workshops, and events to promote
                  technical learning and collaboration among students interested
                  in the technological domain.
                </h3>
              </div>
            </FadeInComponent>

            <FadeInComponent delay={300}>
              <HomeCrousel />
            </FadeInComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
