import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Navbar } from "../components";
import { useState } from "react";

const fetchProducts = async () => {
  const response = await axios.get(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const data = await response.data;
  return data;
};

export default function Landing() {
  const [dataFromChild, setDataFromChild] = useState([]);
  const [list, setList] = useState([]);
  const { isPending, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const reducedList = data.slice(0, 51);
  const popedoneList = reducedList.splice(1, 50);

  function chunkArray(array, chunkSize) {
    return Array.from(
      { length: Math.ceil(array.length / chunkSize) },
      (_, index) => array.slice(index * chunkSize, (index + 1) * chunkSize)
    );
  }

  const handleChildClick = (data1) => {
    // Handle the data received from the child component
    setDataFromChild(data1);
    setList(dataFromChild);
  };
  console.log("data", dataFromChild);
  return (
    <div>
      <Navbar onChildClick={handleChildClick} />
      <h1 className="bg-red-500 text-white flex justify-center p-2">
        Products
      </h1>
      {list.length === 0 ? (
        <div className="flex flex-wrap justify-start bg-black-500 w-screen h-screen ">
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
                  <button className="bg-red-500 text-white absolute bottom-0">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-wrap justify-start bg-black-500 w-screen h-screen ">
          {list.map((item1, key) => (
            <div key={key}>
              <h1>{item1.brand}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
