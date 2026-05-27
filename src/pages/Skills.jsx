import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    },

    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    },

    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400 text-5xl" />,
    },

    {
      name: "React",
      icon: <FaReact className="text-cyan-400 text-5xl" />,
    },

    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
    },

    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 text-5xl" />,
    },

    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400 text-5xl" />,
    },

    {
      name: "Git",
      icon: <FaGitAlt className="text-red-500 text-5xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl text-cyan-400 font-bold text-center"
      >
        My Skills
      </motion.h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
        
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800 p-8 rounded-2xl text-center shadow-lg flex flex-col items-center gap-4 hover:bg-gray-700 transition"
          >
            {skill.icon}

            <h3 className="text-lg font-semibold">
              {skill.name}
            </h3>
          </motion.div>
        ))}

      </div>
    </div>
  );
}