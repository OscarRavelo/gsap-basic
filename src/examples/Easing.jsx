import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const Easing = () => {
  useGSAP(() => {
    gsap.to(".blue", {
      rotation: 360,
      duration: 2,
      ease: "bounce",
      repeat: -1,
    });

    gsap.to(".yellow", {
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
    });
  }, []);
  return (
    <>
      <div className=" font-bold text-black w-32 h-32 bg-blue-400 flex justify-center items-center box blue">
        Bounce
      </div>
      <div className="w-32 h-32 bg-yellow-400 text-black text-bold items-center justify-center flex font-bold box yellow">
        power1.inOut
      </div>
    </>
  );
};

export default Easing;
