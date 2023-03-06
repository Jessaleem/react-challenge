import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import Pagination from '../components/Pagination';
import { Episode } from '../types';

function getAllEpisodes(page: number) {
  return gql`
    query {
      episodes(page:${page}) {
        info {
          next
          prev
        }
        results {
          id
          name
          air_date
          episode
        }
      }
    }
  `;
}

export default function Episodes() {
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(getAllEpisodes(page));

  if (error) {
    return <p> Something was wrong</p>;
  }

  if (loading) {
    return <p className='text-center font-bold text-4xl mt-40'> Loading...</p>;
  }

  const { next, prev } = data.episodes.info;
  const episodes = data.episodes.results as Episode[];

  function increment() {
    setPage((prev) => prev + 1);
  }
  function decrement() {
    setPage((prev) => prev - 1);
  }

  return (
    <section className='p-4 mx-auto max-w-4xl'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className='bg-neutral-800 rounded-lg px-5 py-3 hover:scale-105 transform transition duration-500'
          >
            <p> Name: {episode.name}</p>
            <p> Air Date: {episode.air_date}</p>
            <p> Episode: {episode.episode}</p>
          </div>
        ))}
      </div>
      <Pagination
        next={next}
        current={page}
        prev={prev}
        increment={increment}
        decrement={decrement}
      />
    </section>
  );
}
