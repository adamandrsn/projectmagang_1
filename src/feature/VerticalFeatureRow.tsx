import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow: React.FC<IVerticalFeatureRowProps> = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const verticalFeatureClass = classNames(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3
          className="text-xl font-semibold text-gray-900"
          style={{
            transform: `translateX(${props.reverse ? -scrollPosition / 20 : scrollPosition / 20}px)`,
          }}
        >
          {props.title}
        </h3>
        <div
          className="mt-6 leading-9"
          style={{
            transform: `translateX(${props.reverse ? -scrollPosition / 20 : scrollPosition / 20}px)`,
          }}
        >
          {props.description}
        </div>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <img
          src={props.image}
          alt={props.imageAlt}
          className="rounded-lg"
          style={{
            transform: `translateX(${props.reverse ? -scrollPosition / 30 : scrollPosition / 20}px)`,
          }}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
