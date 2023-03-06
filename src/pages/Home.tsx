import { useQuery, gql } from '@apollo/client';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { Character } from '../types';

const getAllCharacters = gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        image
      }
      info {
        pages
        next
        prev
      }
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(getAllCharacters);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something has ocurred</p>;
  }

  const characters = data.characters.results as Character[];
  let character = characters.map((char) => <Card key={char.id} {...char} />);

  return (
    <main className='flex flex-wrap gap-5 bg-neutral-800 justify-center py-4'>
      {character}
    </main>
  );
}
