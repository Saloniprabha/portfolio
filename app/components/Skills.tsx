// import Image from "next/image";

// export default function About(): React.JSX.Element {

//   return (
//     <section id="about" className="py-20 px-6">
//       <div className="container mx-auto max-w-6xl">
//         <div className="text-center mb-16">
//           <p className="text-2xl max-w-6xl mx-auto">
//             I&apos;m currently looking to join a <span className="text-purple-400">cross-functional team</span><br/> <span className="text-sm">that values 
//             improving people&apos;s lives through accessible design</span>
//           </p>
//         </div>
//         <Image 
//           src="/assets/illustration.png"
//           alt="Skills"
//           width={800}
//           height={800}
//           className="object-cover mx-auto"
//           style={{ width: "auto", height: "auto" }}
//         />
//       </div>
//     </section>
//   );
// }


// export default function About() {
//   return (
//     <section id="about" className="py-20 px-6">
//       <div className="container mx-auto max-w-6xl">

//         <h2 className="text-4xl font-bold text-center text-white mb-12">
//           Skills
//         </h2>

//         <div className="flex flex-wrap justify-center gap-8">
//           {skills.map((skill) => (
//             <div
//               key={skill.name}
//               className="
//                 group
//                 flex
//                 flex-col
//                 items-center
//                 gap-2
//               "
//             >
//               <div
//                 className="
//                   w-20
//                   h-20
//                   rounded-full
//                   bg-slate-900
//                   border
//                   border-purple-600
//                   flex
//                   items-center
//                   justify-center
//                   shadow-lg
//                   shadow-purple-900/30
//                   transition-all
//                   duration-300
//                   hover:scale-110
//                   hover:shadow-purple-500/50
//                 "
//               >
//                 <Image
//                   src={skill.icon}
//                   alt={skill.name}
//                   width={40}
//                   height={40}
//                 />
//               </div>

//               <span className="text-sm text-white/70 group-hover:text-purple-400 transition-colors">
//                 {skill.name}
//               </span>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

import Image from "next/image";

const skills = [
  { name: "HTML", icon: "/skills/html.png" },
  { name: "CSS", icon: "/skills/css.png" },
  { name: "JavaScript", icon: "/skills/js.png" },
  { name: "Python", icon: "/skills/python.png" },
  { name: "React", icon: "/skills/react.png" },
  { name: "SQL", icon: "/skills/sql.png" },
  { name: "NumPy", icon: "/skills/numpy.png" },
  { name: "Git", icon: "/skills/git.png" },
  { name: "VS Code", icon: "/skills/vs.png" },
  { name: "Jupyter", icon: "/skills/jupyter.png" },
];

export default function Skills() {
  const radius = 180;

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-16">
          Skills & Technologies
        </h2>

        <div className="relative w-[500px] h-[500px] mx-auto">

          {/* Connecting Lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 500 500"
          >
            {skills.map((_, index) => {
              const angle = (index / skills.length) * 2 * Math.PI;

              const x = 250 + radius * Math.cos(angle);
              const y = 250 + radius * Math.sin(angle);

              return (
                <line
                  key={index}
                  x1="250"
                  y1="250"
                  x2={x}
                  y2={y}
                  stroke="#9333ea"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                />
              );
            })}
          </svg>

          {/* Center Circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div
              className="
                w-32 h-32
                rounded-full
                bg-gradient-to-br
                from-purple-500
                to-violet-700
                flex
                items-center
                justify-center
                text-white
                font-bold
                text-2xl
                shadow-[0_0_50px_rgba(168,85,247,0.6)]
              "
            >
              Skills
            </div>
          </div>

          {/* Skill Nodes */}
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 2 * Math.PI;

            const x = 250 + radius * Math.cos(angle);
            const y = 250 + radius * Math.sin(angle);

            return (
              <div
                key={skill.name}
                className="absolute z-10"
                style={{
                  left: x,
                  top: y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="group relative">

                  <div
                    className="
                      w-18 h-18
                      md:w-20 md:h-20
                      rounded-full
                      bg-[#141021]
                      border
                      border-purple-500/50
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      hover:scale-125
                      hover:border-purple-400
                      hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]
                    "
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  {/* Tooltip */}
                  <div
                    className="
                      absolute
                      left-1/2
                      -translate-x-1/2
                      top-full
                      mt-3
                      px-3
                      py-1
                      rounded-md
                      bg-black/90
                      text-white
                      text-xs
                      whitespace-nowrap
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-300
                      pointer-events-none
                    "
                  >
                    {skill.name}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}