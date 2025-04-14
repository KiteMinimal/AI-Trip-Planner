import React, { useEffect, useState } from "react";

const PlacesToVisit = ({ trip }) => {
  const [itinenary, setItinenary] = useState("");

  useEffect(() => {
    if (trip && trip.tripData) {
      const dynamicKey = Object.keys(trip.tripData)[0]; // dynamically get the key like 'NetherlandsGroupTrip'
      const itinenaryList = trip.tripData[dynamicKey]?.Itinerary || [];
      setItinenary(itinenaryList);
    }
  }, [trip]);

  return (
    <div className="mt-10">
      <h2 className="font-bold text-lg">Places To Visit</h2>
      <div className="">
        {Object.entries(itinenary).map(([day, details]) => {
          return (
            <div key={day} className="my-10 border p-4 rounded shadow">
              <h2 className="text-xl font-bold text-amber-950">
                {day}: {details.Theme}
              </h2>
              <div className="grid md:grid-cols-2  mt-4">
                {details.Plan.map((place, index) => (
                  <div
                    key={index}
                    className="flex border p-2 m-3 rounded shadow hover:scale-105 transition-all cursor-pointer"
                  >
                    <img
                      src="/lakeView.avif" /* {place?.ImageUrl} */
                      alt={place?.PlaceName}
                      className="w-32 h-32 object-cover rounded mb-3"
                    />
                    <div className="flex flex-col  ml-4 gap-3">
                      <h2 className="font-semibold font-mono">
                        Visiting Time :
                        <span className="font-serif font-normal">
                          {" "}
                          {place?.BestTimeToVisit}
                        </span>
                      </h2>
                      <h2 className="font-semibold font-mono">
                        Place : <spam className="font-normal">{place.PlaceName}</spam> :{" "}
                        <span className=" font-transform font-normal text-slate-400">
                          {place.PlaceDetails}
                        </span>
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlacesToVisit;
