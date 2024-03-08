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
  ComputersCanvas,
  StarsCanvas,
} from "./components";
import Moutain from "./components/canvas/Moutain";
import { StarsCanvasSmall } from "./components/canvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary  bg-gradient-to-t from-[#F299A9] via-[#8D4C7C] to-[#0A0617]  via-30% to-70%">
        <div className="relative z-50 ">
          <Navbar />
          <Hero />
          {/* <StarsCanvas /> */}
        </div>
        <About />
        <Tech />
        <Experience />
        {/* <Works /> */}

        {/* <StarsCanvasSmall /> */}
        {/* <div className="relative z-0 ">
          <StarsCanvas />
        </div> */}
        <Moutain />
      </div>
    </BrowserRouter>
  );
};

export default App;
