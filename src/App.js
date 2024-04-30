import React, { useState } from "react";
import Navbar from "./components/Navbar";
import nike_air_force_1 from "./img/nike_air_force_1.jpg";
import adidas_ultraboost from "./img/adidas_ultraboost.jpg";
import vans_old_skool from "./img/vans_old_skool.jpg";
import converse_chuck_taylor from "./img/converse_chuck_taylor.jpg";
import puma_suede_classic from "./img/puma_suede_classic.jpg";
import new_balance_574 from "./img/new_balance_574.jpg";
import reebok_classic_leather from "./img/reebok_classic_leather.jpg";
import fila_disruptor_ii from "./img/fila_disruptor_ii.jpg";
import under_armour_hovr_phantom from "./img/under_armour_hovr_phantom.jpg";
import asics_gel_kayano_27 from "./img/asics_gel_kayano_27.jpg";

const shoesData = [
  { id: 1, name: "Nike Air Force 1", price: 100, image: nike_air_force_1 },
  { id: 2, name: "Adidas Ultraboost", price: 120, image: adidas_ultraboost },
  { id: 3, name: "Vans Old Skool", price: 80, image: vans_old_skool },
  {
    id: 4,
    name: "Converse Chuck Taylor All Star",
    price: 60,
    image: converse_chuck_taylor,
  },
  { id: 5, name: "Puma Suede Classic", price: 70, image: puma_suede_classic },
  { id: 6, name: "New Balance 574", price: 90, image: new_balance_574 },
  {
    id: 7,
    name: "Reebok Classic Leather",
    price: 85,
    image: reebok_classic_leather,
  },
  { id: 8, name: "Fila Disruptor II", price: 110, image: fila_disruptor_ii },
  {
    id: 9,
    name: "Under Armour HOVR Phantom",
    price: 130,
    image: under_armour_hovr_phantom,
  },
  {
    id: 10,
    name: "Asics Gel-Kayano 27",
    price: 160,
    image: asics_gel_kayano_27,
  },
];

const App = () => {
  const [cart, setCart] = useState([]);


  const addToCart = (shoe) => {
    const existingItem = cart.find((item) => item.id === shoe.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  const removeFromCart = (shoeId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === shoeId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };


  const totalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="container mx-auto my-8 ">
        <div className="flex ">
          <div className="w-1/2 p-4 m-8">
            <div className="grid grid-cols-2 gap-4">
              {shoesData.map((shoe) => (
                <div
                  key={shoe.id}
                  className="w-52 p-4 flex flex-col items-center shadow-md"
                >
                  <img
                    src={shoe.image}
                    alt={shoe.name}
                    className="mb-2 w-36 h-24 object-cover"
                  />
                  <div className="bg-orange-200 p-2 rounded-md h-52 w-36">
                    <div>{shoe.name}</div>
                    <div className="text-center mt-4">${shoe.price}</div>
                    <button
                      onClick={() => addToCart(shoe)}
                      className="mt-6 border border-black  font-bold py-2 px-4 rounded"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`mx-auto p-5 w-96 mt-8 bg-gray-200 rounded-md h-fit min-h-96`}>
  <h2 className="text-xl font-semibold mb-4 text-left">Cart</h2>
  <div className="grid grid-cols-1 gap-4">
    {cart.length === 0 && <h3 className="text-center">No items in cart</h3>}
    {cart.map((item) => (
      <div key={item.id} className="p-2 flex flex-col items-start">
        <img
          src={item.image}
          alt={item.name}
          className="mb-2 w-16 h-12 object-cover"
        />
        <div className="text-start">{item.name}</div>
        <div className="grid grid-cols-1"></div>
        <div className="flex w-full justify-between items-center">
          <div>${item.price}</div>
          <div className="flex">
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-orange-200 p-2 rounded-md"
            >
              -
            </button>
            <div className="m-2">{item.quantity}</div>
            <button
              onClick={() => addToCart(item)}
              className="bg-orange-200 p-2 rounded-md"
            >
              +
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="text-xl font-semibold mt-4 text-center">
    Total: ${totalCost}
  </div>
</div>


        </div>
      </div>
    </>
  );
};

export default App;
