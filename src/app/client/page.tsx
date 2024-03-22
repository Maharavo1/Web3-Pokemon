'use client';

import { fetchListPokemon } from '@/fetch/fetch';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Pokemon = {
  name: string;
  url: string;
};

const Pokemonn: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [currentPage] = useState<number>(1);

  useEffect(() => {
    fetchListPokemon(currentPage).then(setPokemonList);
  }, [currentPage]);

  return (
    <div className='min-h-screen bg-gradient-to-r  via-blue-50 to-green-50 px-4 pb-4 pt-12'>
      <div className='mb-10'>
        <div className='flex items-center gap-5'>
       
          <Link
            href={'/'}
          >
          </Link>
        </div>
        <h1 className='text-3xl text-blue-700 font-serif font-extrabold tracking-wide'>List Pokemon</h1>
      </div>
      <div className='mt-8 flex w-full flex-wrap items-center justify-center gap-10'>
        {pokemonList.map((pokemon: Pokemon) => {
          const pokemonId: string = pokemon.url.split('/')[6];
          const paddedPokemonId: string = pokemonId.padStart(3, '0');

          return (
            <Link href={`/client/${pokemonId}`} key={pokemonId}>
              <div className='m-1 flex w-40 cursor-pointer flex-col items-center  bg-white  text-center shadow-sm transition-all duration-300'>
                <div className='flex h-20 w-20 items-center justify-center md:h-24 md:w-24'>
                  <Image
                    src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/thumbnails-compressed/${paddedPokemonId}.png`}
                    alt='pokemon-thumbnail'
                    width={60}
                    height={60}
                    loading='lazy'
                  />
                </div>
                 <h3 className='mt-4 w-full text-center text-sm font-bold capitalize text-blue-700'>
                  {pokemon.name}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemonn;
