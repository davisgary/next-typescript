import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-transparent z-10">
        <div className="container mx-auto flex justify-between items-center py-8 px-6">
          <div className="flex items-center">
            <Link href="/" passHref>
              <span className="cursor-pointer">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" passHref>
              <span className="cursor-pointer text-white px-7 py-2 rounded-md text-base font-medium">About</span>
            </Link>
            <Link href="/" passHref>
              <span className="cursor-pointer bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-md text-base font-medium transition duration-300">Contact</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center my-8">Hello</h1>
      </main>
    </>
  );
}
