import { useState } from "react";

const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={onChangeHandler}
          value={toDo}
          placeholder="write a to do"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
