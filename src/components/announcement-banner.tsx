import React from "react";

interface BannerProps {
  txt: string;
}

const AnnouncementBanner: React.FC<BannerProps> = ({ txt }) => {
    return (
      <div className="text-center bg-emerald-700">
        <p className="pt-1 pb-1 text-xs text-white">{txt}</p>
      </div>
    )
  }
  
export default AnnouncementBanner