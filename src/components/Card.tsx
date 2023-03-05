import React from 'react';

type CharacterProps = {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
};

export default function Card({ name, status, species, image }: CharacterProps) {
  return (
    <div className='bg-black rounded'>
      <img className='rounded-t-lg' src={image}></img>
      <div className='pl-3 py-3'>
        <div>Name: {name} </div>
        <div>Status: {status}</div>
        <div>Species:{species}</div>
      </div>
    </div>
  );
}
