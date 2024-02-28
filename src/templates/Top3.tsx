'use client';

import Image from 'next/image'; // Import Image component from Next.js
import React from 'react';
import useSWR from 'swr';

import AgakLaenImage from '../../public/assets/images/AgakLaen.jpg';
import DemonSlayerImage from '../../public/assets/images/DemonSlayer.jpg';
import PasutriGajeImage from '../../public/assets/images/PasutriGaje.jpg';
import { Section } from '../layout/Section';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Sponsors = () => {
  const { data: films, error } = useSWR(
    'https://coba-strapi.onrender.com/api/data-films',
    fetcher,
  );

  if (error) return <div>Failed to load</div>;
  if (!films) return <div>Loading...</div>;

  return (
    <Section
      title="Top 3 Movies of February 2024"
      description="by Adam Anderson Yuniarto"
    >
      <table className="mx-auto border-collapse">
        <tbody>
          <tr className="h-56">
            {films.data.map((film: any) => (
              <td
                key={film.id}
                className="relative border-2 border-gray-300 p-14"
              >
                <div>
                  {film.attributes.title === 'Agak Laen' && (
                    <Image
                      src={AgakLaenImage}
                      alt="Agak Laen"
                      width={260}
                      height={224}
                    />
                  )}
                  {film.attributes.title === 'Pasutri Gaje' && (
                    <Image
                      src={PasutriGajeImage}
                      alt="Pasutri Gaje"
                      width={260}
                      height={224}
                    />
                  )}
                  {film.attributes.title === 'Demon Slayer' && (
                    <Image
                      src={DemonSlayerImage}
                      alt="Demon Slayer"
                      width={260}
                      height={224}
                    />
                  )}
                </div>
                <div className="bg-opacity-75/75 absolute inset-x-0 bottom-0 bg-white p-4 text-center">
                  <h3 className="text-lg font-semibold">
                    {film.attributes.title}
                  </h3>
                  <p className="text-sm">{film.attributes.description}</p>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </Section>
  );
};

export { Sponsors };
