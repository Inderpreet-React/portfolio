import React, { useState } from "react";
import NavItem from "./NavItem";
import { Bars4Icon } from "@heroicons/react/24/outline";

export default function Navbar({
  isAboutMeVisible,
  isSkillsVisible,
  isProjectVisible,
  isContactVisible,
}) {
  const [hamClick, setHamClick] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-50 flex h-24 w-full flex-col items-center justify-center border-b border-gray-500 bg-black p-4 text-white lg:flex-row lg:p-8">
      <div className="flex w-full content-center items-center justify-between">
        <a
          href="#aboutme"
          className="relative text-3xl font-extrabold text-white after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-md after:bg-gradient-to-l after:from-pink-500 after:to-violet-500"
        >
          Inderpreet
        </a>
        <Bars4Icon
          className="h-8 w-10 lg:hidden"
          onClick={() => {
            setHamClick(!hamClick);
          }}
        />
      </div>
      <ul
        className={`absolute top-full right-0 gap-2 transition-all lg:relative lg:top-auto lg:right-auto lg:flex lg:gap-10 ${
          hamClick ? "opacity-100" : "opacity-0"
        } lg:opacity-100 `}
      >
        <NavItem
          isVisible={isAboutMeVisible}
          name="About me"
          link="aboutme"
          f={setHamClick}
        />
        <NavItem
          isVisible={isSkillsVisible}
          name="Skills"
          link="skills"
          f={setHamClick}
        />
        <NavItem
          isVisible={isProjectVisible}
          name="Projects"
          link="projects"
          f={setHamClick}
        />
        <NavItem
          isVisible={isContactVisible}
          name="Contact me"
          link="contactme"
          f={setHamClick}
        />
      </ul>
    </div>
  );
}
