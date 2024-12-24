import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Staggers = () => {
  useGSAP(() => {
    gsap.to(".stagger", {
      stagger: {
        from: "edges",
        ease: "ease",
        amount: 0.5,
        grid: "auto",
      },
      scale: 0.1,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <>
      <div className="w-32 h-32 bg-orange-400 box green stagger"></div>
      <div className="w-32 h-32 bg-purple-400 box stagger red"></div>
      <div className="w-32 h-32 bg-blue-400 box stagger green"></div>
      <div className="w-32 h-32 bg-indigo-400 box stagger red"></div>
      <div className="w-32 h-32 bg-gray-400 box stagger green"></div>
      <div className="w-32 h-32 bg-red-400 box stagger red"></div>
      <div className="w-32 h-32 bg-green-400 box stagger green"></div>
      <div className="w-32 h-32 bg-teal-400 box stagger red"></div>
      <div className="w-32 h-32 bg-orange-400 box green stagger"></div>
      <div className="w-32 h-32 bg-purple-400 box stagger red"></div>
      <div className="w-32 h-32 bg-blue-400 box stagger green"></div>
      <div className="w-32 h-32 bg-indigo-400 box stagger red"></div>
      <div className="w-32 h-32 bg-gray-400 box stagger green"></div>
      <div className="w-32 h-32 bg-red-400 box stagger red"></div>
      <div className="w-32 h-32 bg-green-400 box stagger green"></div>
      <div className="w-32 h-32 bg-teal-400 box stagger red"></div>
    </>
  );
};

export default Staggers;
