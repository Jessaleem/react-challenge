import { BackwardIcon, ForwardIcon } from '@heroicons/react/24/solid';

interface FooterProps {
  next: number | null;
  prev: number | null;
  current: number;
}

export default function Footer({ next, prev, current }: FooterProps) {
  return (
    <footer className='flex bg-black gap-10 text-teal-500 items-center justify-center font-bold'>
      {prev != null ? (
        <button className='pl-4 fill-teal-500'>
          <BackwardIcon className='w-4' />
        </button>
      ) : (
        <div className='pl-4'>
          <BackwardIcon className='w-4 fill-gray-500' />
        </div>
      )}
      <div>{current}</div>
      {next != null ? (
        <button className='pl-4 fill-teal-500'>
          <ForwardIcon className='w-4' />
        </button>
      ) : (
        <button className='pl-4'>No</button>
      )}
    </footer>
  );
}
