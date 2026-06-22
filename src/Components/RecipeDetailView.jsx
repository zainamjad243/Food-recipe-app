import React, { useEffect } from "react";
import { Loader, ChevronLeft, BookOpen } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import fatchData, { API_URL } from "./fatchData";

const RecipeDetailView = () => {
  const { id } = useParams();

  const { data, loading, error } = fatchData(`${API_URL}lookup.php?i=${id}`);
  const meal = data?.meals?.[0];
  const ingredients = [];

  if (meal) {
    for (let i = 1; i <= 20; i++) {
      const ingradient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingradient && ingradient.trim()) {
        ingredients.push({
          ingradient: ingradient.trim(),
          measure: measure ? measure.trim() : "",
        });
      }
    }
  }

  const instructions = meal?.strInstructions
    ? meal.strInstructions
        .split(".")
        .map((step) => step.trim())
        .filter((step) => step.length > 0)
    : [];

  // console.log("the ingradients is ", ingredients);
  useEffect(() => {
    if (data) {
      console.log("Fetched recipe data:", data);
    }
  }, [data]);

  if (loading)
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-amber-500" />
        Preparing your recipe...
      </div>
    );

  return (
    <>
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to={"/"}
          className="flex items-center text-gray-300 hover:text-amber-500
        mb-6 transition text-lg gr"
        >
          {" "}
          <ChevronLeft className="w-6 h-6 mr-1 transition" />
          Back to Dashboard
        </Link>

        <div className="flex flex-col lg:flex-row bg-gray-800 max-w-8xl p-5 sm:p-8 mt-5 rounded-2xl gap-8 lg:gap-12">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h1 className="text-2xl sm:text-3xl mb-5 text-center lg:text-left">{meal?.strMeal}</h1>
            <div className="w-full max-w-[360px] aspect-square border-amber-500 border-2 flex items-center justify-center rounded-xl hover:scale-105 transition">
              <img
                className="w-[85%] h-[85%] rounded-2xl object-cover"
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
              />
            </div>
          </div>
          <div className="flex-1 border-t-2 lg:border-t-0 lg:border-l-2 border-amber-500/50 pt-6 lg:pt-0 lg:pl-10">
            <h2 className="text-2xl mb-4 font-semibold text-amber-400">
              Ingredients
            </h2>

            <ul className="space-y-2 max-w-[500px]">
              {ingredients.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center w-full bg-gray-700/60 p-3 rounded-lg text-sm sm:text-base hover:bg-gray-700/85 transition"
                >
                  <span>{item.ingradient}</span>
                  <span className="text-amber-300 font-semibold">{item.measure}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-gray-800 mt-4 p-5 sm:p-8 rounded-2xl">
          <h1 className="px-2 sm:px-5 flex mb-5 text-2xl sm:text-3xl mt-5">
            <span className="border-l-4 border-amber-500 pl-3 flex items-center mr-4">
              <BookOpen size={35} />
            </span>
            Detail Preparation Steps
          </h1>

          <ol className="space-y-4 px-4 sm:px-8 list-decimal text-gray-300">
            {instructions.map((step, index) => (
              <li key={index} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </main>
    </>
  );
};

export default RecipeDetailView;
