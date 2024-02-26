// eslint-disable-next-line import/no-extraneous-dependencies
import { Avatar } from '@nextui-org/react';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? 'lg' : 'sm';

  return (
    <div className="inline-flex items-center font-semibold text-gray-900">
      <Avatar
        src="/assets/images/nlogo.png"
        alt="Logo"
        size={size}
        className="mr-2"
        style={{ width: '50px', height: '20px' }}
      />
      <span style={{ fontSize: props.xl ? '24px' : '16px' }}>
        {AppConfig.site_name}
      </span>
    </div>
  );
};

export { Logo };
