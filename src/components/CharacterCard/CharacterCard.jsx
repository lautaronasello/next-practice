import './characterCard.css';
import Link from 'next/link.js';

export default function CharacterCard({ image, name, status, location, id }) {
  return (
    <div className='card'>
      <div className='card-img-holder'>
        <img src={image} alt='Blog image' />
      </div>
      <h3 className='blog-title'>Name: {name}</h3>
      <span className='blog-time'>Location: {location}</span>
      <p className='description'>Status: {status}</p>
      <div className='options'>
        <span>See Details</span>
        <Link href={`/characters/${id}`}>
          <button className='btn'>Go!</button>
        </Link>
      </div>
    </div>
  );
}
