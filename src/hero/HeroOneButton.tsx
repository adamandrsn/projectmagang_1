import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-4xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="text mb-16 mt-4">{props.description}</div>
  </header>
);

export { HeroOneButton };
