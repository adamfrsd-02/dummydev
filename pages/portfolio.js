import { motion } from "framer-motion";
import hidropol from "../public/portfolio/hidropol.png";
import hmti from "../public/portfolio/hmti.png";
import laporpak from "../public/portfolio/laporpak.jpg";
import notify from "../public/portfolio/notify.png";
import polcar from "../public/portfolio/polcar.png";
import proo from "../public/portfolio/proo.png";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Hidropol",
      desc: "Hidropol is an application for monitoring and controlling Polibatam IoT Based Hydroponic Farm using MERN Stack.",
      image: hidropol,
      link: "https://hidropol.netlify.app/",
      lable: ["Front-End", "Back-End", "Database", "Arduino"],
    },
    {
      title: "HMTI Web Profile",
      desc: "HMTI is a web application used to be as a web-profile for HMTI Polibatam.",
      image: hmti,
      link: "https://hidropol.netlify.app/",
      lable: ["Front-End", "UI/UX Design"],
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
            Works
          </h2>
          <hr className="mt-2 w-16 border-teal-500 border-solid border-2" />
        </div>
      </div>
      <div className="container mx-auto items-center md:grid grid-cols-2 gap-10 mt-6">
        {projects.map((project) => (
          <div class="max-w-sm rounded-md overflow-hidden shadow-md h-full bg-white md:mb-0 mb-5 dark:shadow-slate-600">
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
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
        whileTap={{ scale:0.9 }}
        className="mx-auto bg-gradient-to-b from-teal-400 to-cyan-300 text-white font-medium p-2 px-6 rounded-lg mt-10 dark:shadow-slate-600 shadow-lg">
          Tech I Use ?
        </motion.button>
      </center>

      {/* <hr className="mt-10 border-teal-500" /> */}
    </motion.section>
  );
}
