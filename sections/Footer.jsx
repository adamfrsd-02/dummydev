import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.footer
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1.5}}
    className="mt-16 dark:text-white dark:opacity-20 text-sm text-center">
        {/* copyright */}
        &copy; 2022 Adam Firdaus. All Rights Reserved.
      </motion.footer>
  )
}

export default Footer