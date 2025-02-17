'use client'

import { motion } from "motion/react"

export default function Hello() {
  return (
    <div id="home" className="min-h-[75vh] lg:min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-600 to-zinc-900">
      <div className="max-w-7xl w-full pb-20 pt-36 px-8 lg:px-0">
        <div className="flex justify-center relative">
          <div className="flex flex-col items-center justify-center space-y-4">
            <motion.h3
              className="font-[family-name:--font-oswald] tracking-wide uppercase drop-shadow-sm text-5xl lg:text-[8vw] font-bold text-center bg-gradient-to-r from-zinc-100 to-zinc-100 inline-block text-transparent bg-clip-text"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
            >
              Evan Jenkins
            </motion.h3>

            <p className="text-xl uppercase text-zinc-400">Frontend Engineer</p>
          </div>
        </div>
      </div>
    </div>
  )
}
