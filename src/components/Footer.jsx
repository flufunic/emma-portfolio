import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-gray-300 mt-20 border-t border-white/10">

      {/* 🌈 ANIMATED BACKGROUND GLOW */}
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full top-[-200px] left-[-150px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 20, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[450px] h-[450px] bg-pink-500/20 blur-[160px] rounded-full bottom-[-200px] right-[-150px]"
      />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Emma Sarkilla
          </h3>
          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            Informatics Engineering | Jenderal Soedirman University
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
            <li><a href="#experience" className="hover:text-purple-400 transition">Experiences</a></li>
            <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect with me
          </h3>

          <div className="space-y-3 text-sm">

            <a href="mailto:youremail@gmail.com" className="flex items-center gap-3 hover:text-purple-400 transition">
              <FaEnvelope />
              sarkillaemmma@gmail.com
            </a>

            <a href="https://instagram.com/emsarrr_" target="_blank" className="flex items-center gap-3 hover:text-pink-400 transition">
              <FaInstagram />
              Instagram
            </a>

            <a href="https://linkedin.com/in/emma-sarkilla-5097832a2/" target="_blank" className="flex items-center gap-3 hover:text-blue-400 transition">
              <FaLinkedin />
              LinkedIn
            </a>

            <a href="https://github.com/flufunic" target="_blank" className="flex items-center gap-3 hover:text-gray-200 transition">
              <FaGithub />
              GitHub
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="relative border-t border-white/10 py-4 text-center text-sm text-gray-500">
        © 2026 Emma Portfolio. All rights reserved.
      </div>

    </footer>
  )
}