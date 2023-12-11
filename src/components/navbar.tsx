import { useEffect, useState } from "react";
import { ShoppingBadge } from "../assets/shoppingBadge.tsx";
import { Loupe } from "../assets/loupe.tsx";

export function Navbar() {
  const [emptyCart, setEmptyCart] = useState(true);
  useEffect(() => {
    setEmptyCart(true);

  }, [])
  const itemCount = 3;

  return (
    <>
      <div className="h-[80px] min-w-screen bg-[#fff] flex items-center justify-around ">
        <div>
          <span className="text-[#5D5D6D] font-saira-stencil text-[30px] md:text-[40px] cursor-pointer">
            cappuceeno
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-5 ">
          {/* Input search */}
          <div className="relative h-[42px] w-full lg:w-[352px] bg-[#F3F5F6] flex items-center p-5 rounded-md">
            <input
              type="text"
              className="font-light h-[42px] w-full lg:w-[352px] bg-[#F3F5F6] focus:outline-none"
              placeholder="Procurando por algo específico?"
            />
            <button>
              <Loupe />
            </button>
          </div>
          {/* Button shopping cart */}
          <div className="relative">
            <button>
              <div className="relative">
                <ShoppingBadge />
                {emptyCart && (
                  <div className="absolute top-4 left-4 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                    {itemCount}
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
