import React from "react";

const Login = ({ setIsEnter }) => {
  React.useEffect(() => {
    setIsEnter(true);
  }, []);
  return <div>Login</div>;
};

export default Login;
