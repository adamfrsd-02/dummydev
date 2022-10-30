import Head from "next/head";
import Image from "next/image";
import {
  BsMoonStars,
  BsCodeSquare,
  BsCloudSun,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
import { useState, Fragment, useEffect, useRef } from "react";
import profile from "../public/profile.png";
import {motion} from 'framer-motion';

export default function Home() {
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1.5}}
    className="short-me px-5 mt-20 md:mt-24">


          <p className="px-4 bg-amber-50 mt-10 text-gray-700 py-4 mx-auto rounded-xl dark:bg-gray-600 dark:text-slate-200 text-center">
            Hi, I'm Fullstack Web Developer !
          </p>
          <div className="short-profile lg:flex lg:justify-between mt-8 items-center">
            <div className="name-profile">
              <h2 className="text-3xl font-bold font-lato md:text-5xl text-gray-800 dark:text-white">Adam Firdaus</h2>
              <p className="mt-1 text-sm md:text-md text-gray-500 dark:text-white">
                IT Enthusiast (Fullstack Web Developer / UI Design)
              </p>
            </div>
            <Image
              src={profile}
              className="mt-5 mx-auto md:mr-0"
              height={150}
              width={150}
              alt="profile"
            />
          </div>

          {/* <hr className="mt-10 border-teal-500" /> */}

          {/* Works */}
          <div className="works mt-8">
            <div className="title-head">
              <h4 className="font-bold text-2xl text-gray-800 dark:text-white">About Me</h4>
              <hr className="mt-1 w-16 border-solid border-2 border-teal-500" />
            </div>
            <div className="paragraph dark:text-white text-justify mt-2">
              <p className="text-md md:text-md leading-6">&emsp; I'm a Multimedia & Networking Engineering Student at State Polytechnic of Batam. I like to explore myself on UI Design and Web Development. When out of internet, I like to play basketball and take some picture of the beautiful natural scenery. Currently, I'm on internship as Fullstack Web Developer in PT Panasonic Industrial Devices Batam. And also I'm doing some Youtuber Stuff on My Channel, which is currently is Unactive &gt;_&lt; </p>
            </div>
          </div>
          <div className="works mt-8">
            <div className="title-head">
              <h4 className="font-bold text-2xl text-gray-800 dark:text-white">Let's Connect !</h4>
              <hr className="mt-1 w-32 border-solid border-2 border-teal-500" />
            </div>
            <div className="socmed dark:text-white text-justify mt-5">
              <div className="flex justify-between gap-5 flex-col md:flex-row text-gray-800 dark:text-white">
                <a href="https://id.linkedin.com/in/adam-firdaus-20758717b" className="flex items-center gap-4 font-semibold hover:text-blue-500"><BsLinkedin className="text-3xl " /> @adam firdaus</a>
                <a href="https://www.youtube.com/c/adamfrdsid" className="flex items-center gap-4 font-semibold hover:text-red-600"><BsYoutube className="text-3xl " /> @adamfrds id</a>
                <a href="https://www.instagram.com/adamfrsd.id/" className="flex items-center gap-4 font-semibold hover:text-purple-600"><BsInstagram className="text-3xl" /> @adamfrsd.id</a>
                
                
              </div>
            </div>
          </div>
          {/* End Works */}

        </motion.section>
  );
}
