import styles from './Button.module.css';

export const Button = ({ type, text }) => {
    return (
        <button className={styles.btn} type={type}>
            {text}
        </button>
    );
}
