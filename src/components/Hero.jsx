import { Link } from "react-router-dom";
import a from "../assets/a.svg";
import b from "../assets/b.svg";
import c from "../assets/c.svg";


import vid1 from '../assets/vid1.mp4'

import sec from "../assets/tt.jpg";
import Abenmant from "./Abenmant";
import Tips from "./Tips";
import Contact from "./Contact";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
<section className="hero min-h-screen flex items-center justify-start px-8 md:px-16 lg:px-32 xl:px-44 w-full">
  <div className="max-w-3xl">
    <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-[7rem] font-bold">
      ELEVATE YOUR <br />
      <span className="primary">FITNESS</span> GAME <br />
    </h1>
    <span className="text-lg md:text-xl lg:text-2xl font-medium">
      I provide customized personal training
    </span>
    <div className="pt-7">
      <Link className="px-8 md:px-12 py-3 md:py-4 font-medium text-lg md:text-xl bg-[#d5fb00] hover:bg-[#d0ea3f] hover:scale-110 transition-all text-black">
        GET STARTED
      </Link>
    </div>
  </div>
</section>

<div className="marquee">
  <div className="track bg-[#d5fb00]">
    <div className="content text-xl md:text-2xl lg:text-3xl xl:text-4xl py-3 text-black">
      &nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum
      ducimus, molestiae architecto laudantium autem quaerat cum. Quibusdam ea
      ipsam sunt eius eligendi? In omnis incidunt, doloremque repellat magnam
      maxime!
    </div>
  </div>
</div>

      {/* <section className="min-h-screen text-white">
        <div className="grid grid-cols-4 px-40 py-10">
          <div className="border flex flex-col items-center justify-center py-8 hover:bg-[#d5fb00] hover:text-black transition-all ">
            <h1 className="text-7xl font-bold">+10</h1>
            <h1 className=" text-lg">Year of Experience</h1>
          </div>
          <div className="border flex flex-col items-center justify-center py-8 hover:bg-[#d5fb00] hover:text-black transition-all ">
            <h1 className="text-7xl font-bold">+500</h1>
            <h1 className=" text-lg">Happy Clients</h1>
          </div>
          <div className="border flex flex-col items-center justify-center py-8 hover:bg-[#d5fb00] hover:text-black transition-all ">
            <h1 className="text-7xl font-bold">+50</h1>
            <h1 className=" text-lg">Expert Trainers</h1>
          </div>
          <div className="border flex flex-col items-center justify-center py-8 hover:bg-[#d5fb00] hover:text-black transition-all ">
            <h1 className="text-7xl font-bold">23k</h1>
            <h1 className=" text-lg">Instagram Followers</h1>
          </div>
        </div>
      </section> */}

      <section className="min-h-screen flex items-center justify-center">
        <main className="px-4 md:px-8 lg:px-16 xl:px-20">
          <h1 className="text-center text-3xl md:text-4xl mb-3 primary font-medium uppercase e">
            Services
          </h1>
          <h1 className="text-center text-base md:text-xl font-medium mb-10">
            THINGS I CAN HELP YOU WITH, AND THEN SOME
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div className=" bg-gray-800 py-10 px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center">
              <img src={a} alt="" />
              <h1 className="text-lg md:text-2xl uppercase font-medium mb-2 text-center">
                Workout plans
              </h1>
              <h1 className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                quia impedit et corporis voluptate veritatis, iusto error porro
                minus, quo ea eligendi fugit animi! Officiis nam dolores sunt
                nisi ipsam?
              </h1>
            </div>
            <div className=" bg-gray-800 py-10 px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center">
              <img src={b} alt="" />
              <h1 className="text-lg md:text-2xl uppercase font-medium mb-2 text-center">
                1-ON-1 CLASSES
              </h1>
              <h1 className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                quia impedit et corporis voluptate veritatis, iusto error porro
                minus, quo ea eligendi fugit animi! Officiis nam dolores sunt
                nisi ipsam?
              </h1>
            </div>
            <div className=" bg-gray-800 py-10 px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center">
              <img src={c} alt="" />
              <h1 className="text-lg md:text-2xl uppercase font-medium mb-2 text-center">
                YOGA & STRETCHING
              </h1>
              <h1 className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                quia impedit et corporis voluptate veritatis, iusto error porro
                minus, quo ea eligendi fugit animi! Officiis nam dolores sunt
                nisi ipsam?
              </h1>
            </div>
          </div>

          <div className="pt-10 flex items-center justify-center">
      <Link className="px-8 py-3 font-medium text-lg md:text-xl bg-[#d5fb00] hover:bg-[#d0ea3f] hover:scale-110 transition-all text-black">
        See All Services
      </Link>
    </div>
        </main>
      </section>
      <section className="min-h-screen flex items-center justify-center py-8 md:py-14">
  <main className="px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col md:flex-row gap-6 md:gap-10">
    <div className="w-full md:w-7/12">
      <img src={sec} alt="" className="w-full" />
    </div>
    <div className="w-full md:w-5/12">
      <h1 className="uppercase primary text-4xl md:text-5xl font-medium mb-5">
        Why us
      </h1>
      <h2 className="text-lg md:text-2xl mb-5">
        YOUR ONE STOP TO ALL TRAINING AND STRETCHING NEEDS
      </h2>
      <p className="text-base md:text-lg mb-10">
        In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        Praesent congue erat at massa. Vivamus aliquet elit.
      </p>

      <ul className="text-base md:text-lg">
        <li className="flex items-center gap-2 mb-2">
          <img
            src="https://assets-global.website-files.com/65a07b4f359421145381ea34/65a4922c3dc6f80f3615d7b3_group.svg"
            alt=""
            className="w-6 h-6"
          />{" "}
          <span>Trusted by hundreds</span>
        </li>
        <li className="flex items-center gap-2 mb-2">
          <img
            src="https://assets-global.website-files.com/65a07b4f359421145381ea34/65a4922b73ed251a9464f369_shield-check.svg"
            alt=""
            className="w-6 h-6"
          />{" "}
          <span>Certificate awarded</span>
        </li>
        <li className="flex items-center gap-2 mb-2">
          <img
            src="https://assets-global.website-files.com/65a07b4f359421145381ea34/65a4922c9f6d3c6f7eb155b6_download.svg"
            alt=""
            className="w-6 h-6"
          />{" "}
          <span>PDFs for your training</span>
        </li>
        <li className="flex items-center gap-2 mb-2">
          <img
            src="https://assets-global.website-files.com/65a07b4f359421145381ea34/65a4922c508d4d48e9fd30bc_check-circle.svg"
            alt=""
            className="w-6 h-6"
          />{" "}
          <span>Proven track record</span>
        </li>
      </ul>

      <div className="pt-5 flex items-center">
        <Link className="px-8 py-3 font-medium text-base md:text-xl bg-[#d5fb00] hover:bg-[#d0ea3f] hover:scale-110 transition-all text-black">
          About us
        </Link>
      </div>
    </div>
  </main>
</section>

<section className="h-screen flex items-center justify-center relative">
  <video src={vid1} className="absolute inset-0 object-cover w-full h-full" muted autoPlay loop />
  <div className="relative z-10 text-center">
    <h1 className="text-3xl md:text-4xl lg:text-7xl font-extrabold uppercase w-7/12 mx-auto ">GET IN SHAPE WITH Thom</h1>
    <div className="pt-5 flex items-center justify-center">
      <Link className="px-8 py-3 md:px-14 md:py-4 font-medium text-lg md:text-xl bg-[#d5fb00] hover:bg-[#d0ea3f] hover:scale-110 transition-all text-black">
        See more
      </Link>
    </div>
  </div>
</section>


<Abenmant />
<Tips />
<Contact />
<Footer />

    </>
  );
};

export default Hero;
