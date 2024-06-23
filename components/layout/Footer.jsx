"use client";

import React from "react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Collapsible from "../common/Collapsible";
import { COPYRIGHT, OWNER, BRAND, EMAIL } from "@/data/shopdata";

export default function Footer() {
  const paths = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Wishlist", path: "/account/wishlist" },
  ];

  return (
    <>
      <footer className="bg-secondary-clr border-t z-50  border-b border-border-clr px-5 sm:px-10 md:px-20 ">
        <Collapsible title={`More about ${BRAND}`} expendInLg={true}>
          <section className={`text-gray-900 overflow-hidden text-sm `}>
            <div className=" mx-auto max-w-7xl">
              <div className="md:flex gap-[20%] py-8 md:py-12">
                <Link
                  href={"/"}
                  className="font-semibold uppercase inline-block text-3xl md:text-4xl mb-8"
                >
                  {BRAND}
                </Link>

                <div className="grid grid-cols-1 gap-7 lg:gap-12 sm:gap-0 sm:grid-cols-2">
                  <div>
                    <h2 className="mb-6  font-semibold uppercase ">Pages</h2>
                    <ul className="font-medium  space-y-2">
                      {paths?.map(({ name, path }, index) => {
                        return (
                          <li key={index}>
                            <Link href={path} className="hover:underline">
                              {name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div>
                    <h2 className="mb-6  font-semibold uppercase ">Contact</h2>
                    <ul className=" font-medium  space-y-2">
                      <li>
                        <Link href={"#"} className="hover:underline">
                          {EMAIL}
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"} className="hover:underline">
                          Help ?
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <hr className=" border-border-clr sm:mx-auto"></hr>

              <div className="sm:flex sm:items-center sm:justify-between flex-wrap mt-7">
                <span className="  font-medium sm:text-center ">
                  © {COPYRIGHT}
                  <Link href="/" className="hover:underline ">
                    {" "}
                    {BRAND}
                  </Link>{" "}
                  - All Rights Reserved.
                </span>

                <div className="text-xs mt-2 sm:mt-0">
                  Design & Developed by -{" "}
                  <Link target="_blank" className="underline" href={OWNER.site}>
                    {OWNER.name}
                  </Link>
                </div>

                <div className="flex mt-7 space-x-6 sm:justify-center sm:mt-0">
                  <Link href={"#"} target={"_blank"}>
                    <BsFacebook className="w-5 h-4" />
                  </Link>
                  <Link href={"#"} target={"_blank"}>
                    <BsInstagram className="w-5 h-4" />
                  </Link>
                  <Link href={"#"} target={"_blank"}>
                    <BsTwitter className="w-5 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Collapsible>
      </footer>
    </>
  );
}
