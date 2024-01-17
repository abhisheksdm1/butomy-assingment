import { Link } from "react-router-dom";
// import axios from "axios";
import backgroundImage from "../assets/finalbutomybackground.jpeg";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function Navbar({ onChildClick }) {
  const [search, setSearch] = useState("");
  // const [list] = useState([]);
  const countCart = useSelector((state) => state.ui.cartCount);
  const cartItems = useSelector((state) => state.ui.items);
  console.log("countCart", countCart);
  console.log("countCart", cartItems);
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
          <div
            className="flex pr-2"
            onClick={() => window.my_modal_4.showModal()}
          >
            <FaShoppingCart className="flex-none text-white text-3xl pt-2" />
            <span
              style={{ borderRadius: "50%" }}
              className="bg-red-500 h-7 p-1 relative right-2 bottom-2"
            >
              {countCart}
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
      <dialog id="my_modal_4" className="modal ">
        <form method="dialog" className="modal-box  max-w-5xl">
          <h3 className="font-bold text-lg">Order Summary</h3>
          <br />
          {cartItems.map((list, index) => (
            <div key={index} className="">
              <table>
                <tbody>
                  <tr>
                    <td className="text-left p-3" colSpan={3}>
                      <div className="flex mb-3 td1">
                        <span style={{ width: "100px" }}>{list.name} :</span>
                      </div>
                    </td>
                    <td className="text-left">
                      <div className="flex mb-3">
                        <span>{list.price}</span>
                      </div>
                    </td>
                    <td className="text-left">
                      <div className="flex mb-3">
                        <h1
                          className="bg-[#4f46e5] rounded-sm pt-2 pb-2 pl-5 pr-5 mr-5 text-white"
                          // onClick={() => handleIncrement1(list.id)}
                        >
                          <FaPlus />
                        </h1>
                        <h1
                          className="bg-[#ef4444] rounded-sm pt-2 pb-2 pl-5 pr-5 mr-5 text-white"
                          // onClick={() => handleDecrement1(list.id)}
                        >
                          <FaMinus />
                        </h1>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
          <br />
          <div>{/* <p>Total (INR) :{totalCost}</p> */}</div>
          <div className="modal-action flex mr-5 justify-end">
            {/* if there is a button, it will close the modal */}
            {/* <button
              onClick={checkoutHandler}
              className="btn bg-[#4f46e5] mr-5 rounded-lg pt-1 pb-1 pl-3 pr-3 mr-5 text-white"
            >
              SAVE AND CHECKOUT
            </button> */}
            <button className="btn text-violet-600">CANCLE</button>
            <br />
          </div>
        </form>
      </dialog>
    </div>
  );
}

Navbar.propTypes = {
  onChildClick: PropTypes.func.isRequired,
};
