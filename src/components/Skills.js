import React from "react";
import JavascriptLogo from "../images/JavascriptLogo";
import ReactIcon from "../images/ReactIcon";
import FirebaseLogo from "../images/FirebaseLogo";
import NodeIcon from "../images/NodeIcon";
import TailwindIcon from "../images/TailwindIcon.png";
import BootstrapIcon from "../images/bootstrapLogo.png";
import SassIcon from "../images/SassIcon";
import MongoDBIcon from "../images/MongoDBIcon";
import Express from "../images/express.png";
import HtmlIcon from "../images/HtmlIcon";
import CssIcon from "../images/CssIcon";
import ReduxIcon from "../images/ReduxIcon";
import GitIcon from "../images/GitIcon";
import MaterialIcon from "../images/MaterialIcon";
import RQueryIcon from "../images/RQueryIcon";
import BashIcon from "../images/BashIcon";
import { motion } from "framer-motion";

export default function Skills({ isSkillsRef }) {
  return (
    <section
      id="skills"
      className="h-full min-h-screen w-full overflow-hidden bg-neutral-900 p-6 pt-32 text-white lg:p-12 lg:pb-0 lg:pt-32"
    >
      <div className="flex h-full w-full flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="flex w-full flex-col gap-10 lg:w-1/2">
          <div className="relative">
            <span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 lg:-left-8">
              {"<h1>"}
            </span>
            <motion.h1
              ref={isSkillsRef}
              initial="front"
              whileInView="animation"
              transition={{ duration: 0.5, delay: "0.1" }}
              variants={{
                front: { scale: 1.2, x: "-10%" },
                animation: { scale: 1, x: 0 },
              }}
              viewport={{ once: true }}
              className="relative max-w-min overflow-hidden text-ellipsis bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text p-2 text-5xl font-extrabold text-transparent lg:whitespace-nowrap lg:text-6xl "
            >
              Skills & Experience
            </motion.h1>
            <span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 lg:-left-8">
              {"</h1>"}
            </span>
          </div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            transition={{ duration: "0.7", delay: "0.5" }}
            variants={{
              hidden: { opacity: 0, scale: 1.1 },
              visible: { opacity: 1, scale: 1 },
            }}
            viewport={{ once: true }}
            className="relative text-justify text-lg"
          >
            <span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 lg:-left-8">
              {"<p>"}
            </span>
            As a skilled Frontend engineer specializing in React JS, I bring a
            wealth of experience to crafting remarkable web solutions. With a
            keen eye for design and an emphasis on user experience, I create
            visually appealing and intuitive interfaces. Leveraging the power of
            React JS, I develop responsive and dynamic applications that engage
            users and drive conversions. I stay up-to-date with the latest
            industry trends and best practices, ensuring that my frontend code
            is optimized for performance, accessibility, and cross-browser
            compatibility.
            <br />
            <br />
            Complementing my expertise as a Frontend engineer, I possess
            valuable secondary skills as a backend engineer, strengthening my
            ability to deliver end-to-end solutions. Proficient in backend
            technologies and frameworks, I architect and develop robust
            server-side components that seamlessly integrate with frontend
            systems. I have experience working with databases, APIs, and server
            technologies, enabling efficient data management and secure
            interactions. By leveraging my combined frontend and backend skills,
            I provide clients with comprehensive solutions that are scalable,
            efficient, and tailored to their unique needs.
            <span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 lg:-left-8">
              {"</p>"}
            </span>
          </motion.p>
          <motion.p
            initial="down"
            whileInView="animation"
            transition={{ duration: 0.3, delay: "0.1" }}
            variants={{
              down: { y: "300%" },
              animation: { y: 0 },
            }}
            viewport={{ once: true }}
            className="relative text-justify text-lg"
          >
            <span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 lg:-left-8">
              {"<a>"}
            </span>
            Visit my{" "}
            <a
              href="https://www.linkedin.com/in/inderpreet-singh-961478229/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-semibold text-white after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-md after:bg-gradient-to-l after:from-pink-500 after:to-violet-500"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              className="relative font-semibold text-white after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-md after:bg-gradient-to-l after:from-pink-500 after:to-violet-500"
              href="#contactme"
            >
              Contact me{" "}
            </a>
            directly.
            <span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 lg:-left-8">
              {"</a>"}
            </span>
          </motion.p>
        </div>
        <motion.div
          initial="right"
          whileInView="left"
          transition={{ duration: "0.5", delay: 0.2 }}
          variants={{
            right: { x: 200, opacity: 0 },
            left: { x: 0, opacity: 1 },
          }}
          viewport={{ once: true }}
          className="mb-4 flex w-full flex-col gap-4 pb-4 lg:mb-0 lg:w-1/2 lg:pb-0"
        >
          <h3 className="relative max-w-min whitespace-nowrap text-3xl font-extrabold text-white  after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-md after:bg-gradient-to-l after:from-pink-500 after:to-violet-500 lg:pt-10">
            Tech Stack
          </h3>
          <div className="relative text-xl font-bold tracking-widest lg:ml-12 lg:font-bold">
            <span className="absolute -top-4 -left-0 text-lg font-normal italic text-neutral-700 lg:-top-3 lg:-left-12">
              {"<ul>"}
            </span>
            <br />
            <div className="my-2 grid grid-cols-4 gap-y-12 lg:grid-cols-5">
              <HtmlIcon hw={"16"} />
              <CssIcon hw={"16"} />
              <JavascriptLogo hw={"16"} />
              <FirebaseLogo hw={"16"} />
              <ReduxIcon hw={"16"} />
              <SassIcon hw={"16"} />
              <MaterialIcon hw={"16"} />
              <GitIcon hw={"16"} />
              <RQueryIcon hw={"16"} />
              <div className="w-16 transition-all hover:scale-125">
                <img
                  src={BootstrapIcon}
                  alt="Bootstrap"
                  className="w-16"
                  title="Bootstrap"
                />
              </div>
              <MongoDBIcon hw={"16"} />
              <div className="flex w-12 animate-spin-slow items-center justify-center lg:justify-start">
                <img
                  src={Express}
                  alt="express"
                  className="h-12"
                  title="Express JS"
                />
              </div>
              <ReactIcon hw={"16"} />
              <NodeIcon hw={"16"} />
              <BashIcon hw={"16"} />
              <div className="w-16 transition-all hover:scale-125">
                <img
                  src={TailwindIcon}
                  alt="Tailwind"
                  className="h-16 w-16"
                  title="Tailwind"
                />
              </div>
            </div>
            <span className="absolute -left-0 -bottom-8 text-lg font-normal italic text-neutral-700 lg:-left-12">
              {"</ul>"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
