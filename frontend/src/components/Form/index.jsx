import styles from "./Form.module.scss";

function Form(props) {
    return <form action="" className={styles.form}>
        <h2>Авторизация</h2>
        <label htmlFor="">login</label>
        <input type="text" name="" id="" placeholder="Login" />
        <label htmlFor="">Password</label>
        <input type="text" name="" id="" placeholder="********"/>
        <div className="checkboxix">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Запомнить меня </label>
        </div>
        
    </form> 

}

export default Form;