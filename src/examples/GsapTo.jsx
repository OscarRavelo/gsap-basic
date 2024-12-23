import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const GsapTo = () => {
  useGSAP(() => {
    gsap.to(".green", {
      rotation: 360,
      duration: 2,
      repeat: -1,
    });
    gsap.to(".red", {
      rotation: 360,
      duration: 2,
      repeat: -1,
    });
  }, []);
  return (
    <>
      <div className="w-32 h-32 bg-green-400 box green"></div>
      <div className="w-32 h-32 bg-red-400 box red"></div>
    </>
  );
};

export default GsapTo;
