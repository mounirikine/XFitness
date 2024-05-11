import a from "../assets/tab1.webp";
import b from "../assets/tab2.webp";
import c from "../assets/tap3.webp";

import sec from "../assets/ser.jpg";

import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import { Link } from "react-router-dom";

const Tips = () => {
  return (
    <>
<section className="min-h-screen px-8 sm:px-16 lg:px-32 py-10">
  <main className="max-w-6xl mx-auto">
    <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-medium">
      Stay Informed, Stay Healthy
    </h1>
    <h2 className="text-4xl md:text-5xl lg:text-6xl text-center py-4">
      The Best Tips for Healthy People
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 py-10">
      <div className="max-w-sm mx-auto">
        <img src={a} alt="" className="w-full h-[350px] rounded-t-lg" />
        <h3 className="text-xl md:text-2xl font-medium mt-4 mb-2">
          Master Your Morning Routine for an Energetic Day
        </h3>
        <p className="text-gray-600">
          Morning habits can significantly impact your productivity and energy throughout the day. Learn how to create and maintain a morning routine that provides you with a boost of vitality and motivation.
        </p>
      </div>
      <div className="max-w-sm mx-auto">
        <img src={b} alt="" className="w-full h-[350px] rounded-t-lg" />
        <h3 className="text-xl md:text-2xl font-medium mt-4 mb-2">
          Secrets of Healthy Eating: Making Informed Choices
        </h3>
        <p className="text-gray-600">
          Proper nutrition is the key to your well-being. Discover how to navigate food choices, create balanced diets, and make informed decisions that contribute to your health.
        </p>
      </div>
      <div className="max-w-sm mx-auto">
        <img src={c} alt="" className="w-full h-[350px] rounded-t-lg" />
        <h3 className="text-xl md:text-2xl font-medium mt-4 mb-2">
          Maximize Fitness Results: Effective Strategies
        </h3>
        <p className="text-gray-600">
          Learn about the most effective workout, recovery, and stress management strategies to achieve maximum results on your fitness journey.
        </p>
      </div>
    </div>
  </main>
</section>


<section>
  <main className="max-w-7xl mx-auto">
    <div className="w-full bg-[#d5fb00] py-5 px-10 mb-8 md:flex md:items-center">
      <div className="md:w-6/12 flex items-center text-black mb-4 md:mb-0">
        <div className="w-12 md:w-20 flex items-center justify-center text-4xl md:text-5xl font-bold mr-4 md:mr-8">
          1
        </div>
        <div>
          <h2 className="uppercase text-3xl md:text-5xl font-bold">
            Fitness Training
          </h2>
          <p className="text-lg md:text-xl">
            In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            Praesent congue erat at massa. Vivamus aliquet elit.
          </p>
        </div>
      </div>
      <div className="md:w-6/12">
        <img src={s1} alt="" className="w-full" />
      </div>
    </div>

    <div className="w-full bg-black py-5 px-10 mb-8 md:flex md:items-center">
      <div className="md:w-6/12">
        <img src={s2} alt="" className="w-full" />
      </div>
      <div className="md:w-6/12 flex items-center text-white">
        <div className="w-12 md:w-20 flex items-center justify-center text-4xl md:text-5xl font-bold mr-4 md:mr-8">
          2
        </div>
        <div>
          <h2 className="uppercase text-3xl md:text-5xl font-bold">
            ONLINE TRAINING
          </h2>
          <p className="text-lg md:text-xl">
            In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            Praesent congue erat at massa. Vivamus aliquet elit.
          </p>
        </div>
      </div>
    </div>

    <div className="w-full bg-[#d5fb00] py-5 px-10 mb-8 md:flex md:items-center">
      <div className="md:w-6/12 flex items-center text-black mb-4 md:mb-0">
        <div className="w-12 md:w-20 flex items-center justify-center text-4xl md:text-5xl font-bold mr-4 md:mr-8">
          3
        </div>
        <div>
          <h2 className="uppercase text-3xl md:text-5xl font-bold">
            MIND & BODY
          </h2>
          <p className="text-lg md:text-xl">
            In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            Praesent congue erat at massa. Vivamus aliquet elit.
          </p>
        </div>
      </div>
      <div className="md:w-6/12">
        <img src={s3} alt="" className="w-full" />
      </div>
    </div>

    <div className="w-full bg-black py-5 px-10 md:flex md:items-center">
      <div className="md:w-6/12">
        <img src={s4} alt="" className="w-full" />
      </div>
      <div className="md:w-6/12 flex items-center text-white">
        <div className="w-12 md:w-20 flex items-center justify-center text-4xl md:text-5xl font-bold mr-4 md:mr-8">
          4
        </div>
        <div>
          <h2 className="uppercase text-3xl md:text-5xl font-bold">
            CUSTOMIZED WORKOUT PLANS
          </h2>
          <p className="text-lg md:text-xl">
            In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            Praesent congue erat at massa. Vivamus aliquet elit.
          </p>
        </div>
      </div>
    </div>
  </main>
</section>

      <hr  className="w-11/12 mx-auto border-[#d5fb00]"/>
      <section className="h-screen py-10 sm:py-20 px-5 md:px-20 mt-10 sm:mt-20">
  <main className="flex flex-col-reverse items-center sm:flex-row gap-5">
    <div className="w-full sm:w-6/12">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase">Where I Am</h1>
      <h2 className="text-4xl sm:text-7xl font-bold py-4">
        <span className="text-primary">EXPLORE</span> GYM SPACE
      </h2>
      <h1 className="text-base sm:text-lg pt-6 md:pt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa fugiat eum atque saepe, odit ut nobis! Ea, pariatur. Tenetur odio obcaecati quisquam optio rerum repudiandae tempora, nisi nobis ex!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa fugiat eum atque saepe, odit ut nobis! Ea, pariatur. Tenetur odio obcaecati quisquam optio rerum repudiandae tempora, nisi nobis ex!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa fugiat eum atque saepe, odit ut nobis! Ea, pariatur. Tenetur odio obcaecati quisquam optio rerum repudiandae tempora, nisi nobis ex!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa fugiat eum atque saepe, odit ut nobis! Ea, pariatur. Tenetur odio obcaecati quisquam optio rerum repudiandae tempora, nisi nobis ex!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa fugiat eum atque saepe, odit ut nobis! Ea, pariatur. Tenetur odio obcaecati quisquam optio rerum repudiandae tempora, nisi nobis ex!.
      </h1>
      <div className="pt-5 flex justify-center sm:justify-start">
        <Link className="px-10 py-3 font-medium text-lg bg-[#d5fb00] hover:bg-[#d0ea3f] hover:scale-110 transition-all text-black">
          Explore more
        </Link>
      </div>
    </div>
    <div className="w-full sm:w-5/12">
      <img src={sec} alt="" className="w-full" />
    </div>
  </main>
</section>

    </>
  );
};

export default Tips;
