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
    <div className="w-full bg-gray-800/85 py-4 px-6 flex flex-col md:flex-row md:items-center gap-4">
      <div className="flex items-center shrink-0">
        <h1 className="flex items-center text-amber-500 text-lg md:text-xl font-semibold">
          <Globe size={22} className="mr-2" />
          Global Cuisine :
        </h1>
      </div>

      <div className="flex flex-row gap-2 overflow-x-auto scrollbar-none py-1 -my-1 w-full md:w-auto justify-start md:justify-end">
        {featuredAreas.map((area) => (
          <button
            key={area}
            onClick={() => handleCuisineClick(area)}
            className="text-white bg-gray-700 px-3 py-1 rounded-lg text-sm md:text-base font-medium shrink-0 hover:bg-amber-500 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            {area}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cuisine;
