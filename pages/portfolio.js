import { motion } from "framer-motion";
import { FaFileDownload,FaLinkedin } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import hidropol from "../public/portfolio/hidropol.png";
import hmti from "../public/portfolio/hmti.png";
import laporpak from "../public/portfolio/laporpak.jpg";
import notify from "../public/portfolio/notify.png";
import polcar from "../public/portfolio/polcar.png";
import proo from "../public/portfolio/proo.png";
import Image from "next/image";

export default function Portfolio() {
  const  [isOpen,setIsOpen] = useState(false);

  const projects = [
    {
      title: "Hidropol",
      desc: "Hidropol is an application for monitoring and controlling Polibatam IoT Based Hydroponic Farm using MERN Stack.",
      image: hidropol,
      link: "https://hidropol.netlify.app/",
      lable: ["Front-End", "Back-End", "Database", "Arduino"],
    },
    {
      title: "Laporpak",
      desc: "LaporPak is an application that facilitates administration in the community coverage area, especially RT/RW.",
      image: laporpak,
      link: "https://hidropol.netlify.app/",
      lable: ["Front-End", "Back-End", "UI/UX Design", "Database"],
    },
    {
      title: "Notify",
      desc: "Notify is a web application for notes management, and activities reminder.",
      image: notify,
      link: "https://hidropol.netlify.app/",
      lable: ["Front-End", "Back-End", "UI/UX Design", "Database"],
    },
    {
      title: "Polibatam Career",
      desc: "Polibatam Career is a web application for Polibatam students to find a job, such as Internship, or as an Employee.",
      image: polcar,
      link: "https://hidropol.netlify.app/",
      lable: ["Front-End", "UI/UX Design"],
    },
    {
      title: "Proo",
      desc: "Proo is an application to hire private teacher, specified for Qur'an Recitation.",
      image: proo,
      link: "https://hidropol.netlify.app/",
      lable: ["Front-End"],
    },
    {
      title: "HMTI Web Profile",
      desc: "HMTI is a web application used to be as a web-profile for HMTI Polibatam.",
      image: hmti,
      link: "https://hidropol.netlify.app/",
      lable: ["Front-End", "UI/UX Design"],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="short-me px-1 mt-20 md:mt-24"
    >
      <div className="short-profile lg:flex lg:justify-between mt-8 items-center">
        <div className="name-profile">
          <h2 className="text-2xl font-bold font-lato  text-gray-800 dark:text-white">
            CV
          </h2>
          <hr className="mt-2 w-16 border-teal-500 border-solid border-2" />
          <div className="cv mt-3 flex gap-3 items-center">
            <motion.a 
            whileHover={{scale:1.1}}
            href="https://drive.google.com/file/d/1gY0XKkwRqrJbRrOK97Am1qyzD5aABD6O/view?usp=share_link " className="flex gap-2 items-center text-white bg-rose-400 p-2 px-5 rounded-md hover:cursor-pointer">
              <FaFileDownload /> Download CV
            </motion.a>
            <p>||</p>
            <motion.a
            whileHover={{scale:1.1}}
            href="https://id.linkedin.com/in/adam-firdaus-20758717b" className="flex gap-2 items-center text-white bg-rose-400 p-2 px-5 rounded-md hover:cursor-pointer">
              <FaLinkedin /> View LinkedIn
            </motion.a>
          </div>

        </div>
      </div>
      <div className="short-profile lg:flex lg:justify-between mt-8 items-center">
        <div className="name-profile">
          <h2 className="text-2xl font-bold font-lato  text-gray-800 dark:text-white">
            Works
          </h2>
          <hr className="mt-2 w-16 border-teal-500 border-solid border-2" />
        </div>
      </div>
      <div className="container mx-auto items-center md:grid grid-cols-2 gap-10 mt-3">
        {projects.map((project) => (
          <div class="max-w-sm rounded-md overflow-hidden shadow-md h-full bg-white md:mb-0 mb-5 dark:shadow-slate-600">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                class="w-full"
                src={project.image}
                alt="Sunset in the mountains"
              />
            </motion.div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-gray-800">
                {project.title}
              </div>
              <p class="text-gray-700 text-sm">{project.desc}</p>
            </div>
            <div class="px-4 pt-2 pb-3 ">
              <p className="text-gray-500 text-xs mb-2">
                My Job In This Project
              </p>
              {project.lable.map((lable) => (
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {lable}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <center>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="mx-auto border-solid border-2 border-teal-600 text-gray-800 font-medium p-2 px-6 rounded-lg mt-10 dark:text-white dark:shadow-slate-600 shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          Tech I Use ?
        </motion.button>
      </center>

      <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white text-gray-800 p-4 px-5 font-bold">
          <Dialog.Title>Coming Soon !</Dialog.Title>

          {/* ... */}
        </Dialog.Panel>
      </div>
    </Dialog>

      {/* <hr className="mt-10 border-teal-500" /> */}
    </motion.section>
  );
}
