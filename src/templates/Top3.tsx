import { Image } from '@nextui-org/react';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Top 3 Movies of February 2024"
    description="by Adam Anderson Yuniarto"
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="relative border-2 border-gray-300 p-14">
            <a
              href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
              target="_blank"
            >
              <Image
                src="/assets/images/AgakLaen.jpg"
                alt="Agak Laen"
                width={260}
                height={224}
              />
            </a>
            <div className="bg-opacity-75/75 absolute inset-x-0 bottom-0 bg-white p-4 text-center">
              <h3 className="text-lg font-semibold">Agak Laen</h3>
              <p className="text-sm">1 Februari 2024</p>
            </div>
          </td>
          <td className="relative border-2 border-gray-300 p-14">
            <a
              href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
              target="_blank"
            >
              <Image
                src="/assets/images/PasutriGaje.jpg"
                alt="Pasutri Gaje"
                width={260}
                height={224}
              />
            </a>
            <div className="bg-opacity-75/75 absolute inset-x-0 bottom-0 bg-white p-4 text-center">
              <h3 className="text-lg font-semibold">Pasutri Gaje</h3>
              <p className="text-sm">7 Februari 2024</p>
            </div>
          </td>
          <td className="relative border-2 border-gray-300 p-14">
            <a href="https://nextlessjs.com">
              <Image
                src="/assets/images/DemonSlayer.jpg"
                alt="Demon Slayer"
                width={260}
                height={224}
              />
            </a>
            <div className="bg-opacity-75/75 absolute inset-x-0 bottom-0 bg-white p-4 text-center">
              <h3 className="text-lg font-semibold">Demon Slayer</h3>
              <p className="text-sm">28 Februari 2024</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
