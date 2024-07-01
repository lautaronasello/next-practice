import axios from 'axios';
import styles from '@/app/characters/styles.module.css';

export default async function QuoteRickDiv({ quote }) {
  return (
    <>
      <h2>This is your Rick phrase:</h2>
      <h4 className={styles.quote}>{quote}</h4>
    </>
  );
}
