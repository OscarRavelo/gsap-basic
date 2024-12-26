import "./App.css";
import Easing from "./examples/Easing";
import FunCalls from "./examples/FunCall";
import GsapTo from "./examples/GsapTo";
import Staggers from "./examples/Staggers";
import TimeLine from "./examples/TimeLine";

function App() {
  return (
    <>
      <section>
        <div className="bg-black w-full  text-white  pt-12  ">
          <div className="justify-around items-center flex border-b-4 pb-10 border-red-500">
            <h2>GSAP TO</h2>
            <GsapTo />
          </div>
          <div className="justify-around items-center flex border-b-4 pb-10 border-red-500 mt-12">
            <h2>Easing</h2>
            <Easing />
          </div>
          <div className="justify-around items-center grid grid-cols-8 gap-2 flex border-b-4 pb-10 border-red-500 mt-12">
            <Staggers />
          </div>
          <div className=" items-center    flex border-b-4 pb-10 border-red-500 mt-12 flex-col">
            <h2>TimeLine:</h2>
            <TimeLine />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
