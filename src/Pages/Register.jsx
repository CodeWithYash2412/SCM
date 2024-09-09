import React, { useState } from "react";
import RegisterComponent from "../Components/RegisterLogin/RegisterComponent";
import LoginComponent from "../Components/RegisterLogin/LoginComponent";
import { useLocation } from "react-router-dom";

const Register = () => {
  const [login, setLogin] = useState(true);

  const location = useLocation();
  const message = location.state?.message || "";

  return (
    <>
      {login ? (
        <LoginComponent onClick={setLogin} message={message} />
      ) : (
        <RegisterComponent onClick={setLogin} />
      )}
    </>
  );
};

export default Register;
