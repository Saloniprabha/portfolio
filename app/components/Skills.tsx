const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive web applications",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
    size: "lg:col-span-2",
  },

  {
    title: "Programming & CS Fundamentals",
    description: "Core concepts for software development",
    skills: [
      "Python",
      "Data Structures & Algorithms",
      "OOP Concepts",
      "DBMS",
      "Computer Networks",
      "SQL",
    ],
    size: "lg:col-span-1",
  },

  {
    title: "Tools & Development",
    description: "Tools I use for development and deployment",
    skills: ["Git", "GitHub", "VS Code", "Vite", "Vercel", "Netlify"],
    size: "lg:col-span-1",
  },

  {
    title: "Data & Analytics",
    description: "Data analysis and visualization skills",
    skills: ["Pandas", "NumPy", "Matplotlib", "Power BI", "Excel"],
    size: "lg:col-span-2",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-5">
          Skills & Technologies
        </h2>

        <p className="text-center text-white/70 max-w-2xl mx-auto mb-16">
          Technologies and tools I use to build responsive, scalable and
          user-friendly applications.
        </p>

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-6
        "
        >
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`
                ${category.size}
                group
                rounded-3xl
                bg-white/5
                backdrop-blur-md
                border
                border-white/10
                p-8
                hover:border-purple-400/50
                hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]
                transition-all
                duration-300
              `}
            >
              <h3
                className="
                text-2xl
                font-bold
                text-white
                mb-3
              "
              >
                {category.title}
              </h3>

              <p
                className="
                text-white/60
                mb-6
              "
              >
                {category.description}
              </p>

              <div
                className="
                flex
                flex-wrap
                gap-3
              "
              >
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-purple-500/10
                      border
                      border-purple-400/20
                      text-purple-200
                      text-sm
                      hover:bg-purple-500/20
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
