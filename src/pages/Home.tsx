import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import { Character } from '../types';

function getAllCharacters({ page }: { page: number }) {
  return gql`
    query {
      characters (page:${page}) {
        results {
          id
          name
          status
          species
          image
          origin {
            name
          }
        }
        info {
          pages
          next
          prev
        }
      }
    }
  `;
}

export default function Home() {
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(getAllCharacters({ page }));

  if (loading) {
    return <p className='text-center font-bold text-4xl mt-40'>Loading...</p>;
  }
  if (error) {
    return <p>Something has ocurred</p>;
  }

  const characters = data.characters.results as Character[];
  let character = characters.map((char) => <Card key={char.id} {...char} />);

  const { next, prev } = data.characters.info;

  function increment() {
    setPage((prev) => prev + 1);
  }
  function decrement() {
    setPage((prev) => prev - 1);
  }

  return (
    <div className='mb-10'>
      <main className='flex flex-wrap gap-5 bg-neutral-800 justify-center py-4'>
        {character}
      </main>
      <Pagination
        next={next}
        current={page}
        prev={prev}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
}
