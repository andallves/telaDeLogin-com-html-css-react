import styles from './Input.module.css';

const Input = ({ type, name, text, setLogin, icon}) => {
    return(
          <div className={styles.input_container}>
            <input type={type} name={name} id={name} required onChange={(e) => setLogin(e.target.value)} />
            <label htmlFor={name}>{text}</label>
            <div className={styles.icon}>
              {icon}
            </div>
          </div>
    )
}

export default Input