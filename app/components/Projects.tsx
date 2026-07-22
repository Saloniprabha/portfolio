"use client";

import { useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Ask AI – AI-powered Chatbot",
    description: `Ask AI is a modern AI-powered chatbot built with React and Gemini AI. It allows users to ask questions and receive intelligent, real-time responses through a clean and responsive interface.

Tech Stack:
• React.js • Tailwind CSS • JavaScript (ES6+) • Gemini API • Local Storage`,
    link: "https://ask-ai.surge.sh",
    image: "/projects/as.png",
  },
  {
    id: 2,
    title: "Facial Recognition Attendance System",
    description: `A Python-based desktop application that automates attendance management using facial recognition technology.

Tech Stack:
• Python • OpenCV • Tkinter • SQLite`,
    image: "/projects/attendancesys.png",
  },
  {
    id: 3,
    title: "TaskFlow – Todo Application",
    description: `Developed a modern Todo application with add, edit, delete and persistent local storage.

Tech Stack:
• HTML5 • CSS3 • JavaScript • Local Storage`,
    link: "https://bespoke-pika-271518.netlify.app",
    image: "/projects/project-1.png",
  },
  {
    id: 4,
    title: "Learnova – E-Learning Landing Page",
    description: `Responsive e-learning landing page built using HTML and CSS.

Tech Stack:
• HTML5 • CSS3 • Responsive Web Design`,
    link: "https://friendly-madeleine-61882a.netlify.app",
    image: "/projects/project-2.png",
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -450 : 450,
      behavior: "smooth",
    });
  };

  return (
    <section id="project" className="py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-5xl font-bold text-white">Featured Projects</h2>

            <p className="text-gray-400 mt-3">Swipe or scroll horizontally →</p>
          </div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-purple-600 transition text-white text-xl"
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-purple-600 transition text-white text-xl"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onWheel={(e) => {
            e.preventDefault();
            e.currentTarget.scrollLeft += e.deltaY;
          }}
          className="
            flex
            gap-8
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            no-scrollbar
            pb-4
          "
        >
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="
                w-[90vw]
                md:w-[70vw]
                lg:w-[60vw]
                snap-center
                flex-shrink-0
                rounded-3xl
                bg-white/5
                backdrop-blur-md
                border
                border-white/10
                overflow-hidden
                shadow-2xl
                hover:-translate-y-2
                hover:border-purple-500/50
                transition-all
                duration-300
              "
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-8">
                <p className="text-purple-400 text-sm font-medium mb-2">
                  Featured Project
                </p>

                <h3 className="text-3xl font-bold text-white mb-5">
                  {project.title}
                </h3>

                <p className="text-gray-300 whitespace-pre-line leading-8">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      mt-6
                      text-purple-400
                      hover:text-purple-300
                      font-medium
                    "
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
