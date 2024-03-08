import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas, NewComputerCanvas } from "./canvas";
import { moutain } from "../assets";
import Apline from "./canvas/apline";

const Hero = () => {
  return (
    <section className="relative w-full h-screen ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 select-none h-fit `}
      >
        {/* <div className="flex flex-col items-center justify-center mt-5 ">
          <div className=" w-5 h-5 rounded-full bg-[#FEA6AD]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div> */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#f86e6e]"> Jirapat Teja</span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, intuitive user
            <br className="hidden sm:block" /> interfaces, and robust backend
            APIs.
          </p>
        </div>
      </div>
      <Apline />
      {/* <NewComputerCanvas /> */}
      <div className="absolute flex items-center justify-center w-full cursor-pointer select-none xs:bottom-10 bottom-32">
        <a href="#about">
          <div className=" w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
      {/* <div className="absolute top-0 flex items-end w-full h-full z-[-1]">
        <img
          src={moutain}
          alt="moutain"
          className="inset-0 object-cover w-full "
        />
      </div> */}
    </section>
  );
};

export default Hero;
