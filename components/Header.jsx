"use client";
import Link from "next/link";
import React from "react";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import Search from "@/components/Search";
import Modal from "@/components/Modal";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Modal open={open} setOpen={setOpen} />
      <header className="w-full bg-white-blur backdrop-blur-sm sticky top-0">
        <div className="container max-w-7xl h-16 flex justify-between items-center">
          <Logo />
          <div className="hidden laptop:block laptop:grow laptop:justify-self-start">
            <Nav />
          </div>
          <div className="w-28 laptop:w-[430px] flex justify-between items-center">
            <div className="hidden laptop:block">
              <Search />
            </div>
            <div>
              <Link href="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user h-6 w-6 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </Link>
            </div>
            <div>
              <Link href="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-bag h-6 w-6 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </Link>
            </div>
            <button className="laptop:hidden" onClick={() => setOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
