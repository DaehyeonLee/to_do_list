import { atom } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "DONE" | "DOING" | "TO_DO";
}

export const toDoStatus = atom<IToDo[]>({ key: "toDo", default: [] });
