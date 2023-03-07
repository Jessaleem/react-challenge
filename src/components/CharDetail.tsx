import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

function getSingleCharacter(id: number) {
  return gql`
    query {
      character (id:${id}) {
        id
        name
        status
        image
        species
      }
    }
    `;
}

export default function CharDetail() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(getSingleCharacter(+id!));

  if (loading) {
    return <p className='text-center font-bold text-4xl mt-40'>Loaging...</p>;
  }

  if (error) {
    return <p>Something has ocurred!</p>;
  }

  return (
    <section className='flex flex-row justify-center bg-black rounded py-10'>
      <img
        className='rounded-l-lg'
        src={data.character.image}
        alt='character_img'
      />
      <div className='px-5 bg-neutral-800 rounded'>
        <p>Name: {data.character.name}</p>
        <p>Status: {data.character.status}</p>
        <p>Species: {data.character.species}</p>
      </div>
    </section>
  );
}
