import { db } from "@/services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import PlacesToVisit from "../components/PlacesToVisit";

const ViewTrip = () => {
  const [trip, setTrip] = useState([]);

  const { tripId } = useParams();

  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);

  //used to get data from firebase
  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No such document!");
      toast("Trip not found.");
    }
  };

  return (
    <div className="p-10 md:p-20 lg:p-32 xl:p-36">
      {/* Information Section */}
      <InfoSection trip={trip} />
      {/* Recommanded Hotels */ /* Daily Plan */}
      <Hotels trip={trip} />
      {/* <DailyPlan trip={trip} /> */}
      <PlacesToVisit trip={trip} />
    </div>
  );
};

export default ViewTrip;
