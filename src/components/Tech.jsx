import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-fit  main-gradient p-[2px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] p-2 flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="object-contain w-16 h-16"
        />
        {/* 
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3> */}
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-16">
      {technologies.map((technology) => (
        <div className="w-20 h-20 select-none " key={technology.name}>
          <ServiceCard icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
