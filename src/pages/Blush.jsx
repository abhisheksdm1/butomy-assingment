import { FaShoppingCart } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const fetchProducts = async () => {
  const response = await axios.get(
    "https://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const data = await response.data;
  return data;
};

export default function Blush() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const { isPending, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // const mutation = useMutation({
  //   mutationFn: (newTodo) => {
  //     return axios.get(
  //       `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${newTodo}`,
  //     )

  //   },  isSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ['products'] })
  //   },
  // });
  const handleMutation = async () => {
    return await axios
      .get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${search}`
      )
      .then((response) => setList(response.data), setSearch(""));

    // e.preventDefault();

    // try {
    //   await mutation.mutate(search);
    // } catch (error) {
    //   // Handle any errors from the mutation
    //   console.error("Mutation failed:", error);
    // }
  };
  console.log(list);

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
      <div className="p-4 w-full flex bg-black">
        <FaShoppingCart className=" text-white bg-black text-5xl pt-2" />
        <span
          style={{ borderRadius: "50%" }}
          className="bg-red-500 h-10 text-white p-2 rlative relative right-3 bottom-2"
        >
          0
        </span>
        <Link to="/blush" className="text-black">
          <h1 className="bg-red-500 text-white text-xl flex justify-center p-2">
            Blush Products
          </h1>
        </Link>
        <Link to="/" className="text-black">
          <h1 className="ml-2 bg-red-500 text-white text-xl flex justify-center p-2">
            Back
          </h1>
        </Link>
      </div>

      <div className=" sm:flex">
        <div>
          <h1 className="bg-red-500 text-white flex justify-center p-2">
            filter
          </h1>
          <input
            type="text"
            className="bg-black text-white border border-white rounded-xl p-3 w-3/5 h-13 m-1  sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-4/5"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleMutation}>Search</button>
          <div>
            <h2 className="text-3xl">Tag List</h2>
            <select name="cars" id="cars">
              <option value="volvo">All</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <h2 className="text-3xl">Brand List</h2>
            <select name="cars" id="cars">
              <option value="volvo">All</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <button className="bg-red-500 mb-3">Clear Filter</button>
        </div>
        {list.length === 0 ? (
          <div className="flex flex-wrap justify-start bg-black-500 w-screen h-screen ">
            {popedoneList
              .filter((item) => item.product_type === "blush")
              .map((item, index) => {
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
            {list
              .filter((item) => item.product_type === "blush")
              .map((item, index) => {
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
    </div>
  );
}
