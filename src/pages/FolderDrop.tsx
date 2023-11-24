import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cardd from './Card';

const FolderDrop = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const filteredCards = searchQuery
    ? cards.filter((card) =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : cards;

  return (
    <div>
      <div className='flex flex-1 h-screen w-screen flex-col'>
        <div className='bg-amber-200 h-16 w-full flex justify-between items-center px-4 flex-shrink-0'>
          <div>
            <Link to='/upload-files' className='border border-black p-2'>
              Get diagnosis
            </Link>
          </div>
          <div>
            <Link to='/sign-up' className='border border-black p-2'>
              Logout
            </Link>
          </div>
        </div>
        <div className='w-full gap-2 flex justify-center h-32 items-center flex-shrink-0'>
          Search
          <input
            type='text'
            className='border border-black w-80 h-8 rounded-xl p-3'
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className='flex flex-row flex-wrap'>
          {filteredCards.map((card, index) => (
            <Cardd key={index} name={card.name} desc={card.desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

const cards = [
  { name: 'Hello', desc: 'heeeeheheheheh' },
  { name: 'World', desc: 'another description' },
  {name: "Lodu", desc: "annaajnshsjahs"}
  // Add more cards as needed
];

export default FolderDrop;
