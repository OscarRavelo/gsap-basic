import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const TimeLine = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".timeline-green", {
      x: 600,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <>
      <div className="w-32 h-32 bg-green-400 mb-2 ml-4 timeline-green"></div>
      <div className="w-32 h-32 bg-red-400 mb-2 ml-4 timeline-red"></div>
      <div className="w-32 h-32 bg-yellow-400 mb-2 ml-4 timeline-yellow"></div>
    </>
  );
};

export default TimeLine;
