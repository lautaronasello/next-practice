import axios from 'axios';
import styles from '../styles.module.css';
import Characters from '.. /page.jsx';
import { Suspense } from 'react';
import QuoteRickDiv from '@/components/QuoteRickDiv/QuoteRickDiv.jsx';

async function loadCharacter(id) {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  return res;
}

async function loadQuote() {
  const quote = await axios.get(
    'http://loremricksum.com/api/?paragraphs=2&quotes=1'
  );

  return quote;
}

export default async function Page(props) {
  const { params } = props;
  const characterData = loadCharacter(params.id);
  const quoteData = loadQuote();
  const [character, quote] = await Promise.all([characterData, quoteData]);
  const { image, name, location, status, gender, origin } = character.data;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomInt = getRandomInt(1, 20);

  return (
    <div>
      <div className={styles.bodyIdCharacter}>
        <div>
          <img src={image} alt='Blog image' />
        </div>
        <div>
          <h2>Name: {name}</h2>
          <span className='blog-time'>Location: {location.name}</span>
          <p className='description'>Status: {status}</p>
          <p className='description'>Gender: {gender}</p>
          <p className='description'>Origin: {origin.name}</p>

          <Suspense fallback={<h2>Loading your quote</h2>}>
            <QuoteRickDiv quote={quote.data.data[0]} />
          </Suspense>
        </div>
      </div>
      <div>
        <Suspense fallback={<h2>Loading more characters</h2>}>
          <Characters filterQty={4} page={randomInt} />
        </Suspense>
      </div>
    </div>
  );
}
