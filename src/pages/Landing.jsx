import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Navbar } from "../components";
import { uiActions } from "../components/store/ui-slice";
import { useDispatch } from "react-redux";
const fetchProducts = async () => {
  const response = await axios.get(
    "https://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const data = await response.data;
  return data;
};

export default function Landing() {
  const [dataFromChild, setDataFromChild] = useState([]);
  const [products, setProducts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const { isPending, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const handleChildClick = (data1) => {
    setDataFromChild(data1);
    setToggle(true);
  };
  const reducedList = products.slice(0, 51);

  const popedoneList = reducedList.splice(1, 50);

  function chunkArray(array, chunkSize) {
    return Array.from(
      { length: Math.ceil(array.length / chunkSize) },
      (_, index) => array.slice(index * chunkSize, (index + 1) * chunkSize)
    );
  }

  // redux
  const cartValue = (id, name, price) => {
    // alert("hiii");
    dispatch(uiActions.cart({ id, name, price }));
  };

  return (
    <div>
      <Navbar onChildClick={handleChildClick} />
      <h1 className="bg-red-500 text-white flex justify-center p-2">
        Products
      </h1>
      {!toggle && (
        <div className="flex flex-wrap justify-center bg-black-500 w-screen h-screen ">
          {popedoneList.map((item, index) => {
            return (
              <div
                key={index}
                className="m-2 bg-gray-200 relative "
                style={{ width: "360px", height: "700px" }}
              >
                <img
                  src={item.image_link}
                  alt={item.name}
                  className=" h-80 rounded-tl-sm border-b-black-500"
                  style={{ width: "360px" }}
                />
                <h1 className="mb-3 text-3xl">{item.brand}</h1>
                <h1 className="mb-3 text-3xl">{item.category}</h1>
                <span className="text-3xl">{item.price_sign}</span>
                <span className="text-3xl">{item.price}</span>
                <div>
                  <div className="flex flex-col">
                    {chunkArray(item.product_colors, 10).map(
                      (row, rowIndex) => (
                        <div key={rowIndex} className="flex">
                          {row.map((element, elementIndex) => (
                            <div
                              key={elementIndex}
                              className="w-5 w-5 p-2 m-2 text-center border"
                              style={{ background: element.hex_value }}
                            ></div>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                  <button
                    className="bg-red-500 text-white absolute bottom-0"
                    onClick={() => cartValue(item.id, item.name, item.price)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* Display dataFromChild or add your logic */}
      {Array.isArray(dataFromChild) && (
        <div className="flex flex-wrap justify-start bg-black-500 w-screen h-screen ">
          {dataFromChild.map((item, index) => {
            return (
              <div
                key={index}
                className="m-2 bg-gray-200 relative "
                style={{ width: "360px", height: "700px" }}
              >
                <img
                  src={item.image_link}
                  alt={item.name}
                  className=" h-80 rounded-tl-sm border-b-black-500"
                  style={{ width: "360px" }}
                />
                <h1 className="mb-3 text-3xl">{item.brand}</h1>
                <h1 className="mb-3 text-3xl">{item.category}</h1>
                <span className="text-3xl">{item.price_sign}</span>
                <span className="text-3xl">{item.price}</span>
                <div>
                  <div className="flex flex-col">
                    {chunkArray(item.product_colors, 10).map(
                      (row, rowIndex) => (
                        <div key={rowIndex} className="flex">
                          {row.map((element, elementIndex) => (
                            <div
                              key={elementIndex}
                              className="w-5 w-5 p-2 m-2 text-center border"
                              style={{ background: element.hex_value }}
                            ></div>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                  <button className="bg-red-500 text-white absolute bottom-0">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
