import { motion } from 'framer-motion'
import { useState } from 'react'

const experiences = [
  {
    name: "PT Sumber Segara Primadaya Cilacap",
    type: "works",
    role: "Web Developer Intern",
    desc: "Building responsive frontend applications using React and contributing to web-based system development for internal tools and learning platforms.",
    image: "/gambar1.jpg",
    logo: "/logo/s2p.png"
  },
  {
    name: "Kantor Imigrasi Kelas I TPI Cilacap",
    type: "works",
    role: "Backend Developer",
    desc: "Developing structured backend systems using Laravel with database integration and API handling.",
    image: "/experinces/imigrasi.png",
    logo: "/logo/imigrasi.png"
  },
  {
    name: "Kantor Telkom Witel Purwokerto",
    type: "works",
    role: "Mobile Developer",
    desc: "Creating cross-platform mobile applications using Flutter and Dart.",
    image: "/experinces/telkom.jpg",
    logo: "/logo/telkom.png"
  },
  {
    name: "Organisasi Kampus",
    type: "organizations",
    role: "Member / Coordinator",
    desc: "Active involvement in campus organization activities, teamwork coordination, and event support.",
    image: "/organisasi.jpg",
    logo: "/gambar1.jpg"
  },
  {
    name: "Kepanitiaan Event",
    type: "committee",
    role: "Committee Member",
    desc: "Experience in organizing and managing campus events, including technical and operational support.",
    image: "/event.jpg",
    logo: "/gambar1.jpg"
  }
]

const filters = ["all", "works", "organizations", "committee"]

export default function Experience() {

  const [activeFilter, setActiveFilter] = useState("all")
  const [showAll, setShowAll] = useState(false)

  const filtered =
    activeFilter === "all"
      ? experiences
      : experiences.filter((e) => e.type === activeFilter)

  const visible = showAll ? filtered : filtered.slice(0, 3)

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">

      {/* TITLE */}
      <h2 className="text-3xl font-bold text-center mb-10">
        My <span className="text-purple-400">Experience</span>
      </h2>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => {
              setActiveFilter(f)
              setShowAll(false)
            }}
            className={`px-5 py-2 rounded-full border transition capitalize ${
              activeFilter === f
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent"
                : "border-white/20 text-white hover:border-purple-400"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {visible.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden h-80 border border-white/10 group"
          >

            {/* BACKGROUND IMAGE */}
            <img
              src={exp.image}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60" />

            {/* CONTENT */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">

              {/* TOP SECTION */}
              <div>

                {/* LOGO + TITLE */}
                <div className="flex items-center gap-3 mb-2">

                  <img
                    src={exp.logo}
                    className="w-10 h-10 object-contain"
                  />

                  <h3 className="text-white font-semibold text-lg">
                    {exp.name}
                  </h3>

                </div>
              {/* ROLE */}
              <p className="text-sm text-white">
                {exp.role}
              </p>

              </div>

              {/* DESCRIPTION BOX (SCROLL) */}
              <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 max-h-32 overflow-y-auto custom-scroll">

                <p className="text-gray-200 text-sm whitespace-pre-line">
                  {exp.desc}
                </p>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {filtered.length > 3 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full border border-white/20 text-white hover:border-purple-400 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  )
}