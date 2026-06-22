import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Clock , Loader } from "lucide-react";

import fatchData from "./fatchData";

const TrendingRecipe = ({ title, fetchUrl }) => {
  const { data, loading, error } = fatchData(fetchUrl);

  const meal = data?.meals || [];
  // console.log(meal);

  const settings = {
    infinite: meal.length > 6,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          infinite: meal.length > 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: meal.length > 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          infinite: meal.length > 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          infinite: meal.length > 2,
        }
      }
    ]
  };

  if (loading) return <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-amber-500"/>
        Preparing your recipe...
    </div>;

  return (
    <>
      <h1 className="px-5 flex mb-8 text-2xl sm:text-3xl mt-10">
        <span className="border-l-4 border-amber-500 pl-3 flex justify-center items-center gap-2 mr-4">
          <Clock size={35} />
        </span>
        {title}
      </h1>

      <div className="px-5">
        <Slider {...settings}>
          {meal.map((item) => (
            <div key={item.idMeal}>
              <Link to={`/recipe/${item.idMeal}`}>
                <div className="flex items-center justify-center gap-3 my-3 mx-1 cursor-pointer">
                  <div
                    className="w-24 h-24 sm:w-35 sm:h-35 bg-gray-600 border-amber-500 border-2 
                               flex items-center justify-center rounded-xl transition hover:scale-105"
                  >
                    <img
                      src={item.strMealThumb}
                      alt={item.strMeal}
                      className="w-16 h-16 sm:w-25 sm:h-25 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TrendingRecipe;
