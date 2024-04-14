// "use client";

// import { ITask, IaddTask } from "@/types/tasks";
import { IRootStore } from "./RootStore";
import { action, computed, makeAutoObservable, observable, runInAction  } from "mobx";
import { toast } from "react-toastify";
import { CityData } from "@/components/AnimeCard";


export class TasksDetailsStore {
  tasksDetails: CityData[] = [];
  // taskDetail: ITask = {} as ITask;
  rootStore: IRootStore;


  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {
      tasksDetails: observable,
      fetchTasksDetails: action,
      getTasksDetails: computed,
      getSearchTask: action, // Mark getSearchTask as an action
    });
  }


  async fetchTasksDetails({page}:{page?:number}) {
    const response = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=${100}&offset=${page}`);
    const data = await response.json();
    this.tasksDetails.push(...data.results)
  }


  get getTasksDetails() {
    return this.tasksDetails;
  }


  async getSearchTask(value: string){
    const res = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?where=ascii_name%20like%20%22${value}%22&limit=${100}`);
    const searchTask = await res.json();
    console.log("searchTask",searchTask)
    runInAction(() => {
      this.tasksDetails = searchTask.results;
    });
    // this.tasksDetails = searchTask.results;
  };

  async getSingleTask(id: string){
    // const res = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?where=ascii_name%20like%20%22${value}%22&limit=${100}`);
    // const singleTask = await res.json();
    // this.taskDetail = singleTask;
  };

}




