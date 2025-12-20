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
    <div className="p-6">
      <h2 className="text-2xl mb-4 text-amber-500">
        {area} Cuisine
      </h2>

      {meals.length === 0 ? (
        <p className="text-gray-400">No recipes found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {meals.map((meal) => (
            <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`}>
              <div className="bg-gray-800 p-3 rounded-lg hover:scale-105 transition">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="rounded-md"
                />
                <p className="mt-2 text-center">{meal.strMeal}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CuisineView;
