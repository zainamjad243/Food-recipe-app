import React from "react";
import Slider from "react-slick";
import { Clock , Loader } from "lucide-react";


import RecipeCard from "./RecipeCard";
import fatchData from "./fatchData";

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = fatchData(fetchUrl);

  // console.log(data);
  const meal = data?.meals || [];
  // console.log(meal)

  const settings = {
    autoplay: false,
    arrows: true,
    infinite: meal.length > 3,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: meal.length > 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: meal.length > 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

if (loading) return <div className="text-center p-8 text-gray-300">
      <Loader className="animate-spin inline-block mr-2 text-amber-500"/>
      Preparing your recipe...
  </div>;

  return (
    <>
      <h1 className="px-5 flex mb-8 text-2xl sm:text-3xl mt-4">
        <span className="border-l-4 border-amber-500 pl-3 flex justify-center items-center gap-2 mr-4"><Clock size={35} /></span>{title}
      </h1>
      <div className="px-2 sm:px-5 pb-6">
        <Slider {...settings} >
          {meal.map((meal) => (
            <div key={meal.idMeal} className="px-2 sm:px-4 flex justify-center items-center">
              <RecipeCard meal={meal} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default RecipeSlider;
