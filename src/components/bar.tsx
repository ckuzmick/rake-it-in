import React from "react";

export default function Bar() {
    return (
      <div className="text-center bg-white text-slate-900 p-3 border-solid border-slate-950 border-b-2">
        <a className="p-3 hover:underline underline-offset-4" href="/pricing">Pricing</a>
        <a className="p-3 hover:underline underline-offset-4" href="/">Availability</a>
        <a className="p-3 text-2xl" href="/">Rake It In</a>
        <a className="p-3 hover:underline underline-offset-4" href="/">Services</a>
        <a className="p-3 hover:underline underline-offset-4" href="/">About Us</a>
      </div>
    )
  }
  