
import { fetchListPokemon } from '@/fetch/fetch';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Pokemon = {
  name: string;
  url: string;
};

const Pokemonn: React.FC = async () => {
  const pokemonList: Pokemon[] = await fetchListPokemon(1);

  return (
    <div className='min-h-screen bg-gradient-to-r from-red-50 via-blue-50 to-green-50 px-4 pb-4 pt-12'>
      <div className='mb-10 flex flex-col items-center justify-center gap-5'>
        <div className='flex items-center gap-5'>
         
          <Link
            href={'/'}
          >
          </Link>
        </div>
        <h1 className='text-3xl text-blue-700 font-serif font-extrabold tracking-wide'>List Pokemon</h1>
      </div>
      <div className='mt-8 flex w-full flex-wrap items-center justify-center gap-10'>
        {pokemonList.map((pokemon: Pokemon , index: number) => {
          const pokemonId: string = pokemon.url.split('/')[6];
          const paddedPokemonId: string = pokemonId.padStart(3, '0');

          return (
            <Link href={`/server/${pokemonId}`} key={pokemonId}>
              <div className='m-1 flex w-40 cursor-pointer flex-col items-center rounded-lg bg-white p-3 text-center shadow-sm transition-all duration-300 hover:shadow-xl'>
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
                 {index + 1} {pokemon.name}
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
