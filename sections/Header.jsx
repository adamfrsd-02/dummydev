import { useState, Fragment, useEffect, useRef } from "react";
import { BsCodeSquare, BsMoonStars, BsSunset, BsSun } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSun } from "react-icons/ci";
import { Menu, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import {motion} from "framer-motion";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigations = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: "CV/Porfolio", path: "/portfolio" },
  ];

  const toggleDarkMode = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="cursor-pointer hover:dark:bg-none hover:dark:text-white text-teal-500 dark:bg-teal-500 hover:bg-teal-500 hover:text-white p-2 rounded-md"
          onClick={() => setTheme("light")}
        >
          <BsSun className="  text-2xl hover:text-white dark:text-white" />
        </button>
      );
    } else {
      return (
        <button
          className="cursor-pointer hover:dark:bg-none hover:dark:text-white text-teal-500 dark:bg-teal-500 hover:bg-teal-500 hover:text-white p-2 rounded-md"
          onClick={() => setTheme("dark")}
        >
          <BsMoonStars className="  text-2xl hover:text-white dark:text-white" />
        </button>
      );
    }
  };

  //class = "active" block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-teal-700 md:p-0 dark:text-white
  //class = "default " block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent

  //active class style
  const active =
    "active block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-teal-700 md:p-0 dark:text-white";
  //default class style
  const def =
    "default block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

    const mobileActive = "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-teal-700 md:p-0 dark:text-white";

    const mobileDef = "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    <header>
      <nav className=" fixed top-0 left-0 z-30 flex bg-amber-50 justify-between py-3 items-center w-full px-10 shadow-md dark:bg-transparent dark:bg-[#262629] dark:shadow-gray-900 dark:shadow-lg">
        <div className="logo">
          <h2
            className={`text-teal-500 text-lg font-medium flex gap-2 items-center`}
          >
            <BsCodeSquare /> Dummydev
          </h2>
        </div>
        <div className={`hidden w-full md:block md:w-auto`} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 -ml-16 mx-auto rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0">
            {navigations.map((nav) => (
              <li>
                <Link href={nav.path}>
                  <p className={router.pathname == nav.path ? active : def}>
                    {nav.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu flex items-center justify-between gap-5">
          {toggleDarkMode()}
          {/* <button className="text-md bg-gradient-to-b from-teal-500 to-cyan-500 text-white py-3 md:hidden rounded-lg px-3 shadow-md cursor-pointer hover:text-underline lg:px-6 lg:py-2">
                <GiHamburgerMenu onClick={() => setOpen(!open)} />
              </button> */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="text-md bg-gradient-to-b from-teal-400 to-cyan-300 text-white py-3 md:hidden rounded-lg px-3 shadow-md cursor-pointer hover:text-underline lg:px-6 lg:py-2">
                <GiHamburgerMenu onClick={() => setOpen(!open)} />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-3 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  {navigations.map((nav) => (
                    <Menu.Item>
                        <Link href={nav.path}>
                          <p className={router.pathname == nav.path ? mobileActive : mobileDef}>
                            {nav.label}
                          </p>
                        </Link>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
