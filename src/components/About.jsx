import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'


import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma, FaPhp
} from 'react-icons/fa'

import {
  SiTailwindcss, SiFirebase, SiMysql, SiPython, SiLaravel, SiCodeigniter,
  SiGooglecolab, SiPostman, SiVite, SiXampp
} from 'react-icons/si'
import { SiFlutter, SiDart, SiIonic } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'
import { FaServer } from 'react-icons/fa'
import { FaNetworkWired } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { SiExpress } from "react-icons/si"


import { VscCode } from 'react-icons/vsc'

export default function About() {

  // ✅ STATE HARUS DI SINI
  const [activeTab, setActiveTab] = useState("tech")

  // ✅ DATA JUGA DI SINI
  const techStack = [
    { icon: <FaHtml5 />, name: "HTML", color: "hover:text-orange-500" },
    { icon: <FaCss3Alt />, name: "CSS", color: "hover:text-blue-500" },
    { icon: <FaJs />, name: "JavaScript", color: "hover:text-yellow-400" },
    { icon: <FaReact />, name: "React", color: "hover:text-cyan-400" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "hover:text-sky-400" },
    { icon: <FaPhp />, name: "PHP", color: "hover:text-indigo-400" },
    { icon: <SiLaravel />, name: "Laravel", color: "hover:text-red-500" },
    { icon: <SiCodeigniter />, name: "CodeIgniter", color: "hover:text-orange-500" },
    { icon: <SiPython />, name: "Python", color: "hover:text-yellow-400" },
    { icon: <SiMysql />, name: "MySQL", color: "hover:text-blue-400" },
    { icon: <SiFirebase />, name: "Firebase", color: "hover:text-yellow-400" },
    { icon: <SiExpress />, name: "Express", color: "hover:text-gray-300" },
    { icon: <SiFlutter />, name: "Flutter", color: "hover:text-blue-400" },
    { icon: <SiDart />, name: "Dart", color: "hover:text-sky-500" },
    { icon: <SiIonic />, name: "Ionic", color: "hover:text-cyan-400" },

  ]

  const tools = [
    { icon: <VscCode />, name: "VS Code", color: "hover:text-blue-400" },
    { icon: <FaGitAlt />, name: "Git", color: "hover:text-orange-500" },
    { icon: <FaGithub />, name: "GitHub", color: "hover:text-white" },
    { icon: <FaFigma />, name: "Figma", color: "hover:text-pink-400" },
    { icon: <SiGooglecolab />, name: "Colab", color: "hover:text-orange-400" },
    { icon: <SiPostman />, name: "Postman", color: "hover:text-orange-500" },
    { icon: <SiVite />, name: "Vite", color: "hover:text-purple-400" },
    { icon: <SiXampp />, name: "XAMPP", color: "hover:text-orange-400" },
    { icon: <FaDatabase />, name: "RapidMiner" },
    { icon: <FaServer />, name: "Laragon" },
    { icon: <FaNetworkWired />, name: "Cisco Packet Tracer" },
    { icon: <FaSearch />, name: "FTK Imager" },


  ]

  return (
    <section id="about" className="relative py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* TOP WAVE GLOW BORDER */}
      <motion.div
        className="absolute top-0 left-0 w-full h-32 pointer-events-none z-20 overflow-hidden"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          y: [0, 4, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        {/* BACK GLOW WAVE */}
        <svg
          className="absolute top-[-10px] w-full h-40 blur-3xl opacity-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,40 C200,90 400,0 600,40 C800,90 1000,0 1200,40"
            fill="none"
            stroke="rgba(168,85,247,0.6)"
            strokeWidth="18"
            animate={{
              d: [
                "M0,40 C200,90 400,0 600,40 C800,90 1000,0 1200,40",
                "M0,40 C200,0 400,90 600,40 C800,0 1000,90 1200,40",
                "M0,40 C200,90 400,0 600,40 C800,90 1000,0 1200,40"
              ]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>

        {/* MID WAVE CORE */}
        <svg
          className="absolute top-[-6px] w-full h-40"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,40 C200,70 400,10 600,40 C800,70 1000,10 1200,40"
            fill="none"
            stroke="rgba(236, 72, 236, 0.85)"
            strokeWidth="10"
            strokeLinecap="round"
            animate={{
              d: [
                "M0,40 C200,70 400,10 600,40 C800,70 1000,10 1200,40",
                "M0,40 C200,10 400,70 600,40 C800,10 1000,70 1200,40",
                "M0,40 C200,70 400,10 600,40 C800,70 1000,10 1200,40"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>

        {/* FRONT HIGHLIGHT */}
        <svg
          className="absolute top-[-4px] w-full h-40"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,40 C200,55 400,25 600,40 C800,55 1000,25 1200,40"
            fill="none"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{
              d: [
                "M0,40 C200,55 400,25 600,40 C800,55 1000,25 1200,40",
                "M0,40 C200,25 400,55 600,40 C800,25 1000,55 1200,40",
                "M0,40 C200,55 400,25 600,40 C800,55 1000,25 1200,40"
              ]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>

      </motion.div>
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* ANIMATED BG */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 -z-10 opacity-20 bg-[linear-gradient(270deg,#a855f7,#ec4899,#9333ea)] bg-[length:400%_400%]"
      />

      {/* ABOUT TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">
          About <span className="text-purple-400">Me</span>
        </h2>

        <p className="text-gray-400 leading-relaxed">
        I'm an Informatics graduate passionate about Web Development, UI/UX Design, and Data Science. 
        I build responsive and user-focused web applications, design intuitive user experiences, and explore data to generate meaningful insights.
        I am continuously learning and improving my skills across these fields. 
        Let’s connect and build something impactful together!
        </p>
      </motion.div>

      {/* TECH & TOOLS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-16"
      >

        <h3 className="text-xl font-semibold mb-6 text-center">
          Tech Stack & Tools
        </h3>

        {/* BUTTON */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("tech")}
            className={`px-5 py-2 rounded-full border transition ${
              activeTab === "tech"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent"
                : "border-white/20 hover:border-purple-400"
            }`}
          >
            Tech Stack
          </button>

          <button
            onClick={() => setActiveTab("tools")}
            className={`px-5 py-2 rounded-full border transition ${
              activeTab === "tools"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent"
                : "border-white/20 hover:border-purple-400"
            }`}
          >
            Tools
          </button>
        </div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {(activeTab === "tech" ? techStack : tools).map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25, delay: i * 0.03 }}
                className="relative flex flex-col items-center gap-2 p-4 rounded-xl 
                bg-white/5 border border-white/10 
                hover:border-purple-400 
                transition group overflow-hidden"
              >
                
                {/* 🔥 HOVER GLOW LAYER */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* ICON */}
                <div className="relative text-3xl text-gray-300 group-hover:text-white transition z-10">
                  {item.icon}
                </div>

                {/* TEXT */}
                <span className="relative text-xs text-gray-400 group-hover:text-white z-10">
                  {item.name}
                </span>

              </motion.div>

            ))}
          </div>
        </AnimatePresence>


      </motion.div>

    </section>
  )
}
