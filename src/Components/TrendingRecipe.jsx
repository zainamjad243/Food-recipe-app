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
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
  };

  if (loading) return <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-amber-500"/>
        Preparing your recipe...
    </div>;

  return (
    <>
      <h1 className="px-5 flex mb-8 text-3xl mt-10  ">
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
          <div className="flex items-center justify-center gap-3 m-4 cursor-pointer">
            <div
              className="w-35 h-35 bg-gray-600 border-amber-500 border-2 
                         flex items-center justify-center rounded-xl"
            >
              <img
                src={item.strMealThumb}
                alt=""
                className="w-25 h-25 object-cover"
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
