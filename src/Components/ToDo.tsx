import { useSetRecoilState } from "recoil";
import { IToDo, toDoStatus } from "../atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoStatus);
  const onClickHandler = (newCategory: IToDo["category"]) => {
    console.log("i wanna go to", newCategory);
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      console.log(targetIndex);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: newCategory };
      console.log(oldToDo, newToDo);
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && <button onClick={() => onClickHandler("TO_DO")}>TO_DO</button>}
      {category !== "DOING" && <button onClick={() => onClickHandler("DOING")}>DOING</button>}
      {category !== "DONE" && <button onClick={() => onClickHandler("DONE")}>DONE</button>}
    </li>
  );
};

export default ToDo;
