import "./App.css";
import LoginForm from "./companents/LoginForm";
import { Link, Switch, Route } from "react-router-dom";
import FriendsList from "./companents/FriendsList";
import AddFriend from "./companents/AddFriend";
import PrivateRoute from "./companents/PrivateRoute";
import { useState } from "react";

function App() {
  const [check, setCheck] = useState(false);

  const handleClear = () => {
    localStorage.removeItem("s11g2");
  };
  return (
    <div className="App">
      <div className=" bg-slate-100 w-100 p-6 rounded mt-20 first-letter:2px  ">
        <div className=" flex items-center justify-center mb-20 gap-10 font-bold border-b-2 pb-3 border-b-black">
          <h1 className=" font-extrabold">FRIENDS DATABASE</h1>
          <nav className="flex gap-3">
            {!check && (
              <Link className=" bg-black p-2 text-white" to="/">
                LOGIN
              </Link>
            )}
            <Link className=" bg-black p-2 text-white" to="/friends">
              FRİENDLİST
            </Link>
            <Link className=" bg-black p-2 text-white" to="/friends-add">
              ADDFRIEND
            </Link>
            {check && (
              <Link
                className=" bg-black p-2 text-white"
                onClick={() => {
                  setCheck(false);
                  handleClear();
                }}
                to="/">
                LOGOUT
              </Link>
            )}
          </nav>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <LoginForm setCheck={setCheck} />
            </Route>
            <PrivateRoute>
              <Route path="/friends" component={FriendsList} />
              <Route path="/friends-add" component={AddFriend} />
            </PrivateRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
