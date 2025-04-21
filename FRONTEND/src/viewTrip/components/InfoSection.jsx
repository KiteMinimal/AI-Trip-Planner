import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import axios from "axios";

const InfoSection = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState("/mainView.avif");

  useEffect(() => {
    if (trip) {
      fetchPhotoFromBackend();
    }
  }, [trip]);

  const fetchPhotoFromBackend = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/search-places", {
        textQuery: trip?.userSelection?.location?.label,
      });

      const photoRef = res.data.places?.[0]?.photos?.[0]?.name;
      console.log(photoRef)

      if (photoRef) {
        const url = `https://places.googleapis.com/v1/${photoRef}/media?maxWidthPx=600&key=${
          import.meta.env.VITE_GOOGLE_PLACE_API_KEY
        }`;
        
        console.log(url);
        
        setPhotoUrl(url);
      }
    } catch (err) {
      console.error("Error fetching photo:", err.message);
    }
  };

  return (
    <div>
      <img
        src={photoUrl}
        className="h-[340px] w-full object-cover rounded-xl"
        alt="Trip location"
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
        <Button>
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
};

export default InfoSection;
