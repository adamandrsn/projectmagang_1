/* eslint-disable import/no-extraneous-dependencies */
import { Button as NextUIButton } from '@nextui-org/react';
import classNames from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string | JSX.Element;
};

const Button = (props: IButtonProps) => {
  const btnClass = classNames({
    'text-black text-lg font-semibold py-2 px-4 rounded-lg': !props.xl,
    'text-black font-bold text-xl py-4 px-6 rounded-lg': props.xl,
    'bg-primary-500': true,
    'hover:bg-primary-600': true,
  });

  return <NextUIButton className={btnClass}>{props.children}</NextUIButton>;
};

export { Button };
