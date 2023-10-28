import React from "react";

export default function Bar() {
    return (
      <div className="flex place-content-between bg-white text-slate-900 p-3 border-solid border-slate-400 border-b-2 xs:text-left">
        {/* <a className="p-3 hover:underline underline-offset-4 xs:hidden sm:inline" href="/availability">Availability</a> */}
        <a className="text-3xl pr-10" href="/">Rake It In</a>
        <div className="text-right inline">
          <a className="p-3 hover:underline underline-offset-4 sm:inline" href="/services">Services</a>
          <a className="p-3 hover:underline underline-offset-4 sm:inline" href="/pricing">Pricing</a>
        </div>
        {/* <a className="p-3 hover:underline underline-offset-4 xs:hidden sm:inline" href="/about-us">About Us</a> */}
      </div>
    )
  }
  