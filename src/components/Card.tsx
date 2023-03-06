import { Link } from 'react-router-dom';

type CharacterProps = {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
};

export default function Card({
  id,
  name,
  status,
  species,
  image,
}: CharacterProps) {
  return (
    <Link to={`/character/${id}`}>
      <div className='bg-black rounded'>
        <img className='rounded-t-lg' src={image}></img>
        <div className='pl-3 py-3'>
          <div>Name: {name} </div>
          <div>Status: {status}</div>
          <div>Species: {species}</div>
        </div>
      </div>
    </Link>
  );
}
