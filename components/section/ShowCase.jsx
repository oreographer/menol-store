"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShowCase = ({ item }) => {
  return (
    <section className="w-full h-[75vh] lg:h-[90vh] relative">
      {item?.image && (
        <Image
          className="w-full h-full object-cover"
          src={item.image}
          fill
          alt="main image"
        />
      )}

      <div className="absolute left-[7%] lg:left-1/2 lg:-translate-x-1/2 lg:text-center bottom-[20%] space-y-4 z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white">
          {item?.title}
        </h2>

        <Link
          className="border-white border py-2 px-7 inline-block text-sm text-white hover:bg-white hover:text-black transition-colors"
          href={item?.path}
        >
          <span>Shop now</span>
        </Link>
      </div>

      <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
    </section>
  );
};

export default ShowCase;
