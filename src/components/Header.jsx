import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const path = window.location.pathname;
  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];
  return (
    <div className="fixed left-0 right-0 top-0 z-50 font-raleway text-white">
      <div
        className={`flex items-center justify-between bg-header p-2 shadow-lg ${
          !showMenu && "md:flex-col"
        }`}
      >
        <div className="flex w-full items-center justify-between">
          <h1 className="text-4xl font-semibold">M B</h1>
          <FaBars
            onClick={() => setShowMenu(showMenu ? "" : "md:hidden")}
            className="cursor-pointer xxl:hidden xl:hidden lg:hidden md:flex"
          />
        </div>

        <div className="flex md:hidden">
          {menuItems.map((item, index) => {
            return (
              <li
                key={index}
                className={`mx-5 list-none px-5 ${
                  item.key == path && "rounded-md bg-white text-header"
                }`}
              >
                <Link to={item.key}>{item.title}</Link>
              </li>
            );
          })}
        </div>

        <div className={`mt-2 w-full flex-col xxl:hidden xl:hidden lg:hidden md:flex ${showMenu}`}>
          {menuItems.map((item, index) => {
            return (
              <li
                key={index}
                className={`my-2 list-none px-2 pt-1 ${
                  item.key == path && "rounded-md bg-white text-header"
                }`}
              >
                <Link to={item.key}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}
