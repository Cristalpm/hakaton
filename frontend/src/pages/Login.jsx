import React from "react";
import Form from "../components/Form";
import styles from "./Login.module.scss";

const Login = ({ setIsEnter }) => {
  React.useEffect(() => {
    setIsEnter(true);
  }, []);
  return <div className={styles.gachi}>
            <div className={styles.gachimg}></div>
            <Form />
         </div>;
};

export default Login;
