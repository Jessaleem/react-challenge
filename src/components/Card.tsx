import { Link } from 'react-router-dom';
import { Origin } from '../types';
import { Character } from '../types';

// type CharacterProps = {
//   id: string;
//   name: string;
//   status: string;
//   species: string;
//   image: string;
//   origin: Origin[];
// };

export default function Card({
  id,
  name,
  status,
  species,
  image,
  origin,
}: Character) {
  console.log(origin);
  return (
    <Link
      className='hover:scale-105 transform transition duration-500'
      to={`/character/${id}`}
    >
      <div className='bg-black rounded-lg'>
        <img className='rounded-t-lg' src={image}></img>
        <div className='pl-3 py-3 '>
          <div className='font-bold text-xl hover:text-teal-500'>{name} </div>
          <div>Status: {status}</div>
          <div>Species: {species}</div>
          <div>Origin: {origin.name} </div>
        </div>
      </div>
    </Link>
  );
}
