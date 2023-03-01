import styles from './Button.module.css';

const Button = ({ type, text, handleLogin}) => {

    const entrar = (e) => {
        handleLogin()
    }
    return (
        <div className={styles.button}>
            <input type={type} value={text} />

        </div>
    )
}

export default Button