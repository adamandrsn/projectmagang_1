import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready to have fun every day while watching movies?"
      subtitle="Anderson Movies will always provide the most up-to-date movie information"
      button={
        <Link href="/">
          <Button>Sign In</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
