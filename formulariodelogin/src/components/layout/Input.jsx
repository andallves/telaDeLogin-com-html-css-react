import styles from './Input.module.css';

const Input = ({ type, name, text}) => {
    return(
          <div className={styles.input_container}>
            <input type={type} name={name} id={name} />
            <label htmlFor={name}>{text}</label>
          </div>
    )
}

export default Input