"use client";

import Link from "next/link";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useStateContext } from "../../context/StateContext";
// import { logoutUser } from "@/server/user/profile";
import categories from "../../data/categories.json";
import { usePathname } from "next/navigation";
import Collapsible from "../common/Collapsible";

const SideMenu = ({ user }) => {
  const pathname = usePathname();
  const { showMenu, setShowMenu, setShowCart } = useStateContext();

  useEffect(() => {
    if (showMenu) {
      setShowMenu(false);
    }
  }, [pathname]);

  const openSideMenu = () => {
    setShowMenu(true);
    setShowCart(false);
  };

  const handleLogout = () => {
    logoutUser();
    setShowMenu(false);
  };

  return (
    <>
      <button className="lg:hidden" type="button" onClick={openSideMenu}>
        <HiOutlineMenuAlt1 size={22} />
      </button>

      <aside
        style={
          showMenu ? { translate: "0" } : { transform: "translateX(-100%)" }
        }
        className="w-4/5 lg:w-1/3 max-w-96 h-screen fixed top-0 left-0 p-5 bg-gray-100 border-r z-[99999999] transition-transform ease-out duration-300 lg:hidden overflow-y-scroll"
      >
        <div className="flex justify-between mb-7">
          <Link
            className="px-2 py-1 bg-gray-200 rounded font-medium flex items-center space-x-1.5 capitalize"
            href={"/account"}
          >
            <VscAccount size={15} className="mx-auto" />
            <span>{(user && user.name) || "Login"}</span>
          </Link>

          <button
            type="button"
            onClick={() => setShowMenu(false)}
            className="ml-auto block"
          >
            <IoMdClose style={{ width: 24, height: 24 }} />
          </button>
        </div>

        <nav>
          <ul className="font-medium text-sm">
            {categories.map(({ category, subCategories }, index) => {
              return (  
                <Collapsible key={index} border={true} title={category}>
                  {subCategories.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href={item?.path}>
                          <span className="p-1 block hover:text-red-400 hover:bg-gray-200">
                            {item.title}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </Collapsible>
              );
            })}

            {user && (
              <>
                <li>
                  <Link href={"/#"}>
                    <span className="py-4 border-b border-border-clr block">
                      My account
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={"/#"}>
                    <span className="py-4 border-b border-border-clr block">
                      Orders
                    </span>
                  </Link>
                </li>

                <li>
                  <button
                    className="flex py-4 border-b border-border-clr w-full items-center gap-1 text-theme-clr"
                    // onClick={handleLogout}
                    type="button"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            <li className="py-4">
              <Link href={"/#"}>Help ?</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideMenu;