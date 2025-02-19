import MyImage from '@/components/atoms/MyImage/MyImage';
import Button from '@/components/atoms/Button/Button';
import { ButtonColors, ButtonTypes } from '@/models';

export default function Hello() {
  return (
    <div id="home"
         className="min-h-[75vh] lg:min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-200 to-zinc-400 dark:from-zinc-600 dark:to-zinc-900">
      <div className="max-w-7xl w-full pb-20 pt-36 px-8">
        <div className="flex flex-col gap-8 lg:flex-row relative">
          <div className="max-w-2xl flex flex-col space-y-4 justify-center">
            <h1 className="text-sm uppercase tracking-widest">Evan Jenkins</h1>
            <h3 className="text-5xl font-bold"><span className="font-[family-name:--font-pixel]">Pixels</span> to
              experiences. <span className="font-[family-name:--font-source-code]">{'<'}Code{'/>'}</span> to
              interactions.</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-2xl font-lighter">
              Hey there! My name is Evan and I love to create applications for the web.
              Technologies are always evolving and I get excited about learning new things.
            </p>
            <div className="flex gap-4">
              <Button type={ButtonTypes.button} color={ButtonColors.primary} label="Projects" />
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
