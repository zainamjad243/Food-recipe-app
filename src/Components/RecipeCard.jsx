import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {

  // console.log("the id is " , meal.idMeal);
  return (
    <>
    <Link to={`/recipe/${meal.idMeal}`}>
      <div
        className="w-70 h-80 bg-gray-600 border-amber-500 border-2 gap-3 mb-2 
                rounded-2xl transition-all duration-300 ease-in-out
                hover:scale-95 hover:shadow-xl hover:border-amber-400 cursor-pointer"
      >
        <div className="flex justify-center items-center mt-8">
          <img
            className="w-50 h-50 mb-2 transition-transform duration-300 hover:scale-95"
            src={meal.strMealThumb}
            alt=""
          />
        </div>
        <h1 className="text-center px-1 text-lg">{meal.strMeal}</h1>
      </div>
    </Link>
    </>
  );
};

export default RecipeCard;
