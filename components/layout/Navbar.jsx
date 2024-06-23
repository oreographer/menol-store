"use client";

import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import SideMenu from "./SideMenu";
import SideCart from "./SideCart";
// import { logoutUser } from "@/server/user/profile";
import { useParams, usePathname, useRouter } from "next/navigation";
import { BRAND } from "@/data/shopdata";
import Search from "../Search";

export default function Navbar({ user, cart }) {
  const pathname = usePathname();
  const { subCategory, slug } = useParams();
  const router = useRouter();

  return (
    <>
      {pathname !== "/order/checkout" && (
        <header className="global_header bg-primary-clr w-full sticky top-0 left-0 z-50 border-border-clr px-3 lg:px-20  py-3 md:py-3.5">
          <div className="z-50 mx-auto max-w-7xl flex items-center w-full justify-between  transition-transform duration-500 ">
            <div className="overflow-x-hidden flex items-center h-fit space-x-4 max-w-[65vw] font-medium text-xs whitespace-nowrap ">
              <div className="flex lg:hidden ml-0 p-1 ">
                {pathname === `/${subCategory}` || pathname === `/p/${slug}` ? (
                  <button onClick={() => router.back()} type="button">
                    <BiArrowBack size={22} />
                  </button>
                ) : (
                  <SideMenu user={user} />
                )}
              </div>

              <div className="absolute lg:static left-1/2 -translate-x-[65%] lg:left-0 lg:-translate-x-0">
                <Link href={"/"}>
                  <h1 className={`font-semibold uppercase text-2xl`}>
                    {BRAND}
                  </h1>
                </Link>
              </div>
            </div>

            <nav className="flex md:space-x-8 items-center">
              <ul className="hidden lg:inline-flex items-center gap-6 md:gap-8 font-medium  text-gray-900 ">
                <li className="relative uppercase text-sm text-black hover:text-red-400 transition-colors">
                  <Link href={`/account/wishlist`}>Wishlist</Link>
                </li>
              </ul>

              <div className="flex space-x-6 md:space-x-8  items-center">
                <Search />

                {user?.name ? (
                  <div className="relative group hidden md:block ">
                    <Link
                      href={"/account"}
                      className="hidden md:block px-3 py-1.5 text-xs bg-black text-white"
                    >
                      {user.name?.slice(0, 10)}
                    </Link>

                    <section className="absolute  text-sm group-hover:block hidden -left-1/2 top-full w-40  overflow-hidden">
                      <div className="w-full ">
                        <div className="w-16 overflow-hidden block ml-auto ">
                          <div className=" h-4 w-4 bg-primary-clr rotate-45 transform origin-bottom-left"></div>
                        </div>
                      </div>

                      <ul className="w-full border rounded-lg bg-primary-clr grid px-3 text-sm font-medium">
                        <li>
                          <Link
                            href={"/account"}
                            className="py-2 border-b block hover:text-green-600"
                          >
                            My Account
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/account/orders"}
                            className="py-2 border-b block hover:text-green-600"
                          >
                            My Orders
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/account/addresses"}
                            className="py-2 border-b block hover:text-green-600"
                          >
                            Addresses
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/account/wishlist"}
                            className="py-2 border-b block hover:text-green-600"
                          >
                            My Wishlist
                          </Link>
                        </li>
                        <li>
                          <form
                          //   action={logoutUser}
                          >
                            <button
                              className="text-red-600 py-2 w-full text-left"
                              type="submit"
                            >
                              Logout
                            </button>
                          </form>
                        </li>
                      </ul>
                    </section>
                  </div>
                ) : (
                  <Link
                    href={"/account/login"}
                    className="hidden md:block px-3 py-1.5 text-xs bg-black text-white"
                  >
                    Login
                  </Link>
                )}

                <SideCart user={user} cart={cart} />
              </div>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}
