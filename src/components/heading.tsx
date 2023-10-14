import React from "react";

interface HeadingProps {
  header: string;
  subtitle: string;
}

const Heading: React.FC<HeadingProps> = ({ header , subtitle }) => {
    return (
      <div className="bg-slate-50 sm:flex w-screen sm:place-content-between">
        <h1 className="text-slate-950 font-bold text-header pl-10 sm:pb-5 pt-5">{header}</h1>
        <h2 className="text-slate-950 sm:text-right pb-10 px-10 sm:pt-10 font-serif font-medium text-2xl">{subtitle}</h2>
      </div>
    )
  }
  
export default Heading;