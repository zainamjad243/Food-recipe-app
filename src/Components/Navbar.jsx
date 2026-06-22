import React, { useState } from "react";
import { Utensils, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({handleSearch}) => {  

  const [input, setinput] = useState("");
  const navigate = useNavigate();
  function formHandling(e) {
    e.preventDefault();

    if(input.trim()){
      handleSearch(input.trim());
      navigate(`/search/${encodeURIComponent(input.trim())}`);

      setinput("")
    }
    
  }

  return (
    <div>
      <form
        onSubmit={formHandling}
        className="w-full min-h-[5rem] py-4 bg-gray-900 flex flex-col sm:flex-row justify-between items-center px-6 md:px-10 gap-4"
      >
        <div>
          <Link to="/">
            <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
              <Utensils size={32} className="text-amber-500" />
              Food App
            </h1>
          </Link>
        </div>

        <div className="flex items-center relative w-full sm:w-auto max-w-xs">
          <input
            className="h-10 w-full border-2 rounded-2xl pl-4 pr-10 focus:outline-none text-black bg-white"
            type="text"
            placeholder="Search Food Now"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />

          <button type="submit">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-amber-500 hover:scale-125 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
