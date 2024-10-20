import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss'
import {FiX} from 'react-icons/fi'
export function SignInGithub(){

  const isUserLoggedIn = true;

  return isUserLoggedIn ? (

    <button 
    type='submit'
    className={styles.signInButton}
  
    >
      <FaGithub size={24} color='#04d361' />
      Arthur Davidonis
      <FiX size={16} color='red' className={styles.exitIcon} />
    </button>
    

  ) : (
    <button 
    type='submit'
    className={styles.signInButton}
  
    >
      <FaGithub size={24} color='#eba417' />
      Sign in with Github
    </button>

  )
}