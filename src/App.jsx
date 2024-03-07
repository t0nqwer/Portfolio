import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from "./components";
import Moutain from "./components/canvas/Moutain";
import { StarsCanvasSmall } from "./components/canvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary  bg-gradient-to-t from-[#F299A9] via-[#8D4C7C] to-[#061126]  via-30% to-70%">
        <div className="relative z-50  bg-gradient-to-t from-[#F299A9] via-[#8D4C7C] to-[#061126]  via-30% to-70% ">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Works /> */}

        <StarsCanvasSmall />
        <div className="relative z-0 ">
          {/* <Contact /> */}
          <StarsCanvas />
        </div>
        <Moutain />
      </div>
    </BrowserRouter>
  );
};

export default App;
