import "./App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
function App() {
  useGSAP(() => {
    gsap.to(".box", {
      xPercent: 100,
      yPercent: 200,
      transformOrigin: "center 50%",
      yoyo: true,
    });
  }, []);
  return (
    <div className="bg-black w-full h-lvh text-white justify-center items-center flex  ">
      <div className="w-32 h-32 bg-green-400 box"></div>
    </div>
  );
}

export default App;
