import CTA from '../public/Mulher.svg'
import Image from "next/image";
import styles from './home.module.scss'
import { SubscribeButton } from '@/components/SubscribeButton/SubscribeButton';

export default function Home() {
  return (
   <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏Hey, welcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get access to all the publications <br />
          <span>for $9.99 month</span>
        </p>
        <SubscribeButton/>
      </section>

      <Image src={CTA} alt="Woman coding React" width={400}/>
   
   </main>
  );
}
