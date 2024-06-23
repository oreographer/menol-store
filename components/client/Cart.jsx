"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
// import { addToCart, removeFromCart } from "@/server/user/cart";
// import { moveToWishlist } from "@/server/user/wishlist";

const Cart = ({ cart }) => {
  const pathname = usePathname();

  const handleAddToCart = async ({ _id, qty }) => {
    // const cart = await addToCart({
    //   _id,
    //   qty,
    // });
    // toast(cart?.message);
  };

  const handleRemoveFromCart = async (itemId) => {
    // const cart = await removeFromCart(itemId);
    // toast(cart?.message);
  };

  const handleMoveToWishlist = async (itemId) => {
    // const wishlist = await moveToWishlist(itemId);
    // toast(wishlist?.message);
  };

  return (
    <>
      <section className="w-full">
        {cart?.items?.length > 0 ? (
          <div className="w-full grid gap-5">
            {cart.items?.map((item) => {
              return (
                <div
                  key={item._id}
                  className={`p-4 pb-0  ${
                    pathname === "/order/checkout" && "border rounded"
                  } border-border-clr font-medium `}
                >
                  <div className="flex justify-between mb-6 gap-2">
                    <div className="space-y-2">
                      <Link title={item?.title} href={`/p/${item.slug}`}>
                        <span className="text-xs text-secondary-clr md:text-sm block overflow-hidden whitespace-nowrap">
                          {item?.title}
                        </span>
                      </Link>

                      <div className="text-xs capitalize">{item.variant}</div>

                      {/* price & remove/add button */}
                      <div className=" flex flex-wrap items-center gap-x-4 sm:gap-x-10 gap-y-2">
                        <span className="text-lg font-medium">
                          ₹{item.price * item.qty}
                        </span>

                        <div className="flex items-center space-x-1 text-sm">
                          <label className="text-xs" htmlFor="quantity">
                            Qty:
                          </label>
                          <select
                            defaultValue={item.qty}
                            onChange={(e) =>
                              handleAddToCart({
                                _id: item._id,
                                qty: e.target.value,
                              })
                            }
                            id="quantity"
                            name="quantity"
                            className="bg-transparent cursor-pointer w-full border border-border-clr outline-none rounded-md py-1.5 px-4 "
                          >
                            {Array.from({ length: 10 }, (_, i) => i + 1).map(
                              (num) => (
                                <option key={num} value={num}>
                                  {num}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-300 w-full max-w-[5rem] relative aspect-square">
                      <Link href={`/p/${item.slug}`}>
                        <Image
                          title={item?.title}
                          src={item.image}
                          fill
                          className="object-cover"
                          sizes={1000}
                          alt="Product Image"
                        ></Image>
                      </Link>
                    </div>
                  </div>

                  <div
                    className={`${
                      pathname !== "/order/checkout" && "border-b"
                    } w-full flex text-xs border-border-clr border-t py-1.5`}
                  >
                    <button
                      className={`text-rose-600 border-border-clr border-r w-full gap-2 whitespace-nowrap p-1 cursor-pointer`}
                      onClick={() => handleRemoveFromCart(item._id)}
                      type="button"
                    >
                      Remove item
                    </button>
                    <button
                      className={`w-full gap-1.5 inline-flex items-center justify-center whitespace-nowrap p-1 cursor-pointer`}
                      onClick={() => handleMoveToWishlist(item._id)}
                      type="button"
                    >
                      Move to wishlist
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mx-auto block space-y-5 mt-10 w-fit text-center">
            <p>Your Cart Is Empty!</p>

            <Link href={"/"}>
              <span className="bg-black text-white px-7 py-2 text-xs tracking-wider mt-2 block">
                Continue Shopping
              </span>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;