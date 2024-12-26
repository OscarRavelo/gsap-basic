import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const TimeLine = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl.to(".timeline-green", {
      x: 600,
      duration: 1,

      delay: 0.2,
      ease: "power1.inOut",
      rotation: 360,
    });

    tl.to(
      ".timeline-red",
      {
        x: -600,
        duration: 1,
        ease: "power1.inOut",
        rotation: 360,
      },
      "<",
    );
    tl.to(".timeline-red", {
      y: -150,
      ease: "power3",
      delay: 0.3,
    });
    tl.to(
      ".timeline-yellow",
      {
        duration: 1,
        y: -270,
        ease: "power1.inOut",
        rotation: 360,
      },
      "-=1",
    );
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
