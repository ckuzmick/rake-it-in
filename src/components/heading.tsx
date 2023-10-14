import React from "react";

interface HeadingProps {
  header: string;
  subtitle: string;
}

const Heading: React.FC<HeadingProps> = ({ header , subtitle }) => {
    return (
      <div className="bg-slate-50 inline-flex w-screen place-content-between">
        <h1 className="text-slate-950 font-bold text-header pl-10 py-5">{header}</h1>
        <h2 className="text-slate-950 text-right pr-10 pt-20">{subtitle}</h2>
      </div>
    )
  }
  
export default Heading;