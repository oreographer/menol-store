"use client";

import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const Collapsible = ({ title, expend, children, border, expendInLg }) => {
  const [isOpen, setIsOpen] = useState(expend);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      className={`${border && "border-b"} border-border-clr overflow-hidden`}
    >
      <button
        type="button"
        className="flex items-center text-left justify-between w-full py-4 text-sm text-black font-medium"
        onClick={handleToggle}
      >
        {title}
        <BsChevronDown
          className={`${
            isOpen ? "rotate-180 " : "rotate-0"
          } transition-transform transform ${expendInLg && "lg:rotate-180"}`}
        />
      </button>

      <div
        className={`${isOpen ? "h-fit" : "h-0"} overflow-hidden ${
          expendInLg && "lg:h-fit"
        }`}
      >
        <div className="pt-3 pb-6">{children}</div>
      </div>
    </section>
  );
};

export default Collapsible;
