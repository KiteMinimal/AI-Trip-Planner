import React, { useEffect, useState } from "react";

const PlacesToVisit = ({ trip }) => {
  const [itinary, setItinary] = useState([]);
  const [tripKey, setTripKey] = useState("");

  useEffect(() => {
    if (trip && trip.tripData) {
      const dynamicKey = Object.keys(trip.tripData)[0]; // dynamically get the key like 'NetherlandsGroupTrip'
      setTripKey(dynamicKey);
      const hotelList = trip.tripData[dynamicKey]?.Hotels || [];
      setItinary(hotelList);
    }
  }, [trip]);

  return (
    <div className="mt-10">
      <h2 className="font-bold text-lg">
        Places To Visit {tripKey && `- ${tripKey.replace(/([A-Z])/g, " $1")}`}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {itinary.tripData?.itinerary?.map((item, index) => {
          return (
            <div
              key={index}
              className="border p-4 rounded shadow hover:scale-105 transition-all cursor-pointer"
            >
              <h2 className="text-lg font-semibold">{item}</h2>
              <p className="text-sm text-gray-600">{item?.description}</p>
              <p className="text-sm mt-1 font-medium">Price: {item?.price}</p>
              <p className="text-sm">Rating: ⭐ {item?.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlacesToVisit;
