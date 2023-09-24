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
    <div className="font-raleway text-white">
      <div
        className={`bg-header flex items-center justify-between p-2 shadow-lg ${
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
          {menuItems.map((item) => {
            return (
              <li
                className={`mx-5 list-none px-2 py-1 ${
                  item.key == path && "text-header rounded-md bg-white"
                }`}
              >
                <Link to={item.key}>{item.title}</Link>
              </li>
            );
          })}
        </div>

        <div className={`mt-2 w-full flex-col xxl:hidden xl:hidden lg:hidden md:flex ${showMenu}`}>
          {menuItems.map((item) => {
            return (
              <li
                className={`my-2 list-none px-2 pt-1 ${
                  item.key == path && "text-header rounded-md bg-white"
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
