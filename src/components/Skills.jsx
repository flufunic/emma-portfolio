import { motion } from 'framer-motion'
import { useState } from 'react'

const experiences = [
  {
    name: "PT Sumber Segara Primadaya Cilacap",
    type: "works",
    role: "IT Division Intern | July 2024 - Aug 2024",
    desc: "Developed and maintained backend functionalities for a civil agenda website using Laravel 11, focusing on post-login dashboard features and CRUD operations. Implemented server-side logic for managing user data, ensuring secure authentication, and optimizing data processing for efficient system performance.",
    image: "/experinces/spp.jpg",
    logo: "/logo/s2p.png"
  },
  {
    name: "Kantor Imigrasi Kelas I TPI Cilacap",
    type: "works",
    role: "Public Relations Division Intern | July 2025 - Aug 2025",
    desc: "Contributed to the development and enhancement of internal web applications and public service platforms using Laravel and Yii frameworks to support digital transformation at the Immigration Office.",
    image: "/experinces/imigrasi.png",
    logo: "/logo/imigrasi.png"
  },
  {
    name: "Kantor Telkom Witel Purwokerto",
    type: "works",
    role: "Infrastructure Division Intern | Sep 2025 - Oct 2025",
    desc: "Supported infrastructure division operations by performing daily system monitoring and data validation to ensure accuracy and reliability of information",
    image: "/experinces/telkom.jpg",
    logo: "/logo/telkom.png"
  },
  {
    name: "Himpunan Mahasiswa Informatika (HMIF) Unsoed",
    type: "organizations",
    role: "Staff of Public Relations Division | Mar 2023 - Dec 2023",
    desc: "Served as the project leader for the 'Relasi / Study Banding' program, coordinating collaborations with other student organizations. Successfully executed the program 5 times with effective team coordination and communication.",
    image: "/experinces/stuban.jpg",
    logo: "/logo/hmiff.png"
  },
  {
    name: "Perhimpunan Mahasiswa Informatika dan Komputer Nasional Wilayah VII Jateng",
    type: "organizations",
    role: "Staff of Human Resources Development Division | May 2023 - Mar 2024",
    desc: "Led the cloud computing workshop program in collaboration with Gmedia Jogja, overseeing end-to-end execution from planning to implementation. Coordinated event preparation, including speaker selection, scheduling, and logistics, ensuring a well-organized and successful event.",
    image: "/experinces/permi.png",
    logo: "/logo/permikomnas.png"
  },
  {
    name: "Senyum Anak Nusantara Chapter Purwokerto",
    type: "organizations",
    role: "Staff of Public Relations Division | Apr 2024 - Dec 2024",
    desc: "Contributed to educational and social initiatives for children by supporting learning activities and organizing community events, fostering an engaging and impactful learning environment.",
    image: "/experinces/san.jpg",
    logo: "/logo/san.png"
  },
  {
    name: "Maskrab Makrab Informatika",
    type: "committee",
    role: "Staff of Group Companion Division | Aug 2024 - Feb 2025",
    desc: "Acted as a group mentor during the department orientation program for two periods, mentoring and assisting 30+ new students in their transition to university life. Led group discussions, supported activities, and fostered a supportive and inclusive environment.",
    image: "/experinces/mm.jpg",
    logo: "/logo/mm.png"
  },
  {
    name: "Soedirman Technophoria",
    type: "committee",
    role: "Staff of Public Relations Division | Aug 2023 - Nov 2023",
    desc: "Led promotional and outreach efforts for the Soedirman Technoporia competition, engaging diverse audiences to increase visibility and participation. Coordinated with judges and seminar speakers to support seamless event execution.",
    image: "/experinces/stech.jpg",
    logo: "/logo/stech.png"
  },
  {
    name: "Festival Teknologi Jawa Tengah",
    type: "committee",
    role: "Staff of Food and Beverage Division | Aug 2022 - Sep 2022",
    desc: "Handled food and beverage coordination, overseeing procurement and distribution to ensure smooth operations and participant satisfaction during the event.",
    image: "/experinces/ftj.png",
    logo: "/logo/ftj.png"
  },
  {
    name: "Unsoed Day Cilacap",
    type: "committee",
    role: "Staff of Public Relations Division | Des 2024 - Feb 2024",
    desc: "Coordinated with schools in Cilacap to organize university introduction programs for Universitas Jenderal Soedirman. Delivered presentations and Q&A sessions to promote study programs, scholarships, and campus life to prospective students.",
    image: "/experinces/udc.png",
    logo: "/logo/udc.png"
  },
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