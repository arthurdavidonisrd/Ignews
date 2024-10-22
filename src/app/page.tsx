import CTA from '../public/Mulher.svg';
import Image from "next/image";
import styles from './home.module.scss';
import { SubscribeButton } from '@/components/SubscribeButton/SubscribeButton';
import {stripe} from '../services/stripe'

async function getProductPrice(priceId: string) {

  const price = await stripe.prices.retrieve(priceId);
  return {
    idPrice: price.id,
    amount: price.unit_amount || 0,
    currency: price.currency,
  };

}

export default async function Home() {
 
  const priceId = 'price_1QBrLPEJnf514uGIC6EwS7Pq'; 
  const product = await getProductPrice(priceId);

  const formattedAmount = product?.amount ? (product.amount / 100).toFixed(2) : 'N/A';

  return (
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, welcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get access to all the publications <br />
          <span>for {formattedAmount} {product?.currency?.toUpperCase() || ''} per month</span>
        </p>
        <SubscribeButton />
      </section>

      <Image src={CTA} alt="Woman coding React" width={400} />
    </main>
  );
}
