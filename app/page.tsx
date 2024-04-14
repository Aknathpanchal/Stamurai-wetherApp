"use client"

// import { fetchAnime } from "./action";
import LoadMore from "../components/LoadMore";
import { Search } from "@/components/Search";
import CityDataTable from "@/components/CityDataTable";
import { observer } from "mobx-react-lite";
import { useStore } from "./store";
import { useEffect, useState } from "react";
import { CityData } from "@/components/AnimeCard";

let page = 0

export default observer( function Home() {
  const {
    rootStore: { tasksDetails },
  } = useStore();

  const [tasks, setTasks] = useState<CityData[]>(tasksDetails.getTasksDetails);

  console.log("tasks",tasks)

  useEffect(() => {
    tasksDetails.fetchTasksDetails({page}).then(() => {
      const userDetails = tasksDetails.getTasksDetails;
      setTasks(userDetails);
    });
    page++
  }, [tasksDetails]);

  return (

        <section>
        <div className='container flex items-center m-auto justify-center'>
        <main className="flex flex-col gap-2">
      <div className="flex gap-4">
        <h2 className="text-3xl font-bold w-[100%]">Explore City's Wether</h2>
        <Search setTasks={setTasks}/>
      </div>
    
      <CityDataTable 
      results={tasks}
      />
    </main>
        </div>
      </section>
  );
})
