import { motion } from "framer-motion";

export default function Blog() {
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
              <h2 className="text-2xl font-bold font-lato  text-gray-800 dark:text-white">Works</h2>
              <hr className="mt-2 w-16 border-teal-500 border-solid border-2" />
            </div>
            {/* <Image
              src={profile}
              className="mt-5 mx-auto md:mr-0"
              height={150}
              width={150}
              alt="profile"
            /> */}
          </div>

          {/* <hr className="mt-10 border-teal-500" /> */}

          

        </motion.section>
  );
}
