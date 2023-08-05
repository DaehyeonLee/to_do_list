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

interface IForm {
  todo: string;
  Email: string;
  FirstName: string;
  LastName: string;
  UserName: string;
  Password: string;
  PasswordConfirm: string;
  extraError?: string;
}
const HookForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({ defaultValues: { Email: "@naver.com" } });
  const onValid = (data: IForm) => {
    if (data.Password !== data.PasswordConfirm) {
      setError("PasswordConfirm", { message: "password are not same! plz check" }, { shouldFocus: true });
    }
    setError("extraError", { message: "server is down" });
  };
  console.log(errors);
  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
        <input {...register("todo", { required: true })} placeholder="Write a to do" />
        <input
          {...register("Email", {
            required: "Email is required",
            pattern: { value: /^[A-Za-z0-9._%+-]+@naver.com$/, message: "only @naver.com allowed" },
          })}
          placeholder="Email"
        />
        <span>{errors?.Email?.message}</span>
        <input
          {...register("FirstName", {
            required: " First name is required",
            validate: {
              noNico: (value) => (value.includes("nico") ? "no nicos allowed" : true),
              noNick: (value) => (value.includes("nick") ? "no nicks allowed" : true),
            },
          })}
          placeholder="Firstname"
        />
        <span>{errors?.FirstName?.message}</span>
        <input {...register("LastName", { required: "Last name is required" })} placeholder="Lastname" />
        <span>{errors?.LastName?.message}</span>
        <input {...register("UserName", { required: "User name is required", minLength: 10 })} placeholder="Username" />
        <span>{errors?.UserName?.message}</span>
        <input {...register("Password", { required: "Password is required", minLength: 5 })} placeholder="password" />
        <span>{errors?.Password?.message}</span>
        <input
          {...register("PasswordConfirm", {
            required: "Password is required",
            minLength: { value: 5, message: "your password too short" },
          })}
          placeholder="password Confirm"
        />
        <span>{errors?.PasswordConfirm?.message}</span>
        <button>Add</button>
        {/* <span>{errors?.extraError?.message}</span> */}
      </form>
    </div>
  );
};

export default HookForm;
