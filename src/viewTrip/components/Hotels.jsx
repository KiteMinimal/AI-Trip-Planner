import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hotels = ({ trip }) => {
  const [hotels, setHotels] = useState([]);
  const [tripKey, setTripKey] = useState("");

  useEffect(() => {
    if (trip && trip.tripData) {
      const dynamicKey = Object.keys(trip.tripData)[0]; // dynamically get the key like 'NetherlandsGroupTrip'
      setTripKey(dynamicKey);
      const hotelList = trip.tripData[dynamicKey]?.Hotels || [];
      setHotels(hotelList);
    }
  }, [trip]);

  return (
    <div>
      <h1 className="font-bold text-xl mt-5">
        Recommended Hotels{" "}
        {tripKey && `- ${tripKey.replace(/([A-Z])/g, " $1")}`}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {hotels?.map((item, index) => (
          <Link
            to={
              "https://www.google.com/maps/search/?api=1&query=" +
              item?.HotelName + "," +
              item?.HotelAddress
            }
            target="_blank"
            key={index}
          >
            <div
              key={index}
              className="border p-4 rounded shadow hover:scale-105 transition-all cursor-pointer"
            >
              <img
                src={item?.HotelImageUrl || "/picaso.jpg"}
                alt={item?.HotelName}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h2 className="text-lg font-semibold">{item?.HotelName}</h2>
              <p className="text-sm text-gray-600">{item?.HotelAddress}</p>
              <p className="text-sm text-gray-800">{item?.Description}</p>
              <p className="text-sm mt-1 font-medium">Price: {item?.Price}</p>
              <p className="text-sm">Rating: ⭐ {item?.Rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
