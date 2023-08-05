import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoStatus } from "../atoms";
import ToDo from "./ToDo";

const ToDoList = () => {
  // const [value, modFn] = useRecoilState(toDoStatus);
  const value = useRecoilValue(toDoStatus);
  // const modFn = useSetRecoilState(toDoStatus);
  console.log(value);
  return (
    <div>
      <h1>ToDos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {value.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
