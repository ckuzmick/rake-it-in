import React from "react";

export default function Bar() {
    return (
      <div className="bg-white text-slate-900 p-3 border-solid border-slate-400 border-b-2 xs:text-left sm:text-center">
        <a className="p-3 hover:underline underline-offset-4 xs:hidden sm:inline" href="/pricing">Pricing</a>
        <a className="p-3 hover:underline underline-offset-4 xs:hidden sm:inline" href="/availability">Availability</a>
        <a className="sm:p-3 xs:p-0 text-3xl" href="/">Rake It In</a>
        <a className="p-3 hover:underline underline-offset-4 xs:hidden sm:inline" href="/services">Services</a>
        <a className="p-3 hover:underline underline-offset-4 xs:hidden sm:inline" href="/about-us">About Us</a>
      </div>
    )
  }
  