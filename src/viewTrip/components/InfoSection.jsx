import { Button } from "@/components/ui/button";
import React from "react";
import { IoIosSend } from "react-icons/io";


const InfoSection = ({ trip }) => {
  return (
    <div>
      <img
        src="/picaso.jpg"
        className="h-[340px] w-full object-cover rounded-xl"
        alt=""
      />

      <div className="my-5 flex flex-col gap-2">
        <h1 className="font-bold text-2xl">
          {trip?.userSelection?.location?.label}
        </h1>
      </div>

      <div className="flex items-center justify-between my-5">
        <div className="flex gap-5 ">
          <h2 className="p-1 px-3 bg-gray-200 rounded-full text-sm md:text-md">
            📅 {trip?.userSelection?.noOfDays} Days
          </h2>
          <h2 className="p-1 px-3 bg-gray-200 rounded-full text-sm md:text-md">
            💳 {trip?.userSelection?.budget} Budget
          </h2>
          <h2 className="p-1 px-3 bg-gray-200 rounded-full text-sm md:text-md">
            🧳 No of traveller : {trip?.userSelection?.travelList}
          </h2>
        </div>
        <Button><IoIosSend /></Button>
      </div>
    </div>
  );
};

export default InfoSection;
