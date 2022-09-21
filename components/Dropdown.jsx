// import React, { useEffect, useState } from "react";
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { getCategories } from "../services";
// import Link from "next/link";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Example() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     getCategories().then((newCategories) => setCategories(newCategories));
//   }, []);

//   return (
//     <Menu as="div" className="relative inline-block">
//       <div>
//         <Menu.Button className="md:ml-3 md:my-0 my-7 ml-4 font-bold dark:text-white bg-gradient-to-r from-blue-200 to-blue-400 dark:from-purple-800 dark:to-purple-900
//           bg-[length:0px_10px]
//           bg-left-bottom
//           bg-no-repeat
//           transition-[background-size]
//           duration-200
//           hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
//           Kategoriler
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="dark:bg-slate-800 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <a>
//                   {categories.map((category) => (
//                     <ul className="mx-4 mt-3">
//                       <li className="">
//                         <Link
//                           href={`/category/${category.slug}`}
//                           key={category.slug}
//                         >
//                           <span className="cursor-pointer block pb-3 dark:text-gray-50 mb-3 text-gray-700">
//                             {category.name}
//                           </span>
//                         </Link>
//                       </li>
//                     </ul>
//                   ))}
//                 </a>
//               )}
//             </Menu.Item>
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   );
// }
