import React from "react";
import { motion } from "framer-motion";
import CircularIcons from "./CircularIcons";

export default function Skills({ isSkillsRef }) {
  return (
    <>
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
              As a skilled Frontend Engineer specializing in{" "}
              <u>
                <b>React JS</b>
              </u>
              , I bring a wealth of experience to crafting remarkable web
              solutions. With a keen eye for design and an emphasis on user
              experience, I create visually appealing and intuitive interfaces.
              Leveraging the power of React JS, I develop responsive and dynamic
              applications that engage users and drive conversions. I have
              extensive experience with{" "}
              <u>
                <b>JavaScript</b>
              </u>
              , which I use to build interactive and efficient web applications.
              My proficiency in state management using{" "}
              <u>
                <b>Redux</b>
              </u>{" "}
              ensures that applications are scalable and maintainable. For data
              visualization, I utilize libraries such as{" "}
              <u>
                <b>D3.js</b>
              </u>{" "}
              and{" "}
              <u>
                <b>Chart.js</b>
              </u>
              , creating insightful and interactive visual representations of
              data. Additionally, I am well-versed in Native React & PWA,
              allowing me to integrate user interfaces seamlessly. I stay
              up-to-date with the latest industry trends and best practices,
              ensuring that my frontend code is optimized for performance,
              accessibility, and cross-browser compatibility.
              <br />
              <br />
              Complementing my expertise as a Frontend Engineer, I possess
              valuable skills as a Backend Engineer, strengthening my ability to
              deliver end-to-end solutions. Proficient in backend technologies
              and frameworks such as{" "}
              <u>
                <b>Java, Spring Boot, Go, Golang, Django, and Python</b>
              </u>
              , I architect and develop robust server-side components that
              seamlessly integrate with frontend systems. I have experience
              working with{" "}
              <u>
                <b>Express JS and Node JS</b>
              </u>{" "}
              for efficient server-side development and leveraging{" "}
              <u>
                <b>GraphQL, Restful APIs, and OData </b>
              </u>{" "}
              for effective data communication.
              <br />
              <br />I am adept at working with databases and server
              technologies, enabling efficient data management and secure
              interactions. By leveraging my combined frontend and backend
              skills, I provide clients with comprehensive solutions that are
              scalable, efficient, and tailored to their unique needs.
              <span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 lg:-left-8">
                {"</p>"}
              </span>
            </motion.p>
            <div className="relative text-justify text-lg">
              Visit my{" "}
              <a
                href="https://www.linkedin.com/in/inderpreet-singh-961478229/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative font-semibold text-white after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-md after:bg-gradient-to-l after:from-pink-500 after:to-violet-500"
              >
                LinkedIn{" "}
              </a>
              or{" "}
              <a
                className="relative font-semibold text-white after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-md after:bg-gradient-to-l after:from-pink-500 after:to-violet-500"
                href="#contactme"
              >
                Contact me
              </a>{" "}
              directly.
            </div>
          </div>
          <CircularIcons />
        </div>
      </section>
    </>
  );
}
