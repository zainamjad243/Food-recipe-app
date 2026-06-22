import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {

  // console.log("the id is " , meal.idMeal);
  return (
    <>
    <Link to={`/recipe/${meal.idMeal}`}>
      <div
        className="w-full max-w-[280px] h-80 bg-gray-600 border-amber-500 border-2 
                flex flex-col justify-between items-center py-6 px-4 mb-2 
                rounded-2xl transition-all duration-300 ease-in-out
                hover:scale-95 hover:shadow-xl hover:border-amber-400 cursor-pointer mx-auto"
      >
        <div className="flex justify-center items-center flex-1">
          <img
            className="w-40 h-40 max-w-full aspect-square object-cover rounded-xl transition-transform duration-300 hover:scale-95"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
        </div>
        <h1 className="text-center px-1 text-base sm:text-lg font-semibold line-clamp-2 mt-3">{meal.strMeal}</h1>
      </div>
    </Link>
    </>
  );
};

export default RecipeCard;
