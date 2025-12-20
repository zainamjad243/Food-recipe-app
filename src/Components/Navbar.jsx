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
        className="w-full h-20 bg-gray-900 flex justify-between items-center p-5"
      >
        <div>
          <Link to="/">
            <h1 className="flex items-center gap-2 text-3xl font-bold">
              <Utensils size={32} className="text-amber-500" />
              Food App
            </h1>
          </Link>
        </div>

        <div className="flex items-center relative">
          <input
            className="h-10 border-2 rounded-2xl pl-4 pr-10 focus:outline-none"
            type="text"
            placeholder="Search Food Now"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />

          <button type="submit">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-amber-500 hover:scale-125 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
