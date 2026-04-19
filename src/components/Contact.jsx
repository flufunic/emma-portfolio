import { FaLinkedin, FaEnvelope, FaInstagram, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center max-w-4xl mx-auto">

      <h2 className="text-3xl font-bold mb-4">
        Contact <span className="text-purple-400">Me</span>
      </h2>

      <p className="text-gray-400 mb-10">
       Interested in collaborating or have any questions? Feel free to reach out.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Email */}
        <motion.a
          href="mailto:sarkillaemma@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl hover:border-purple-400 transition"
        >
          <FaEnvelope className="text-purple-400 text-xl" />
          <span>Email</span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/emma-sarkilla-5097832a2/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl hover:border-purple-400 transition"
        >
          <FaLinkedin className="text-purple-400 text-xl" />
          <span>LinkedIn</span>
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://instagram.com/emsarrr_"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl hover:border-purple-400 transition"
        >
          <FaInstagram className="text-purple-400 text-xl" />
          <span>Instagram</span>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/flufunic"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl hover:border-purple-400 transition"
        >
          <FaGithub className="text-purple-400 text-xl" />
          <span>GitHub</span>
        </motion.a>

      </div>
    </section>
  )
}