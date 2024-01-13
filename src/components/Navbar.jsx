import backgroundImage from "../assets/finalbutomybackground.jpeg";
import { FaShoppingCart } from "react-icons/fa";
export default function Navbar() {
  return (
    <div>
      <nav
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
        className="h-screen bg-cover bg-center bg-red-500 w-full p-5 flex flex-col gap-10"
      >
        <div className="flex gap-5 w-full h-10">
          <h1
            style={{
              color: "#ef4444",
              fontFamily: "'Dancing Script', cursive",
            }}
            className="text-3xl flex-none"
          >
            <span className="italic text-white">COW</span>
            <span className="italic	">GIRL</span>
          </h1>
          <input
            type="text"
            className="bg-transparent border border-white rounded-xl p-3 w-2/5 h-7 m-1 grow"
            placeholder="Search"
          />
          <div className="flex ">
            <FaShoppingCart className="flex-none text-white text-3xl pt-2" />
            <span
              style={{ borderRadius: "50%" }}
              className="bg-red-500 h-7 p-1 relative right-2 bottom-2"
            >
              0
            </span>
          </div>
        </div>
        <div className="flex gap-10">
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Blush</h2>
          </div>
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Brozen</h2>
          </div>
        </div>
        <div className="flex gap-10">
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Eyebrow</h2>
          </div>
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Eyeliner</h2>
          </div>
        </div>
        <div className="flex gap-10">
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Eyeshadow</h2>
          </div>
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Foundation</h2>
          </div>
        </div>
        <div className="flex gap-10">
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Lip liner</h2>
          </div>
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Lip stick</h2>
          </div>
        </div>
        <div className="flex gap-10">
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Mascara</h2>
          </div>
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Nail polish</h2>
          </div>
        </div>
      </nav>
    </div>
  );
}
