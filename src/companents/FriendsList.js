import axios from "axios";
import { useEffect, useState } from "react";

export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          Authorization: localStorage.getItem("s11g2"),
        },
      })
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className=" text-start flex flex-col ml-28 uppercase font-extrabold">
        <h1 className=" text-5xl">FRİENDS LİST</h1>
        <div className=" mb-10">
          {friends.map((item) => (
            <div className=" p-2" key={item.id}>
              <span>-{item.name}</span> - <span>{item.email}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
