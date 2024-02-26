// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import CSS for Carousel

import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import { signIn, signOut, useSession } from 'next-auth/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Carousel } from 'react-responsive-carousel'; // Import Carousel component

export default function Login() {
  const { data: session } = useSession();

  const handleAuthentication = async () => {
    if (session) {
      await signOut();
    } else {
      await signIn();
    }
  };

  return (
    <div className="flex flex-col items-center md:h-screen md:flex-row">
      <div className="flex w-full items-center justify-center md:w-1/3">
        {/* Gunakan Carousel untuk menampilkan gambar-gambar yang bisa bergulir */}
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showArrows={true}
          showIndicators={true}
          showStatus={false}
        >
          <div>
            <Image
              src="/assets/images/DesaPenari.jpg"
              alt="Login Image"
              width={200}
              height={300}
              className="h-auto w-full" // Menambahkan kelas untuk mengatur lebar dan tinggi gambar
            />
          </div>
          <div>
            <Image
              src="/assets/images/KukejarMimpi.jpg"
              alt="Another Image"
              width={400}
              height={300}
              className="h-auto w-full" // Menambahkan kelas untuk mengatur lebar dan tinggi gambar
            />
          </div>
          <div>
            <Image
              src="/assets/images/NoWayUp.jpg"
              alt="Another Image"
              width={400}
              height={300}
              className="h-auto w-full" // Menambahkan kelas untuk mengatur lebar dan tinggi gambar
            />
          </div>
          <div>
            <Image
              src="/assets/images/PasarSetan.jpg"
              alt="Another Image"
              width={400}
              height={300}
              className="h-auto w-full" // Menambahkan kelas untuk mengatur lebar dan tinggi gambar
            />
          </div>
          <div>
            <Image
              src="/assets/images/SpyXFamily.jpg"
              alt="Another Image"
              width={400}
              height={300}
              className="h-auto w-full" // Menambahkan kelas untuk mengatur lebar dan tinggi gambar
            />
          </div>
        </Carousel>
      </div>
      <div className="flex w-full flex-col items-center justify-center md:w-2/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Hello!</h1>
            <p className="mt-2 text-gray-700">
              Please sign in to your account.
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <button
                type="button"
                onClick={handleAuthentication}
                className="focus:shadow-outline-indigo w-full rounded-md bg-indigo-500 px-4 py-3 font-bold text-white hover:bg-indigo-300 focus:border-indigo-700 focus:outline-none"
              >
                {session ? 'Sign Out' : 'Sign In'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
