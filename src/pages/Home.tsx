import Header from '../components/Header';
import Card from '../components/Card';
import mockData from '../utils/mockData.json' assert { type: 'JSON' };

export default function Home() {
  let result = mockData.data.characters.results;

  let character = result.map((char) => <Card key={char.id} {...char} />);

  return (
    <>
      <Header />
      <main className='flex flex-wrap gap-5 bg-neutral-800 justify-center py-4'>
        {character}
      </main>
    </>
  );
}
