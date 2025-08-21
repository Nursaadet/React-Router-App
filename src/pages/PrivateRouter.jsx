import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";
// import Login from "./Login";

function PrivateRouter() {
  const isLogged = false;
//   const navigate = useNavigate();
  return <div>{isLogged ? <Outlet /> : <Navigate to ={"/login"}/>}  </div>;
}

export default PrivateRouter;
