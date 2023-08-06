import { useSetRecoilState } from "recoil";
import { IToDo, categories, toDoStatus } from "../atoms";

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
      return newCategory !== categories.DELETE
        ? [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)]
        : [...oldToDos.slice(0, targetIndex), ...oldToDos.slice(targetIndex + 1)];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== categories.TO_DO && <button onClick={() => onClickHandler(categories.TO_DO)}>TO_DO</button>}
      {category !== categories.DOING && <button onClick={() => onClickHandler(categories.DOING)}>DOING</button>}
      {category !== categories.DONE && <button onClick={() => onClickHandler(categories.DONE)}>DONE</button>}
      {<button onClick={() => onClickHandler(categories.DELETE)}>DELETE</button>}
    </li>
  );
};

export default ToDo;
