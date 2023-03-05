import Header from '../components/Header';
import Card from '../components/Card';
import mockData from '../utils/mockData.json' assert { type: 'JSON' };
import Footer from '../components/Footer';

export interface InfoProps {
  next: any;
  prev: any;
}

export default function Home() {
  let result = mockData.data.characters.results;
  let info: InfoProps = mockData.data.characters.info;
  console.log(info);

  let character = result.map((char) => <Card key={char.id} {...char} />);

  return (
    <>
      <Header />
      <main className='flex flex-wrap gap-5 bg-neutral-800 justify-center py-4'>
        {character}
      </main>
      <Footer info={info} />
    </>
  );
}
