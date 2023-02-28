
import Button from './Button'
import Input from './Input'


import styles from './FormLogin.module.css'

 const FormLogin = () => {

    return(
        <div className={styles.form_container}>
            <form>
                <Input type="email" name="email" text="Email" />
                <Input type="password" name="password" text="Senha" />
                <div className={styles.forget}>
                    <div className={styles.conectado}>
                        <input type="checkbox" name="remember" id='remember' value="mantenha-me conectado" />
                        <label htmlFor="remember">mantenha-me conectado</label>
                    </div>
                    <a herf="#">Esqueceu sua senha?</a>
                </div>
                <Button type= "submit" text="Log in" />
                
            </form>
            
        </div>
    )
}

export default FormLogin

