import React, { useState, useEffect } from "react";
import { getCategories } from "../services";
import Link from "next/link";
import { useTheme } from "next-themes";
import Dropdown from "./Dropdown";

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
          className="w-6 h-6 mb-1 hover:text-white"
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
          className="w-6 h-6 hover:text-white"
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
    <div className="fixed top-0 sm:left-0 z-50 shadow-md w-full bg-blue-400 dark:bg-slate-800">
      <div className="container mx-auto lg:px-32 md:flex items-center justify-between py-2.5">
        <div className="flex items-center">
          <Link href="/">
            <span className="flex cursor-pointer text-2xl font-extrabold text-white">
              <svg
                id="logo-16"
                width="80"
                height="43"
                viewBox="0 0 109 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z"
                  class="ccompli1"
                  fill="#FFD200"
                ></path>{" "}
                <path
                  d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z"
                  class="ccompli2"
                  fill="#06E07F"
                ></path>{" "}
                <path
                  d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z"
                  class="ccustom"
                  fill="#E3073C"
                ></path>{" "}
                <path
                  d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z"
                  class="ccustom"
                  fill="#1F84EF"
                ></path>{" "}
              </svg>
              <span className="flex items-center">Blog</span>
            </span>
          </Link>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12   absolute md:static md:z-auto text-white dark:text-slate-300 z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-10" : "top-[-490px]"
          }`}
        >
          <li className="py-1 px-1 hover:bg-blue-900 dark:hover:bg-slate-600 rounded-md">
            {renderThemeChanger()}
          </li>

          <li className="md:ml-8 md:my-0 my-7 hover:py-2 hover:text-gray-50  hover:bg-blue-900 dark:hover:bg-slate-600 rounded-md px-2 py-1">
            <Link href={"/"}>
              <a>Ana Sayfa</a>
            </Link>
          </li>
          <li>
            <Dropdown />
          </li>

          <li className="md:ml-8 md:my-0 my-7 hover:py-2 hover:text-gray-50  hover:bg-blue-900 dark:hover:bg-slate-600 rounded-md px-2 py-1">
            <Link href={"/contact"}>
              <a>İletişim</a>
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 hover:py-2 hover:text-gray-50  hover:bg-blue-900 dark:hover:bg-slate-600 rounded-md px-2 py-1">
            <Link href={"/about"}>
              <a>Hakkımda</a>
            </Link>
          </li>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            className=" w-5 h-5 cursor-not-allowed ml-3"
          >
            {" "}
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </ul>

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
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
            </svg>
          ) : (
            <svg
              className=""
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="25px"
            >
              <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
