import React, { useCallback, useState } from "react";
import Navbar from "./Components/Navbar";
import Cuisine from "./Components/Cuisine";
import HomeView from "./Components/HomeView";
import RecipeDetailView from "./Components/RecipeDetailView";
import SearchView from "./Components/SearchView";
import CuisineView from "./Components/CuisineView";
import CatagoriesSelection from "./Components/CatagoriesSelection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const API_URL =
  "https://www.themealdb.com/api/json/v1/1/";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchresult, setSearchresult] = useState([]);
  const [searchloading, setSearchloading] = useState(false);

  const handleSearch = useCallback(async (query) => {
    setSearchQuery(query);
    setSearchresult([]);
    setSearchloading(true);


    try {
        const res = await fetch(`${API_URL}search.php?s=${query}`);
        if (!res.ok) throw new Error(`Error is  , ${res.status} `);

        const result = await res.json();
        setSearchresult(result?.meals || []);
      } catch (error) {
        console.log(error);
      } finally {
        setSearchloading(false);
      }
  }, []);

  return (
    <Router>
      <Navbar handleSearch={handleSearch} />
      <Cuisine />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/recipe/:id" element={<RecipeDetailView />} />
        <Route path="/search/:query" element={<SearchView meal={searchresult} loading={searchloading} />} />
        <Route path="/cuisine/:area" element={<CuisineView />} />

      </Routes>
    </Router>
  );
};

export default App;
