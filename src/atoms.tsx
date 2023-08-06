import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

// type categories = "DONE" | "DOING" | "TO_DO";
export enum categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
  "DELETE" = "DELTE",
}
export interface IToDo {
  text: string;
  id: number;
  category: categories;
}

const { persistAtom } = recoilPersist({ key: "recoilPersist", storage: localStorage });
export const toDoStatus = atom<IToDo[]>({ key: "toDo", default: [], effects_UNSTABLE: [persistAtom] });

export const categoryState = atom<categories>({ key: "category", default: categories.TO_DO });

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoStatus);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
    // return [
    //   toDos.filter((toDo) => toDo.category === "TO_DO"),
    //   toDos.filter((toDo) => toDo.category === "DOING"),
    //   toDos.filter((toDo) => toDo.category === "DONE"),
    // ];
  },
});
