import Image from "next/image";
interface EducationCard {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description: string;
  icon: string;
}

const EducationCards: EducationCard[] = [
  {
    id: 1,
    institution: "Gautam Buddha University",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "2022 - 2025",
    description:
      "Graduated with a CGPA of 9.17. Built a strong foundation in programming, software development, databases, web technologies, and computer science fundamentals.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    institution: "Indira Gandhi National Open University (IGNOU)",
    degree: "Master of Computer Applications (MCA)",
    duration: "2025 - Present",
    description:
      "Currently pursuing MCA with a focus on advanced software development, data structures, algorithms, cloud computing, and modern application development.",
    icon: "/cards/card-2.png",
  },
];

export default function Education(): React.JSX.Element {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Education Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EducationCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <img
                  src={card.icon}
                  alt={card.institution}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white">
                {card.degree}
              </h3>

              <p className="text-purple-400 font-medium mt-1">
                {card.institution}
              </p>

              <p className="text-white/60 text-sm mt-1">
                 {card.duration}
              </p>

              <p className="text-white/70 text-sm mt-2">
                 {card.description}
              </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

