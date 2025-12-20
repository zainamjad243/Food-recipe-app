import React from "react";
import { Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cuisine = () => {
  const navigate = useNavigate();

  const featuredAreas = [
    "American",
    "British",
    "Canadian",
    "Chinese",
    "Indian",
    "Italian",
    "Mexican",
    "Russian",
    "Thai",
  ];

  const handleCuisineClick = (area) => {
    navigate(`/cuisine/${area}`);
  };

  return (
    <div className="w-full h-18 bg-gray-800/85 p-6 flex items-center">
      <div className="ml-5">
        <h1 className="flex items-center text-amber-500 text-xl">
          <Globe size={25} className="mr-2" />
          Global Cuisine :
        </h1>
      </div>

      <div className="flex flex-row gap-2 ml-4 items-center">
        {featuredAreas.map((area) => (
          <button
            key={area}
            onClick={() => handleCuisineClick(area)}
            className="text-white bg-gray-700 px-3 py-1 rounded-lg hover:bg-amber-500 transition-transform hover:scale-110"
          >
            {area}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cuisine;
