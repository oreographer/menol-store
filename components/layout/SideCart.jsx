"use client";

import { IoMdClose } from "react-icons/io";
import { useStateContext } from "../../context/StateContext";
import Cart from "../client/Cart";
import { useRouter } from "next/navigation";
import { PiShoppingCartThin } from "react-icons/pi";
import Link from "next/link";
import { useEffect } from "react";

const SideCart = ({ user, cart }) => {
  const { showCart, setShowCart, setShowMenu } = useStateContext();

  const router = useRouter();

  const openSideCart = () => {
    setShowCart(true);
    setShowMenu(false);
  };

  useEffect(() => {
    if (!cart?.items?.length > 0) {
      setShowCart(false);
    }
  }, [cart]);

  return (
    <>
      {!user?.name ? (
        <button type="button" onClick={openSideCart} className="relative h-fit">
          <PiShoppingCartThin size={20} />

          {cart?.items && Object.keys(cart.items)?.length >= 1 && (
            <div className="absolute font-medium -top-1 -right-1.5 text-[8px] w-4 h-4 tracking-widest rounded-full text-white flex items-center justify-center bg-black">
              {cart.items && Object.keys(cart.items)?.length}
            </div>
          )}
        </button>
      ) : (
        <Link href={"/account/login"}>
          <PiShoppingCartThin size={20} />
        </Link>
      )}

      <aside
        style={
          showCart ? { translate: "0" } : { transform: "translateX(100%)" }
        }
        className="cart scrollbar-hide w-11/12 md:w-3/6 lg:w-1/3 h-screen fixed top-0 right-0 
      flex-col items-center bg-primary-clr shadow-lg border-r z-[999] transition-transform overflow-y-auto ease-out duration-300"
      >
        <div className="flex justify-between items-center w-full p-4 z-50 border-b border-border-clr sticky top-0 bg-primary-clr">
          <p className="font-medium text-sm">
            Your Cart ({cart?.items?.length || 0})
          </p>

          <button type="button" onClick={() => setShowCart(false)}>
            <IoMdClose style={{ width: 24, height: 24 }} />
          </button>
        </div>

        <div className="pt-5 pb-8 px-1">
          <Cart cart={cart} />
        </div>

        {/* Subtotal & Checkout */}
        {cart?.items?.length >= 1 && (
          <div className="flex justify-between p-4 w-full items-center sticky bottom-0  bg-primary-clr ">
            <p className="font-medium">
              Subtotal: ₹{cart.subTotal && cart.subTotal}
            </p>

            <button
              onClick={() => {
                router.push("/order/checkout");
              }}
              type="button"
              className="bg-black text-white px-7 py-2 text-xs tracking-wider "
            >
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default SideCart;
