import cn from 'classnames';
import Image from 'next/image';

export default function Competencies() {
  const logos: { path: string; alt: string; pathDark?: string }[] = [
    { path: 'angular.svg', alt: 'Angular' },
    { path: 'react.svg', alt: 'React' },
    { path: 'nextjs-13.svg', alt: 'NextJS', pathDark: 'nextjs-13-dark.svg' },
    { path: 'redux.svg', alt: 'Redux' },
    { path: 'rxjs.svg', alt: 'Rxjs' },
    { path: 'html.svg', alt: 'HTML' },
    { path: 'sass.svg', alt: 'Sass' },
    { path: 'netlify.svg', alt: 'Netlify' },
    { path: 'vercel.svg', alt: 'Vercel', pathDark: 'vercel-dark.svg' },
  ];
  return (
    <div
      className="bg-base-100 flex flex-col justify-center items-center space-y-8 pb-20 pt-20"
      id="expertise"
    >
      <div className="container px-4 space-y-2 text-center">
        <h4 className="text-3xl">Tools in My Toolbox</h4>
        <p className="text-base-content-300">
          Some of the frameworks and tools I've utilized throughout my journey.
        </p>
      </div>
      <ul className="container w-full px-4 grid grid-cols-3 lg:grid-cols-9 gap-8 items-center">
        {logos.map((logo) => (
          <li
            className="flex items-center justify-center tooltip"
            key={logo.path}
            data-tip={logo.alt}
          >
            {!!logo.pathDark && (
              <Image
                className="hidden dark:block"
                src={`/logos/${logo.pathDark}`}
                alt={logo.alt}
                width={60}
                height={60}
              />
            )}
            <Image
              className={cn({ 'dark:hidden': !!logo.pathDark })}
              src={`/logos/${logo.path}`}
              alt={logo.alt}
              width={60}
              height={60}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
