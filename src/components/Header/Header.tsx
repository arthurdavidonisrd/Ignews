import styles from './style.module.scss'
import Logo from '../../public/ig.news.svg'

import Image from 'next/image'
import { SignInGithub } from '../SignInGitHub/SignInGithub'

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={Logo} alt="Instagram Logo"  />
        <nav>
          <a href="">Home</a>
          <a href="">Posts</a>
        </nav>

        <SignInGithub/>
      </div>
    </header>
  )
}