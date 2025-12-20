import React from 'react'
import RecipeSlider from './RecipeSlider'
import TrendingRecipe from './TrendingRecipe'
import CatagoriesSelection from './CatagoriesSelection'

import { API_URL } from './fatchData'

const HomeView = () => {
  return (
    <>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-gray-700'>
        <RecipeSlider title = "Staff Curated Picks " fetchUrl = {`${API_URL}search.php?f=a`} />

        <TrendingRecipe title = "Quicks And Easy Meals  " fetchUrl = {`${API_URL}filter.php?a=Canadian`}/>

        {/* <CatagoriesSelection /> */}
      </main>
    </>
  )
}

export default HomeView
 