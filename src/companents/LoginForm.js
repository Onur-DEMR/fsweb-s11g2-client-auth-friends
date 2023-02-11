import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function LoginForm({ setCheck }) {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: "workintech",
      password: "wecandoit",
    },
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:9000/api/login", data)
      .then((res) => {
        localStorage.setItem("s11g2", res.data.token);
        setCheck(true);
        history.push("/friends");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className=" text-5xl font-bold">SIGN IN</h1>
      <form
        className=" flex justify-start flex-col mt-5 text-start ml-40 mb-20"
        onSubmit={handleSubmit(onSubmit)}>
        <div className=" mb-3">
          <h3 className=" font-extrabold">USERNAME</h3>
          <input
            className=" p-3 bg-black text-white"
            type="text"
            placeholder="username"
            {...register("username", { required: "Bu alan zorunludur." })}
          />
        </div>
        <div>
          <h3 className=" font-extrabold">PASSWORD</h3>
          <input
            className=" p-3  bg-black text-white"
            type="password"
            placeholder="password"
            {...register("password", { required: "Bu alan zorunludur." })}
          />
        </div>
        <button
          className="border p-3 bg-black text-white pl-16 pr-16 ml-1 mt-3 font-bold mr-36 "
          type="submit">
          SUBMİT
        </button>
      </form>
    </div>
  );
}
