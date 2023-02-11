import { Redirect } from "react-router-dom";

export default function PrivateRoute({ children }) {
  if (localStorage.getItem("s11g2")) {
    return children;
  } else {
    return <Redirect to="/" />;
  }
}
