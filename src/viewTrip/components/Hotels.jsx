import React from "react";

const Hotels = ({ trip }) => {
  return (
    <div>
      <h1 className="font-bold text-xl mt-5">Recommanded Hotels</h1>

      <div>
        {trip?.tripData?.Hotels?.map((item, index) => {
          <div key={index}>
            <img src="/picaso.jpg" alt="hotels" />
          </div>;
        })}
      </div>
    </div>
  );
};

export default Hotels;
