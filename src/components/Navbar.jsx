import { Link } from "react-router-dom";
// import axios from "axios";
import backgroundImage from "../assets/finalbutomybackground.jpeg";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar({ onChildClick }) {
  const [search, setSearch] = useState("");
  const [list] = useState([]);

  const handleMutation = async () => {
    try {
      const response = await fetch(
        `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${search}`
      );
      const data = await response.json();

      // Ensure onChildClick receives an array
      onChildClick(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error if needed
    }
    setSearch("");
  };

  return (
    <div>
      {list}
      <nav
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
        className="h-screen bg-cover bg-center bg-red-500 w-full p-5 flex flex-col item-center  gap-10"
      >
        <div className="flex justify-center gap-5 w-full h-10">
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
            className="bg-transparent text-white border border-white rounded-xl p-3 w-3/5 h-7 m-1  sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-4/5"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleMutation} className="flext item-center p-1">
            Search
          </button>
          <div className="flex pr-2">
            <FaShoppingCart className="flex-none text-white text-3xl pt-2" />
            <span
              style={{ borderRadius: "50%" }}
              className="bg-red-500 h-7 p-1 relative right-2 bottom-2"
            >
              0
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <Link to="/blush">
              <h2 className=" text-3xl text-black">Blush</h2>
            </Link>
          </div>

          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <Link to="/brozen">
              <h2 className=" text-3xl text-black">Brozen</h2>
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Eyebrow</h2>
          </div>
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Eyeliner</h2>
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Eyeshadow</h2>
          </div>
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Foundation</h2>
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Lip liner</h2>
          </div>
          <div className=" flex justify-center items-center w-40 h-16 h- bg-red-500">
            <h2 className=" text-3xl text-black">Lip stick</h2>
          </div>
        </div>
        <div className="flex justify-center gap-10">
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

Navbar.propTypes = {
  onChildClick: PropTypes.func.isRequired,
};
