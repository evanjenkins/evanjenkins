import MyImage from '@/components/atoms/MyImage/MyImage';
import HelloButtons from '@/components/molecules/HelloButtons/HelloButtons';

export default function Hello() {

  return (
    <div id="home"
         className="min-h-[75vh] flex items-center justify-center bg-linear-to-br from-[var(--color-base-100)] to-[var(--color-base-300)]">
      <div className="container w-full pb-20 pt-20 lg:pt-36 px-4">
        <div className="flex flex-col gap-8 lg:flex-row relative">
          <div className="flex flex-col space-y-4 justify-center">
            <h1 className="text-sm uppercase tracking-widest">Evan Jenkins</h1>
            <h3 className="text-5xl font-bold"><span className="font-(family-name:--font-pixel)">Pixels</span> to
              experiences. <span className="font-(family-name:--font-source-code)">{'<'}Code{'/>'}</span> to
              interactions.</h3>
            <p className="text-base-content-300 text-2xl font-lighter">
              Hey there! My name is Evan and I love to create applications for the web.
              Technologies are always evolving and I get excited about learning new things.
            </p>
            <div className="flex gap-4">
              <HelloButtons />
            </div>
          </div>
          <div className="max-w-md lg:px-12">
            <MyImage />
          </div>
        </div>
      </div>
    </div>
  );
}
