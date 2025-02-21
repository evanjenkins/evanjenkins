import DadJoke from '@/components/molecules/DadJoke/DadJoke';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-neutral text-neutral-content flex items-center justify-center">
      <footer className="container footer sm:footer-horizontal py-10 px-4">
        <nav>
          <h6 className="footer-title">Other places to find me</h6>
          <div className="flex gap-4 items-center">
            <Link
              className="link link-hover"
              href="https://www.linkedin.com/in/evanw/"
              target="_blank"
            >
              <Image
                src={`/logos/linkedin.svg`}
                alt="Find me on LinkedIn"
                width={40}
                height={40}
              />
            </Link>
            <Link
              className="link link-hover"
              href="https://github.com/evanjenkins"
              target="_blank"
            >
              <Image
                src={`/logos/github.svg`}
                alt="Find me on Github"
                width={60}
                height={30}
              />
            </Link>
          </div>
        </nav>
        <div className="max-w-2xl">
          <h6 className="footer-title">I leave you with a dad joke</h6>
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative overflow-hidden pr-2 pb-2">
              <Image
                className="relative z-1 rounded-lg hidden lg:block"
                src={`/its-me-superhero.jpg`}
                width={200}
                height={300}
                alt={'Me, as a superhero.'}
              />
              <div className="rounded-lg bg-primary absolute top-2 right-0 bottom-0 left-2 opacity-50"></div>
            </div>
            <DadJoke />
          </div>
        </div>
      </footer>
    </div>
  );
}
