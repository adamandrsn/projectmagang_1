// eslint-disable-next-line import/no-extraneous-dependencies
import { useSession } from 'next-auth/react'; // Import useSession from next-auth/react
import { useState } from 'react';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import Login from './Login';
import { Logo } from './Logo';

const Hero = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { data: session } = useSession(); // Menggunakan useSession untuk mendapatkan informasi sesi pengguna

  // Function untuk menutup halaman login
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <Background color="bg-gray-200">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            {/* Ubah teks tombol menjadi "Sign out" jika session ada, jika tidak, tetap "Sign in" */}
            <span onClick={() => setShowLogin(true)}>
              {session ? 'Sign out' : 'Sign in'}
            </span>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {'Anderson Movie\n'}
              <span className="text-primary-500">
                Confused about what to watch? Anderson Movie is the solution
              </span>
            </>
          }
          description="Provides information about films currently showing in Indonesia"
        />
        {/* Tampilkan halaman login jika showLogin bernilai true */}
        {showLogin && (
          <>
            {/* Tampilkan form login */}
            <Login />
            {/* Tombol Close untuk menutup halaman login */}
            <button onClick={handleCloseLogin}>Close</button>
          </>
        )}
      </Section>
    </Background>
  );
};

export { Hero };
