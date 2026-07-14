import Image from "next/image";

const skills = [
  { name: "HTML5", icon: "/skills/html.png" },
  { name: "CSS3", icon: "/skills/css.png" },
  { name: "JavaScript", icon: "/skills/js.png" },
  { name: "React.js", icon: "/skills/react.png" },
  { name: "Python", icon: "/skills/python.png" },
  { name: "SQL", icon: "/skills/sql.png" },
  { name: "Git", icon: "/skills/git.png" },
  { name: "VS Code", icon: "/skills/vs.png" },
  { name: "NumPy", icon: "/skills/numpy.png" },
  { name: "Jupyter", icon: "/skills/jupyter.png" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">

        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-5">
          Skills & Technologies
        </h2>

        <p className="text-center text-white/70 max-w-2xl mx-auto mb-16">
          Technologies and tools I use to build responsive,
          scalable and user-friendly web applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group
                rounded-2xl
                border
                border-purple-500/30
                bg-[#141021]
                p-6
                flex
                flex-col
                items-center
                justify-center
                hover:border-purple-400
                hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={55}
                height={55}
                className="object-contain mb-5 transition-transform duration-300 group-hover:scale-110"
              />

              <h3 className="text-white font-semibold text-lg text-center">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}