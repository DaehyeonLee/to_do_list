import { useState } from "react";
import { useForm } from "react-hook-form";

//  without react-hook-form
// const ToDoList = () => {
//   const [toDo, setToDo] = useState("");
//   const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };
//   const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmitHandler}>
//         <input
//           onChange={onChangeHandler}
//           value={toDo}
//           placeholder="write a to do"
//         ></input>
//         <button>Add</button>
//       </form>
//     </div>
//   );
// };

//  with react-hook-form
const ToDoList = () => {
  const { register, watch, handleSubmit, formState } = useForm();
  console.log(watch());
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...(register("email"), { required: true })}
          placeholder="email"
        ></input>
        <br></br>
        <input
          {...(register("firstName"), { required: true, minLength: 5 })}
          placeholder="firstName"
        ></input>
        <br></br>
        <input
          {...(register("lastName"),
          {
            required: true,
            minLength: 5,
          })}
          placeholder="lastName"
        ></input>
        <br></br>
        <input
          {...(register("userName"), { required: true, minLength: 5 })}
          placeholder="userName"
        ></input>
        <br></br>
        <input
          {...(register("passWord"), { required: true, minLength: 5 })}
          placeholder="passWord"
        ></input>
        <br></br>
        <input
          {...register("passWordConfirm")}
          placeholder="passWordConfirm"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
