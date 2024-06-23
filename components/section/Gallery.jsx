import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gallery = ({ heading, gap, items, twoColumn, multipleColumn }) => {
  return (
    <section>
      {heading && (
        <h1 className="md:text-xl lg:text-2xl text-center font-sans font-semibold mb-2 md:mb-3 lg:mb-4 uppercase">
          {heading}
        </h1>
      )}
      <div
        className={`grid gap-${gap ? gap : 0} ${
          twoColumn && "lg:grid-cols-2"
        } ${
          multipleColumn &&
          "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
        }`}
      >
        {items &&
          items?.map((item, index) => {
            return (
              <div
                key={index}
                className={`bg-gray-200 relative w-full aspect-[7/6] isolate`}
              >
                <Image
                  src={item?.image}
                  blurDataURL={item?.image}
                  placeholder="blur"
                  fill
                  sizes={1000}
                  className="object-cover"
                  alt="subCategory Image"
                />

                <div className="absolute left-[7%] bottom-[15%] text-white space-y-4 z-10">
                  <h2 className="text-4xl font-medium">{item.title}</h2>

                  <Link
                    className="border-white border py-2 px-7 inline-block text-sm text-white hover:bg-white hover:text-black transition-colors"
                    href={item.path}
                  >
                    <span>Shop now</span>
                  </Link>
                </div>

                <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Gallery;
