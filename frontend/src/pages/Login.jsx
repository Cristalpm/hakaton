import React from "react";
import Button from "../components/Button";

const Login = ({ setIsEnter }) => {
  React.useEffect(() => {
    setIsEnter(true);
  }, []);
  return (
    <div>
      <Button>Войти</Button>
    </div>
  );
};

export default Login;
