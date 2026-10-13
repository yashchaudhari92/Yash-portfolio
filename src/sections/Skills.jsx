
/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import { FaJava, FaReact, FaPython, FaNodeJs, FaAws } from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiMysql,
  SiMongodb,
  SiSpringboot,
  SiJunit5,
  SiDocker,
  SiPostman,
  SiBootstrap,
  SiCplusplus,
  SiApachekafka,
  SiRedis,
} from "react-icons/si";

import { DiIntellij } from "react-icons/di";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        {
          name: "C++",
          icon: <SiCplusplus className="text-blue-500" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },

        { name: "Python", icon: <FaPython className="text-blue-600" /> },
      ],
      color: "border-purple-200 dark:border-purple-900/50",
    },
    {
      title: "Frontend Development",
      skills: [
        {
          name: "HTML5/CSS3",
          icon: (
            <span className="flex">
              <span className="text-orange-500">{"</>"}</span>
              <span className="text-blue-400">#</span>
            </span>
          ),
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
        { name: "Thymeleaf", icon: <span className="text-green-500">🍃</span> },
      ],
      color: "border-blue-200 dark:border-blue-900/50",
    },

    {
      title: "Backend Development",
      skills: [
        {
          name: "Spring Boot",
          icon: <SiSpringboot className="text-green-500" />,
        },
        {
          name: "Microservices",
          icon: <span className="text-blue-500">🔗</span>,
        },
        {
          name: "Apache Kafka",
          icon: <SiApachekafka className="text-gray-800 dark:text-gray-200" />,
        },
        {
          name: "Redis",
          icon: <SiRedis className="text-red-500" />,
        },
        {
          name: "Spring Database",
          icon: <span className="text-green-600">🛢️</span>,
        },
        {
          name: "JWT/WebFlux",
          icon: <span className="text-purple-500">⚡</span>,
        },
        {
          name: "Batch Processing",
          icon: <span className="text-blue-400">🔄</span>,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-600" />,
        },
        {
          name: "REST API",
          icon: <TbApi className="text-purple-500" />,
        },
      ],
      color: "border-green-200 dark:border-green-900/50",
    },

    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL + JDBC", icon: <SiMysql className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
        { name: "AWS", icon: <FaAws className="text-amber-600" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "IntelliJ", icon: <DiIntellij className="text-purple-600" /> },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-purple-500" />,
        },
        { name: "Git", icon: <SiGit className="text-orange-500" /> },
      ],
      color: "border-amber-200 dark:border-amber-900/50",
    },
  ];

  const proficiencyData = [
    { skill: "Java", level: 90, color: "bg-red-500" },
    { skill: "Spring", level: 75, color: "bg-green-500" },
    { skill: "JavaScript", level: 70, color: "bg-yellow-500" },
    { skill: "SQL", level: 80, color: "bg-blue-600" },
    { skill: "Node.Js", level: 70, color: "bg-purple-600" },
  ];


  // Equal-height skill cards with independently scrollable skill lists.
  const SkillBox = ({ category, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        viewport={{ once: true, amount: 0.1 }}
        className={`h-[400px] min-h-0 rounded-xl border ${category.color} bg-white dark:bg-dark-800 p-5 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col`}
      >
        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-5 flex-shrink-0">
          {category.title}
        </h3>

        <div
          className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden pr-2 space-y-3 overscroll-contain skills-scrollbar"
          onWheel={(e) => {
            e.stopPropagation();
          }}
        >
          {category.skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 min-h-[52px] px-3 py-2 rounded-lg border border-gray-100 dark:border-dark-600 bg-gray-50 dark:bg-dark-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-200"
            >
              <span className="flex-shrink-0 text-xl">
                {skill.icon}
              </span>

              <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };


  // // Static skill cards: no automatic scrolling.
  // const SkillBox = ({ category, index }) => {
  //   return (
  //     <motion.div
  //       initial={{ opacity: 0, y: 20 }}
  //       whileInView={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 0.45, delay: index * 0.08 }}
  //       viewport={{ once: true, amount: 0.1 }}
  //       className={`h-full rounded-xl border ${category.color} bg-white dark:bg-dark-800 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
  //     >
  //       <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-5">
  //         {category.title}
  //       </h3>

  //       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">
  //         {category.skills.map((skill, i) => (
  //           <motion.div
  //             key={i}
  //             whileHover={{ x: 3 }}
  //             transition={{ duration: 0.2 }}
  //             className="flex items-center gap-3 min-h-[52px] px-3 py-2 rounded-lg border border-gray-100 dark:border-dark-600 bg-gray-50 dark:bg-dark-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-200"
  //           >
  //             <span className="flex-shrink-0 text-xl">{skill.icon}</span>

  //             <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
  //               {skill.name}
  //             </span>
  //           </motion.div>
  //         ))}
  //       </div>
  //     </motion.div>
  //   );
  // };

  return (
    <section
      id="skills"
      className="py-16 md:py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent inline-block">
            Technical Skills
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technologies I've worked with and mastered throughout my
            development journey
          </p>
        </motion.div>

        {/* Skill Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-xl border border-indigo-200 dark:border-indigo-900/50 bg-white dark:bg-dark-800 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow mb-8 md:mb-10"
        >
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-6">
            Skill Proficiency
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {proficiencyData.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex justify-between items-center mb-2 gap-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.skill}
                  </span>

                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {item.level}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 items-start">
          {skillCategories.map((category, index) => (
            <SkillBox key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;