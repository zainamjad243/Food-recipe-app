import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Loader } from "lucide-react";

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

const CuisineView = () => {
  const { area } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}filter.php?a=${area}`);
        const data = await res.json();
        setMeals(data?.meals || []);
      } catch (error) {
        console.error("Error fetching cuisine:", error);
        setMeals([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [area]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8 text-gray-300">
        <Loader className="animate-spin mr-2 text-amber-500" />
        Preparing your recipe...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl mb-6 text-amber-500 font-semibold border-b-2 border-amber-500/20 pb-2">
        {area} Cuisine
      </h2>

      {meals.length === 0 ? (
        <p className="text-gray-400 text-center py-8">No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {meals.map((meal) => (
            <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`} className="w-full flex justify-center">
              <div className="bg-gray-800 p-4 rounded-xl border border-amber-500/30 hover:border-amber-500 transition duration-300 w-full max-w-[280px] h-80 flex flex-col justify-between items-center cursor-pointer hover:scale-105">
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-40 h-40 object-cover rounded-xl"
                  />
                </div>
                <p className="mt-4 text-center font-semibold text-base sm:text-lg line-clamp-2">{meal.strMeal}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CuisineView;
