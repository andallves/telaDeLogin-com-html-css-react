import { CiUser } from 'react-icons/ci';
import FormLogin from './components/FormLogin';
import styles from './App.module.css';

function App() {
  return (
    <section>
      <div className={styles.login_container}>
        <div className={styles.user}>
          <CiUser />  
        </div>
        <FormLogin />
      </div>
    </section>
  )
}

export default App;
