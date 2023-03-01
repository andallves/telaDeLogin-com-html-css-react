import { RiLockPasswordLine } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

import Button from './Button'
import Input from './Input'


import styles from './FormLogin.module.css'
import { useState } from 'react'

 const FormLogin = () => {

    const [login, setLogin] = useState ([])

    const handleSubmit = (e, handleLogin) => {
        e.preventDefault()
        console.log(login)
    }

    return(
        <div className={styles.form_container}>
            <form onSubmit={handleSubmit}>
                <Input type="email" name="email" text="Email" setLogin={setLogin} icon={<MdEmail />}/>
                <Input type="password" name="password" text="Senha" setLogin={setLogin} icon={<RiLockPasswordLine />} />
                <div className={styles.forget}>
                    <div className={styles.conectado}>
                        <input type="checkbox" name="remember" id='remember' value="mantenha-me conectado"  />
                        <label htmlFor="remember">mantenha-me conectado</label>
                    </div>
                    <a herf="#">Esqueceu sua senha?</a>
                </div>
                <Button type= "submit" text="Log in" />

                <div className={styles.logup}>
                    <p>Não tem uma conta? <a href='#'>Cadastre-se</a></p>
                </div>
                
            </form>
            
        </div>
    )
}

export default FormLogin

