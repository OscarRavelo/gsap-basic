import "./App.css";
import Easing from "./examples/Easing";
import GsapTo from "./examples/GsapTo";

function App() {
  return (
    <>
      <div className="bg-black w-full h-lvh text-white  pt-12 ">
        <div className="justify-around items-center flex border-b-4 pb-10 border-red-500">
          <h2>GSAP TO</h2>
          <GsapTo />
        </div>
        <div className="justify-around items-center flex border-b-4 pb-10 border-red-500 mt-12">
          <h2>Easing</h2>
          <Easing />
        </div>
      </div>
    </>
  );
}

export default App;
