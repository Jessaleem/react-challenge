import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import Pagination from '../components/Pagination';
import { Location } from '../types';

function getAllLocations(page: number) {
  return gql`
    query {
      locations(page:${page}){
        info {
          next
          prev
        }
        results {
          id
          name
          type
          dimension
          residents {
            image
            name
          }
        }
      }
    }
  `;
}

export default function Locations() {
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(getAllLocations(page));

  if (loading) {
    return <p className='text-center font-bold text-4xl mt-40'>Loading...</p>;
  }
  if (error) {
    return <p>Something has ocurred!</p>;
  }

  function increment() {
    setPage((prev) => prev + 1);
  }
  function decrement() {
    setPage((prev) => prev - 1);
  }

  const { next, prev } = data.locations.info;

  const locations = data.locations.results as Location[];

  return (
    <section className='p-4 mx-auto max-w-4xl'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {locations.map((location) => (
          <div
            key={location.id}
            className='bg-neutral-800 rounded-lg px-5 py-3 hover:scale-105 transform transition duration-500'
          >
            <p>Dimension: {location.dimension}</p>
            <p>Name: {location.name}</p>
            <p>Type: {location.type}</p>
          </div>
        ))}
      </div>
      <Pagination
        next={next}
        prev={prev}
        current={page}
        increment={increment}
        decrement={decrement}
      />
    </section>
  );
}
