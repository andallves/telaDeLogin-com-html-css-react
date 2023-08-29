import { RiLockPasswordLine } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { Button } from './Button';
import { InputField } from './InputField';
import styles from './FormLogin.module.css';
import { useState } from 'react';

const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    };

    return(
        <div className={styles.form_container}>
            <form onSubmit={handleSubmit}>
                <InputField
                    type="email" 
                    name="email" 
                    text="Email" 
                    setLogin={setEmail} 
                    icon={<MdEmail />}
                />
                <InputField
                    type="password" 
                    name="password" 
                    text="Senha" 
                    setLogin={setPassword} 
                    icon={<RiLockPasswordLine />} 
                />
                <div className={styles.options}>
                    <InputField
                        type="checkbox"
                        name="remember"
                        id="remember"
                        text="mantenha-me conectado"
                    />
                    <a herf="#">Esqueceu sua senha?</a>
                </div>

                <Button type="submit" text="Log in" />

                <div className={styles.signup}>
                    <p>Não tem uma conta? <a href='#'>Cadastre-se</a></p>
                </div>
                
            </form>
            
        </div>
    )
}

export default FormLogin

