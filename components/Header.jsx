import React, { useState, useEffect } from "react";
import { getCategories } from "../services";
import Link from "next/link";
import { useTheme } from "next-themes";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <svg
          className="w-6 h-6 hover:text-white dark:text-darkButton"
          xmlns="http://www.w3.org/2000/svg"
          role="button"
          onClick={() => setTheme("light")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      );
    } else {
      return (
        <svg
          className="w-6 h-6 text-button"
          role="button"
          onClick={() => setTheme("dark")}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    }
  };

  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="fixed top-0 sm:left-0 z-50 shadow-lg w-full bg-bground dark:bg-zinc-900 ">
      <div className="ml-5 md:ml-0 grid grid-cols-5 gap-4 container mx-auto lg:px-32 justify-between md:flex items-center py-2.5">
        <div className="5 flex items-center col-span-1">
          <Link href="/">
            <span className="flex cursor-pointer text-2xl font-extrabold text-black">
              <svg
                viewBox="0 0 90 90"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="4 0"
              >
                <title>Blog</title>
                <mask
                  id="mask__ring"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="90"
                  height="90"
                >
                  <rect width="90" height="90" rx="180" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#mask__ring)">
                  <path d="M0 0h90v45H0z" fill="#73b06f"></path>
                  <path d="M0 45h90v45H0z" fill="#0c8f8f"></path>
                  <path d="M83 45a38 38 0 00-76 0h76z" fill="#0c8f8f"></path>
                  <path d="M83 45a38 38 0 01-76 0h76z" fill="#405059"></path>
                  <path d="M77 45a32 32 0 10-64 0h64z" fill="#405059"></path>
                  <path d="M77 45a32 32 0 11-64 0h64z" fill="#ffad08"></path>
                  <path d="M71 45a26 26 0 00-52 0h52z" fill="#ffad08"></path>
                  <path d="M71 45a26 26 0 01-52 0h52z" fill="#73b06f"></path>
                  <circle cx="45" cy="45" r="23" fill="#edd75a"></circle>
                </g>
              </svg>
              <span className="flex items-center">Blog</span>
            </span>
          </Link>
        </div>
        <div className="left-0 col-span-3">
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 space-x-6 absolute md:static md:z-auto text-black dark:text-slate-300 z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-10" : "top-[-490px]"
            }`}
          >
            <li
              className="md:bg-none md:ml-3 md:my-0 my-7 font-semibold dark:text-white bg-gradient-to-r from-blue-200 to-blue-400 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-200
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
            >
              <Link href={"/"}>
                <a>Ana Sayfa</a>
              </Link>
            </li>

            <li
              className="md:ml-3 md:my-0 my-7 font-semibold dark:text-white bg-gradient-to-r from-blue-200 to-blue-400 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-200
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
            >
              <Link href={"/category/dizi-film"}>
                <a>Dizi/Film</a>
              </Link>
            </li>

            <li
              className="md:ml-3 md:my-0 my-7 font-semibold dark:text-white bg-gradient-to-r from-blue-200 to-blue-400 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-200
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
            >
              <Link href={"/contact"}>
                <a>Oyun</a>
              </Link>
            </li>

            <li
              className="md:ml-3 md:my-0 my-7 font-semibold dark:text-white bg-gradient-to-r from-blue-200 to-blue-400 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-200
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
            >
              <Link href={"/category/muzik"}>
                <a>Müzik</a>
              </Link>
            </li>

            <li
              className="md:ml-3 md:my-0 my-7 font-semibold dark:text-white bg-gradient-to-r from-blue-200 to-blue-400 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-200
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
            >
              <Link href={"/category/teknoloji"}>
                <a>Teknoloji</a>
              </Link>
            </li>

            <li
              className="md:ml-3 md:my-0 my-7 font-semibold dark:text-white bg-gradient-to-r from-blue-200 to-blue-400 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-200
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
            >
              <Link href={"/category/gundem"}>
                <a>Gündem</a>
              </Link>
            </li>

            <li
              className="md:ml-3 md:my-0 my-7 font-semibold dark:text-white bg-gradient-to-r from-blue-200 to-blue-400 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-200
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
            >
              <Link href={"/category/egitim"}>
                <a>Eğitim</a>
              </Link>
            </li>

            <li
              className="md:ml-3 md:my-0 my-7 font-semibold dark:text-white bg-gradient-to-r from-blue-200 to-blue-400 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-200
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
            >
              <Link href={"/"}>
                <a>Daha Fazla</a>
              </Link>
            </li>
          </ul>
        </div>

        <div  className={`md:flex md:items-center md:pb-0 pb-12 space-x-6 absolute md:static md:z-auto text-black dark:text-slate-300 z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-10" : "top-[-490px]"
            }`}>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            className=" w-5 h-5 cursor-not-allowed ml-3 mt-0.5"
          >
            {" "}
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>

          <span
            className="md:ml-3  md:my-0 my-7 font-semibold dark:text-white bg-gradient-to-r from-blue-200 to-blue-400 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-200
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
          >
            {renderThemeChanger()}
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="24px"
              height="24px"
              className=""
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width="24px"
              height="24px"
              className=""
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
