import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Navbar } from "../components";

const fetchProducts = async () => {
  const response = await axios.get(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const data = await response.data;
  return data;
};

export default function Landing() {
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

  return (
    <div>
      <Navbar />
      <h1 className="bg-red-500 text-white flex justify-center p-2">
        Products
      </h1>
      {popedoneList.map((item, index) => {
        return (
          <div
            key={index}
            className="m-2 flex flex-col item-center justify-center"
          >
            <img src={item.image_link} alt={item.name} className="w-400 h-80" />
            <h1 className="mb-3 text-3xl">{item.brand}</h1>
            <h1 className="mb-3 text-3xl">{item.category}</h1>
            <span className="text-3xl">{item.price_sign}</span>
            <span className="text-3xl">{item.price}</span>
            <div>
              <div className="flex flex-col">
                {chunkArray(item.product_colors, 10).map((row, rowIndex) => (
                  <div key={rowIndex} className="flex">
                    {row.map((element, elementIndex) => (
                      <div
                        key={elementIndex}
                        className="w-5 w-5 p-2 m-2 text-center border"
                        style={{ background: element.hex_value }}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
              <button className="bg-red-500 text-white">Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
