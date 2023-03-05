import { InfoProps } from '../pages/Home';
import { BackwardIcon, ForwardIcon } from '@heroicons/react/24/solid';

export default function Footer({ info }: { info: InfoProps }) {
  let currentPage = info.next - 1;
  console.log(currentPage);
  return (
    <footer className='flex bg-black gap-10 text-teal-500 items-center justify-center font-bold'>
      {info.prev != null ? (
        <button className='pl-4'>
          <BackwardIcon />
        </button>
      ) : (
        <div className='pl-4'>
          <BackwardIcon className='w-4 fill-gray-500' />
        </div>
      )}
      <div>{currentPage}</div>
      {info.next != null ? (
        <button className='pl-4 fill-teal-500'>
          <ForwardIcon className='w-4' />
        </button>
      ) : (
        <button className='pl-4'>No</button>
      )}
    </footer>
  );
}
