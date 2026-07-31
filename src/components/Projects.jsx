import { FaGithub } from 'react-icons/fa'
import { SiGooglecolab, SiFigma } from 'react-icons/si'
import { motion } from 'framer-motion'
import { useState } from 'react'

const data = [
  {
    title: "KANCIL AKURAT",
    desc: "Kancil Akurat is a web-based budget management application designed to help users manage and monitor financial data efficiently. The system provides dashboard and CRUD functionalities, enabling users to organize, update, and track budget information through a centralized platform.",
    tech: ["Laravel", "PHP", "MySQL", "Laragon", "Bootstrap"],
    github: "https://github.com/flufunic/kancilakurat",
    demo: "#",
    image: "/projects/akurat.png" 
  },
  {
    title: "XMANAH",
    desc: "Developed backend features and designed user interfaces for a location-based mobile application, enabling users to access integrated information about nearby boarding houses, restaurants, healthcare facilities, places of worship, and educational institutions.",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/flufunic/xmanah",
    demo: "#",
    image: "/projects/xmanah.png"
  },
  {
    title: "Sentiment Analysis on Qpon Using IndoBERT",
    desc: "Developed a sentiment analysis model using IndoBERT to classify Qpon application reviews into positive and negative sentiments. Performed data preprocessing, model training, and evaluation to analyze user satisfaction and identify common issues based on review data.",
    tech: ["Python", "IndoBERT", "Transformers", "PyTorch", "Pandas", "Google Colab"],
    colab: "https://colab.research.google.com/drive/1plA54QsI5AZwtoptevbOMlR6M8JHY5w1?usp=sharing",
    demo: "#",
    image: "/projects/qpon.png"
  },
  {
    title: "KANCIL SAPA",
    desc: "Built a web-based WhatsApp broadcast application with contact management, QR code authentication, and bulk messaging functionalities to streamline communication and message distribution.",
    tech: ["HTML", "JavaScript", "Bootstrap", "Node.js", "Express", "Venom Bot"],
    github: "https://github.com/flufunic/kancilsapa",
    demo: "#",
    image: "/projects/sapa.png"
  },
  {
    title: "CEK PENERIMA BANSOS",
    desc: "Developed a web-based social assistance eligibility checking application for a community service (KKN) program. Implemented a verification feature that enables residents to check their beneficiary status using their National Identification Number (NIK).",
    tech: ["Flask", "Python","Bootstrap"],
    github: "https://github.com/flufunic/coba",
    demo: "#",
    image: "/projects/cek.png"
  },
  {
    title: "AGENDA SIPIL",
    desc: "Developed a web-based agenda management application by implementing dashboard and CRUD functionalities. The system enables users to create, update, organize, and monitor schedules through a centralized platform.",
    tech: ["Laravel", "PHP", "MySQL", "Laragon", "Bootstrap"],
    github: "https://github.com/flufunic/agendasipil",
    demo: "#",
    image: "/projects/sipil.png"
  },
  {
    title: "Flower Classification Using MobileNetV2",
    desc: "Developed a flower image classification model using MobileNetV2 and transfer learning. Performed data preprocessing, model training, and evaluation in Google Colab to accurately classify flower images into multiple categories.",
    tech: ["Python", "TensorFlow", "Keras", "MobileNetV2", "Google Colab", "NumPy", "Matplotlib"],
    colab: "https://colab.research.google.com/drive/1o1KONeKSnmkR3gTZy-tb7VhU-qio7Az1?usp=sharing",
    demo: "#",
    image: "/projects/flower.png"
  },
  {
    title: "Gold Price Forecasting Using Deep Learning (LSTM)",
    desc: "Developed a gold price forecasting model using LSTM regression. The project aims to predict future gold prices based on historical data, capturing long-term patterns and trends in price movements to support analysis and decision-making.",
    tech: ["Python", "TensorFlow", "Keras", "MobileNetV2", "Google Colab", "NumPy", "Matplotlib"],
    colab: "https://colab.research.google.com/drive/1uYIbdlwzm-To6uffJLJObYTi_8FCkKdm?usp=sharing",
    demo: "#",
    image: "/projects/gold.png"
  },
  {
    title: "PERIKSA",
    desc: "Designed the UI/UX of a web-based complaint management platform using Figma. Developed wireframes, prototypes, and user-centered interfaces to improve the user experience for submitting and tracking complaints, criticisms, and suggestions.",
    tech: ["Figma", "User Flow", "Wireframing", "Prototyping", "Design System"],
    figma: "https://www.figma.com/proto/KONXGsbO4WgjZbzyp8XxJh/PERIKSA?node-id=22-258&starting-point-node-id=22%3A2&t=dK0ForkPTnlRqYvc-1&scaling=scale-down-width&content-scaling=fixed&hide-ui=1",
    demo: "#",
    image: "/projects/periksa.png"
  },
  {
    title: "AnemiaCare",
    desc: "Designed the UI/UX of a mobile health application using Figma. Developed user flows, wireframes, and interactive prototypes to support anemia risk screening and doctor consultation with a user-centered design approach.",
    tech: ["Figma", "User Flow", "Wireframing", "Prototyping", "Design System"],
    figma: "https://www.figma.com/proto/LhyF1Wq8uWRF8EtnRuRW56/AnemiaCare?node-id=4-2&p=f&t=2ZDHY5AGLBqlQkjf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    demo: "#",
    image: "/projects/anemia.png"
  },
  {
    title: "RAPUNZEL",
    desc: "Designed the UI/UX of a storytelling website using Figma. Developed user flows, wireframes, and visually engaging interfaces to present Rapunzel's story, supporting characters, and related content through an intuitive user experience.",
    tech: ["Figma", "User Flow", "Wireframing", "Prototyping", "Design System"],
    figma: "https://www.figma.com/proto/ZFr2yFI5UxItQyeXfVpSCT/Project_pemweb?node-id=1-4&p=f&t=zTH1ToQ4n9FBcZbo-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4",
    demo: "#",
    image: "/projects/rapunzel.png"
  },
  {
    title: "PORTFOLIO - EMMA SARKILLA",
    desc: "Designed and developed a personal portfolio website to showcase my projects, technical skills, and professional experience. Built a responsive and user-friendly interface that highlights my expertise in software development, web development, UI/UX design, and data science.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    github: "https://github.com/flufunic/emma-portfolio",
    demo: "#",
    image: "/projects/port.png"
  },
]

export default function Projects() {

  const [showAll, setShowAll] = useState(false)

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold mb-12 text-center">
        My <span className="text-purple-400">Projects</span>
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {(showAll ? data : data.slice(0, 3)).map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl transition group"
          >
            
            {/* Image */}
            <div className="mb-4 overflow-hidden rounded-xl">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
              {p.title}
            </h3>

            {/* Desc */}
            <p className="text-gray-400 text-sm mb-4">
              {p.desc}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-purple-400/10 text-purple-300 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">

              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full border border-white/20 text-sm text-gray-300 hover:text-white hover:border-purple-400 transition flex items-center gap-2"
                >
                  <FaGithub />
                  Github
                </a>
              )}

              {p.colab && (
                <a
                  href={p.colab}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full border border-white/20 text-sm text-gray-300 hover:text-white hover:border-purple-400 transition flex items-center gap-2"
                >
                  <SiGooglecolab />
                  Colab
                </a>
              )}

              {p.figma && (
                <a
                  href={p.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full border border-white/20 text-sm text-gray-300 hover:text-white hover:border-purple-400 transition flex items-center gap-2"
                >
                  <SiFigma />
                  Figma
                </a>
              )}

            </div>

          </motion.div>
        ))}

      </div>

      {/* SHOW MORE BUTTON */}
      {data.length > 3 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full border border-white/20 hover:border-purple-400 text-sm transition"
          >
            {showAll ? "Show Less" : "Show More Projects"}
          </button>
        </div>
      )}

    </section>
  )
}
