import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelesList,
} from "../constants/option.js";
import { toast } from "sonner";
import { chatSession } from "@/services/AIModel.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/services/firebaseConfig.jsx";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CreateTrip = () => {
  const [places, setPlaces] = useState("");
  const [formData, setFormData] = useState([]);
  const [opneDialogue, setOpneDialogue] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpneDialogue(true);
      return;
    }

    if (
      (formData?.noOfDays > 10 && !formData?.location) ||
      !formData?.noOfDays ||
      !formData?.budget ||
      !formData?.travelList
    ) {
      toast("Required all the credentials.");
      return;
    }

    setLoading(true);

    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label
    )
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.travelList)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);

    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log(result?.response?.text());

    setLoading(false);

    SaveAITrip(result?.response?.text());
  };

  const SaveAITrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();

    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigate(`/viewtrip/${docId}`);
  };

  function GetUserProfile(tokenInfo) {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data));
        setOpneDialogue(false);
        OnGenerateTrip();
      });
  }

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 my-10 mx-36">
      <h1 className="font-bold text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h1>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide an basic information, and our trip planner will generate a
        customized itinary based on your preferences
      </p>
      <div className="mt-20">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              places,
              onChange: (place) => {
                setPlaces(place);
                handleInputChange("location", place);
              },
            }}
          />
        </div>
        <div className="flex flex-col mt-7">
          <label className="text-xl my-3 font-medium" htmlFor="number">
            How many days are you planning your trip?
          </label>
          <input
            className="border-solid border-2 border-gray-300 p-2 rounded-md"
            type="number"
            placeholder="Ex.3"
            // value={formData}
            onChange={(e) => {
              handleInputChange("noOfDays", e.target.value);
            }}
          />
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-xl my-3 font-medium">What is your Budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-l 
                ${formData?.budget == item.title && "shadow-lg border-black"}
                `}
            >
              <h1 className="text-4xl">{item.icon}</h1>
              <h1 className="font-bold text-lg">{item.title}</h1>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-3">
        <h2 className="text-xl my-3 font-medium">
          Whom do you planning to traveling with on your next adventure?
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTravelesList.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleInputChange("travelList", item.people)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
                ${
                  formData?.travelList == item.people &&
                  "shadow-lg border-black"
                }
                `}
            >
              <h1 className="text-4xl">{item.icon}</h1>
              <h1 className="font-bold text-lg">{item.title}</h1>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        disabled={loading}
        onClick={OnGenerateTrip}
        className="ml-[80%] my-10 bg-black rounded-md p-3 font-semibold text-base text-white  hover:shadow-md"
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="w-7 h-7 animate-spin" />
        ) : (
          "Generate Trip"
        )}
      </button>

      <Dialog open={opneDialogue}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription>
              <img src="logo.svg" alt="" />
              <h2 className="font-bold text-lg mt-7">Sign In With Google</h2>
              <div>
                <p>Sign in to the app with google authentication securly</p>
              </div>
              <button
                onClick={login}
                className="flex items-center justify-center w-full mt-5 text-white bg-black rounded-md p-2 font-semibold"
              >
                <FcGoogle className="mr-3 w-7 h-7" />
                Sign In with Google
              </button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateTrip;
