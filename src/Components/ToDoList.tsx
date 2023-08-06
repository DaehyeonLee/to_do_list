import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { categories, categoryState, toDoSelector, toDoStatus } from "../atoms";
import ToDo from "./ToDo";

const ToDoList = () => {
  // const [value, modFn] = useRecoilState(toDoStatus);
  // const value = useRecoilValue(toDoStatus);
  // const modFn = useSetRecoilState(toDoStatus);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInputHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>ToDos</h1>
      <hr />
      <select value={category} onInput={onInputHandler}>
        <option value={categories.TO_DO}>To Do</option>
        <option value={categories.DOING}>Doing</option>
        <option value={categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
      {/* <h2>ToDo</h2>
      <hr />
      <ul>
        {todo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <h2>Doing</h2>
      <hr />
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <h2>Done</h2>
      <hr />
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul> */}
    </div>
  );
};

export default ToDoList;
