import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiFlask,
} from "react-icons/si";

const skills = [
  { name: "Git/GitHub", icon: <FaGithub className="w-5 h-5 inline-block mr-1" /> },
  { name: "React", icon: <FaReact className="w-5 h-5 inline-block mr-1" /> },
  { name: "Node", icon: <FaNodeJs className="w-5 h-5 inline-block mr-1" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 inline-block mr-1" /> },
  { name: "Express", icon: <SiExpress className="w-5 h-5 inline-block mr-1" /> },
  { name: "SQL", icon: <SiMysql className="w-5 h-5 inline-block mr-1" /> },
  { name: "Flask", icon: <SiFlask className="w-5 h-5 inline-block mr-1" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-5 h-5 inline-block mr-1" />,
  },
  { name: "Figma", icon: <FaFigma className="w-5 h-5 inline-block mr-1" /> },
];

// ... rest of the SkillsStrip component same as before

export default function SkillsStrip() {
  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="overflow-hidden whitespace-nowrap rounded-md border border-gray-300 bg-white">
        <div
          className="inline-block whitespace-nowrap"
          style={{ animation: "scroll-left 20s linear infinite" }}
        >
          {[...skills, ...skills].map(({ name, icon }, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-6 py-3 text-gray-800 text-sm font-semibold select-none"
            >
              {icon} {name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
