import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 max-w-6xl mx-auto z-10">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-black"></div>

      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{ x: [0, 20, -20, 0], y: [0, -15, 15, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute w-[420px] h-[420px] bg-purple-500/10 blur-[160px] rounded-full top-20 left-1/3 -z-10"
      />

      <motion.div
        animate={{ x: [0, -15, 15, 0], y: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute w-[320px] h-[320px] bg-pink-500/10 blur-[180px] rounded-full bottom-10 right-1/3 -z-10"
      />

      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          {/* 🔥 GLOW BELAKANG */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-72 h-72 rounded-full bg-purple-500 blur-[120px] -z-10"
          />

          <div className="relative w-56 h-56">

            {/* 🌊 WAVE ORBIT */}
            <motion.svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 200 200"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            >

              {/* OUTER GLOW WAVE */}
              <motion.path
                fill="none"
                stroke="rgba(192,132,252,0.8)"
                strokeWidth="6"
                strokeLinecap="round"
                className="blur-md"
                animate={{
                  d: [
                    "M100,10 C140,10 190,60 190,100 C190,140 140,190 100,190 C60,190 10,140 10,100 C10,60 60,10 100,10",
                    "M100,10 C150,20 180,70 190,100 C180,150 130,180 100,190 C50,180 20,130 10,100 C20,50 70,20 100,10",
                    "M100,10 C140,10 190,60 190,100 C190,140 140,190 100,190 C60,190 10,140 10,100 C10,60 60,10 100,10"
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* INNER WAVE */}
              <motion.path
                fill="none"
                stroke="rgba(236,72,153,0.9)"
                strokeWidth="8"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M100,15 C135,15 185,65 185,100 C185,135 135,185 100,185 C65,185 15,135 15,100 C15,65 65,15 100,15",
                    "M100,15 C150,25 175,75 185,100 C175,150 125,175 100,185 C50,175 25,125 15,100 C25,50 75,25 100,15",
                    "M100,15 C135,15 185,65 185,100 C185,135 135,185 100,185 C65,185 15,135 15,100 C15,65 65,15 100,15"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* DASHED RING */}
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="4"
                strokeDasharray="6 10"
              />

            </motion.svg>

            {/* FOTO */}
            <motion.img
              src="/gg.jpg"
              alt="Emma"
              animate={{
                y: [0, -5, 0],
                boxShadow: [
                  "0 10px 25px rgba(0,0,0,0.4)",
                  "0 20px 40px rgba(168,85,247,0.3)",
                  "0 10px 25px rgba(0,0,0,0.4)"
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-56 h-56 object-cover rounded-full z-10"
            />

            {/* ✨ GLASS HIGHLIGHT */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="block text-white text-xl md:text-2xl mb-1">
              Hi, I'm
            </span>

            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[900, "Emma Sarkilla"]}
                speed={40}
                repeat={0}
              />
            </span>
          </h1>

          <span className="block text-base md:text-lg text-gray-300 mb-2">
            Web Developer | UI/UX Designer | Data Science Enthusiast
          </span>

          <p className="text-gray-400 mb-4">
            Bachelor's Degree in Informatics Engineering | Fresh Graduate Student at Jenderal Soedirman University
          </p>

          {/* 🔥 FIX UTAMA: kasih z-index */}
          <div className="flex gap-3 justify-center md:justify-start relative z-30">

         <button
          onClick={() => window.open('/CV.pdf', '_blank')}
          className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
        >
          View My CV
        </button>


            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-4 py-2 text-sm rounded-full border border-white/20 hover:border-purple-400 transition"
            >
              Contact Me
            </button>

          </div>

        </motion.div>

      </div>

      {/* 🔥 FIX: turunin layer */}
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-0">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-black blur-xl opacity-70" />
      </div>

      {/* HERO BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-0">
        
        {/* fade utama */}
        <div className="absolute bottom-0 left-0 w-full h-full 
          bg-gradient-to-t from-black via-black/80 to-transparent" 
        />

        {/* blur halus */}
        <div className="absolute bottom-0 left-0 w-full h-40 
          bg-black blur-xl opacity-70" 
        />

      </div>

    </section>
  )
}