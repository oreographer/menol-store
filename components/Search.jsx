"use client";

import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
// import { searchProduct } from "@/server/searchproduct";
import debounce from "@/hooks/debounce";
import { usePathname } from "next/navigation";

const Search = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const pathname = usePathname();

  const handleSearch = debounce(async (query) => {
    const result = "await searchProduct(query)";

    if (result) {
      setSearchResult(result);
    } else if (!query) {
      setSearchResult([]);
    } else {
      setSearchResult([]);
    }
  }, 700);

  useEffect(() => {
    if (openSearch) {
      setOpenSearch(false);
    }
  }, [pathname]);

  return (
    <div className="relative w-fit">
      <form
        onSubmit={(e) => {
          handleSearch(e.target[0].value), e.preventDefault();
        }}
        className="w-full relative border-b hidden sm:flex"
      >
        <input
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-2 py-2 w-full focus:outline-none  text-sm font-medium"
          type="text"
          placeholder="Search here"
        />
        <button className="p-2" type="submit">
          <IoSearchOutline size={20} />
        </button>
      </form>

      <div className="bg-primary-clr hidden sm:block  w-full sm:absolute max-h-[50vh] overflow-y-auto rounded-br rounded-bl shadow">
        {/* {searchResult[0] &&
          searchResult?.map(({ subCategory, category, length }, index) => {
            return (
              <Link
                key={index}
                href={"/" + subCategory}
                className="bg-primary-clr hover:bg-secondary-clr border-b flex justify-between p-2 font-medium"
              >
                <div>
                  <span className=" text-sm  text-emerald-700">
                    {subCategory}
                  </span>
                  <span className=" text-[10px] leading-none block">
                    {category}
                  </span>
                </div>
                <span className="text-[10px]">{length}</span>
              </Link>
            );
          })} */}
      </div>

      <div className="flex items-center sm:hidden">
        <button onClick={() => setOpenSearch(true)} type="button">
          <IoSearchOutline size={22} />
        </button>

        {openSearch && (
          <section className="bg-primary-clr z-[99999999] fixed p-5 inset-0 h-screen w-full">
            <div className="flex ">
              <button
                onClick={() => setOpenSearch(false)}
                className="pr-3"
                type="button"
              >
                <BiArrowBack size={22} />
              </button>
              <form
                onSubmit={(e) => {
                  handleSearch(e.target[0].value), e.preventDefault();
                }}
                className="flex w-full relative border bg-secondary-clr"
              >
                <input
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-4  py-2.5 bg-secondary-clr w-full focus:outline-none text-sm font-medium"
                  type="text"
                  placeholder="Search here"
                />
                <button className="p-2.5" type="submit">
                  <IoSearchOutline size={20} />
                </button>
              </form>
            </div>

            <div className="py-2"></div>

            <div className="bg-primary-clr  w-full lg:absolute max-h-[80vh] overflow-y-auto">
              {/* {searchResult[0] &&
                searchResult?.map(
                  ({ subCategory, category, length }, index) => {
                    return (
                      <Link
                        key={index}
                        href={"/" + subCategory}
                        className="bg-primary-clr border-b flex justify-between py-2 lg:px-3 font-medium"
                      >
                        <div>
                          <span className=" text-sm  text-emerald-700">
                            {subCategory}
                          </span>
                          <span className=" text-[10px] leading-none block">
                            {category}
                          </span>
                        </div>
                        <span className="text-[10px] ">{length}</span>
                      </Link>
                    );
                  }
                )} */}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Search;
