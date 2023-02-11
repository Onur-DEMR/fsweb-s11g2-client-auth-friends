import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function AddFriend() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    axios
      .post(
        "http://localhost:9000/api/friends",
        { name: data.name, email: data.email },
        {
          headers: {
            Authorization: localStorage.getItem("s11g2"),
          },
        }
      )

      .then((res) => {
        console.log(res);
        history.push("/friends");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" font-extrabold">
      <h1 className=" mb-2 text-5xl">ADD FRIEND</h1>
      <form className="mb-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <h3 className=" mr-24">FRIEND NAME</h3>
          <input
            className="p-2 bg-black text-white"
            type="text"
            {...register("name", { required: "Bu alan zorunludur." })}
          />
        </div>
        <div className=" mb-3">
          <h3 className=" mr-24">FRIEND EMAIL</h3>
          <input
            className="p-2 bg-black text-white"
            type="email"
            {...register("email", { required: "Bu alan zorunludur." })}
          />
        </div>
        <button
          className=" border p-2 pl-16 pr-16 bg-black text-white"
          type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
