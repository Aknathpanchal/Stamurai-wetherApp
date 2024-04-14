"use client"
import { fetchSerchedData } from "@/app/action";
import { CityData } from "./AnimeCard";
import { Dispatch, SetStateAction, useState } from "react";

export const Search = ({setTasks}:{setTasks:Dispatch<SetStateAction<CityData[]>>}) => {
const [input, setInput] = useState("");

const handleChange = async (value:string) => {
    setInput(value);
    if(value){
        const data= await fetchSerchedData(value);
        setTasks(data)
    }
   
  };


  return (
    <>
     <div className="search-bar-container">
        <label className="input input-bordered flex items-center justify-end w-[100%] gap-2">
          <input type="text" className="grow" placeholder="Search" value={input} onChange={(e)=>handleChange(e.target.value)}  />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
   </div>
</>
  );
};
