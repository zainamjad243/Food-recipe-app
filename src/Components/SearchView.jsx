import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Loader } from "lucide-react";
import RecipeCard from "./RecipeCard";

const SearchView = ({ meal, loading }) => {
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

        {loading && (
          <div className="text-center p-8 text-gray-300">
            <Loader className="animate-spin inline-block mr-2 text-amber-500" />
            Preparing your recipe...
          </div>
        )}

        {!loading && meal.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 justify-center">
            {meal.map((meal, index) => (
              <div key={index} className="w-full flex justify-center">
                <RecipeCard meal={meal} />
              </div>
            ))}
          </div>
        )}

        {!loading && meal.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No recipes found matching your query.</p>
          </div>
        )}
      </main>
    </>
  );
};

export default SearchView;
