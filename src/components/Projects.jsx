import { FaGithub } from 'react-icons/fa'
import { SiGooglecolab, SiFigma } from 'react-icons/si'
import { motion } from 'framer-motion'
import { useState } from 'react'

const data = [
  {
    title: "KANCIL AKURAT",
    desc: "Kancil Akurat is a web-based application for managing budget data in an organized and efficient way. Users can input, edit, and monitor data through a simple and user-friendly dashboard.",
    tech: ["Laravel", "PHP", "MySQL", "Laragon", "Bootstrap"],
    github: "https://github.com/flufunic/kancilakurat",
    demo: "#",
    image: "/gambar1.jpg" 
  },
  {
    title: "KANCIL SAPA",
    desc: "Kancil Sapa is a web-based application for sending WhatsApp broadcast messages efficiently. Users can upload a list of phone numbers, connect their WhatsApp account via QR code, and send messages with optional attachments.",
    tech: ["HTML", "JavaScript", "Bootstrap", "Node.js", "Express", "Venom Bot"],
    github: "https://github.com/flufunic/kancilsapa",
    demo: "#",
    image: "/gambar1.jpg"
  },
  {
    title: "CEK PENERIMA BANSOS",
    desc: "The Social Assistance Recipient Check website is a web-based application developed as part of a KKN program in Adisara Village to help residents easily check their eligibility for social assistance. Through this website, users can verify whether they are registered as beneficiaries by simply entering specific data, such as their national ID number (NIK).",
    tech: ["Flask", "Python","Bootstrap"],
    github: "https://github.com/flufunic/coba",
    demo: "#",
    image: "/gambar1.jpg"
  },
  {
    title: "AGENDA SIPIL",
    desc: "Agenda Sipil is a web-based application designed to manage and organize activities or schedules in a structured way. Through this website, users can easily add, edit, and monitor their agendas within a centralized system.",
    tech: ["Laravel", "PHP", "MySQL", "Laragon", "Bootstrap"],
    github: "https://github.com/flufunic/agendasipil",
    demo: "#",
    image: "/gambar1.jpg"
  },
  {
    title: "XMANAH",
    desc: "Xmanah is a mobile application designed to provide integrated local information for users in one platform. It helps users find nearby boarding houses, places to eat, places of worship, healthcare facilities, and educational institutions quickly and easily.",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/flufunic/agendasipil",
    demo: "#",
    image: "/gambar1.jpg"
  },
  {
    title: "Sentiment Analysis on Qpon Using IndoBERT",
    desc: "Sentiment Analysis of the Qpon application is a project that utilizes the IndoBERT model to classify user reviews into positive and negative sentiments. This analysis helps understand user satisfaction, identify common issues, and evaluate overall app performance based on real user feedback.",
    tech: ["Python", "IndoBERT", "Transformers", "PyTorch", "Pandas", "Google Colab"],
    colab: "https://colab.research.google.com/drive/1plA54QsI5AZwtoptevbOMlR6M8JHY5w1?usp=sharing",
    demo: "#",
    image: "/gambar1.jpg"
  },
  {
    title: "Flower Classification Using MobileNetV2",
    desc: "Flower Classification using MobileNetV2 is a deep learning project that classifies flower images into several categories using a lightweight and efficient model. This project was conducted in Google Colab by utilizing transfer learning to achieve accurate classification results.",
    tech: ["Python", "TensorFlow", "Keras", "MobileNetV2", "Google Colab", "NumPy", "Matplotlib"],
    colab: "https://colab.research.google.com/drive/1o1KONeKSnmkR3gTZy-tb7VhU-qio7Az1?usp=sharing",
    demo: "#",
    image: "/gambar1.jpg"
  },
  {
    title: "Gold Price Forecasting Using Deep Learning (LSTM)",
    desc: "Gold price prediction using LSTM regression is a time series machine learning project that aims to forecast future gold prices based on historical data. The LSTM model is used to capture long-term patterns and trends in price movements, enabling it to produce continuous value predictions that can support analysis and decision-making.",
    tech: ["Python", "TensorFlow", "Keras", "MobileNetV2", "Google Colab", "NumPy", "Matplotlib"],
    colab: "https://colab.research.google.com/drive/1uYIbdlwzm-To6uffJLJObYTi_8FCkKdm?usp=sharing",
    demo: "#",
    image: "/gambar1.jpg"
  },
  {
    title: "PERIKSA",
    desc: " UI/UX design for Periksa, a web-based complaint, criticism, and suggestion platform for the Faculty of Engineering, UNSOED. The design focuses on a simple, user-friendly interface to make it easier for users to submit and track reports.",
    tech: ["Figma", "User Flow", "Wireframing", "Prototyping", "Design System"],
    figma: "https://www.figma.com/proto/KONXGsbO4WgjZbzyp8XxJh/PERIKSA?node-id=22-258&starting-point-node-id=22%3A2&t=dK0ForkPTnlRqYvc-1&scaling=scale-down-width&content-scaling=fixed&hide-ui=1",
    demo: "#",
    image: "/gambar1.jpg"
  },
  {
    title: "AnemiaCare",
    desc: "Anemia Care is a UI/UX design for an application that helps users check their risk of anemia and consult with doctors. The design focuses on a simple and intuitive flow, with a clean interface to ensure users can easily complete screenings and access consultation features quickly and comfortably.",
    tech: ["Figma", "User Flow", "Wireframing", "Prototyping", "Design System"],
    figma: "https://www.figma.com/proto/LhyF1Wq8uWRF8EtnRuRW56/AnemiaCare?node-id=4-2&p=f&t=2ZDHY5AGLBqlQkjf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    demo: "#",
    image: "/gambar1.jpg"
  },
  {
    title: "RAPUNZEL",
    desc: "Rapunzel is a UI/UX website design that explores the character of Rapunzel in a more immersive way. The design presents her background story, supporting characters from the film, and additional related details through a structured and visually engaging interface, allowing users to easily navigate and understand the world of Rapunzel.",
    tech: ["Figma", "User Flow", "Wireframing", "Prototyping", "Design System"],
    figma: "https://www.figma.com/proto/ZFr2yFI5UxItQyeXfVpSCT/Project_pemweb?node-id=1-4&p=f&t=zTH1ToQ4n9FBcZbo-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4",
    demo: "#",
    image: "/gambar1.jpg"
  },
  {
    title: "PORTFOLIO - EMMA SARKILLA",
    desc:"This portfolio website showcases my skills, projects, and experience in Web Development, UI/UX Design, and Data Science. It provides an overview of the work I have done and highlights my ability to create responsive websites, design user-friendly interfaces, and work with data.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    github: "#",
    demo: "#",
    image: "/gambar1.jpg"
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
                  Code
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
