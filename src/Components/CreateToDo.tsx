import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoStatus } from "../atoms";

interface IForm {
  toDo: string;
}

const CreateToDo = () => {
  const modFn = useSetRecoilState(toDoStatus);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmitHandler = (data: IForm) => {
    console.log("add to do", data.toDo);
    modFn((oldVlaue) => [{ text: data.toDo, id: Date.now(), category: "TO_DO" }, ...oldVlaue]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input {...register("toDo", { required: "toDo is required" })} placeholder="Write a to do"></input>
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;
