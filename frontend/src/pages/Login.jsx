import React from "react";
<<<<<<< HEAD
import Form from "../components/Form";
import styles from "./Login.module.scss";
=======
import Button from "../components/Button";
>>>>>>> 3f85197f0e56d15a7c94911bbd7a32ac9f56100f

const Login = ({ setIsEnter }) => {
  React.useEffect(() => {
    setIsEnter(true);
  }, []);
<<<<<<< HEAD
  return <div className={styles.gachi}>
            <div className={styles.gachimg}></div>
            <Form />
         </div>;
=======
  return <div></div>;
>>>>>>> 3f85197f0e56d15a7c94911bbd7a32ac9f56100f
};

export default Login;
