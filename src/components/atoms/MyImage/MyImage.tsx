import Image from 'next/image';
import * as motion from 'motion/react-client';

export default function MyImage() {
  return (
    <div className="relative overflow-hidden pr-12 pb-12">
      <Image
        className="relative z-10 rounded-lg"
        src="/its-me.jpg"
        alt="It's me!"
        width={600}
        height={800}
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      <motion.div className="rounded-lg bg-zinc-500 absolute top-0 right-12 bottom-12 left-0 opacity-50"
                  animate={{ x: 20, y: 20 }}></motion.div>
    </div>
  );
}
