"use client";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import Search from "@/components/Search";
import { useLayoutEffect } from "react";

export default function ModalMenu({ open, setOpen }) {
  useLayoutEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "17px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [open]);

  return (
    <div
      className={
        "fixed z-10 h-full w-full flex flex-col overflow-y-scroll" +
        (open ? "" : " hidden")
      }
    >
      <header className="px-3 tablet:px-8 bg-white-blur backdrop-blur h-16 flex justify-between items-center">
        <Logo />
        <button onClick={() => setOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </header>
      <div className="grow pt-2 px-3 tablet:px-8 bg-white-Default flex flex-col justify-start animate-[poplist_.15s_ease-out_1] -z-10">
        <Search />
        <Nav />
      </div>
    </div>
  );
}
