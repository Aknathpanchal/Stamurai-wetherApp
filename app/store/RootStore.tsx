import { TasksDetailsStore } from "./TasksDetailsStore";

export interface IRootStore {
  tasksDetails: TasksDetailsStore;
}


export class RootStore implements IRootStore {
  tasksDetails: TasksDetailsStore;


  constructor() {
    this.tasksDetails = new TasksDetailsStore(this);
  }
}
