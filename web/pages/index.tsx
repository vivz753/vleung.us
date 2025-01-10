import Image from "next/image"
import { GiAngelWings, GiBlackBook, GiBroadsword, GiLargePaintBrush, GiOrbWand, GiShield } from "react-icons/gi"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      {/* TODO: add rainbow css animation from vleung.art */}
      <div className="relative flex h-[450px] w-full max-w-[719px] flex-col items-center rounded-2xl border-4 border-yellow-700 bg-yellow-700 md:flex-row lg:w-1/2">
        {/* MAIN SCREEN */}
        <div className="relative h-full w-3/4 p-8">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border-8 border-yellow-900">
            <div className="flex h-full w-full flex-row">
              <div className="w-1/6 animate-pulse bg-white bg-opacity-90"></div>
              <div className="w-1/6 animate-pulse bg-pink-300 bg-opacity-90"></div>
              <div className="w-1/6 animate-pulse bg-blue-400 bg-opacity-90"></div>
              <div className="w-1/6 animate-pulse bg-green-300 bg-opacity-90"></div>
              <div className="w-1/6 animate-pulse bg-yellow-400 bg-opacity-90"></div>
              <div className="w-1/6 animate-pulse bg-red-500 bg-opacity-90"></div>
              <div className="aniamte-pulse w-1/6 bg-blue-800 bg-opacity-90"></div>
            </div>
            <ul className="absolute z-50 flex flex-col items-start text-white">
              <li className="w-full py-8 text-center text-xl md:text-2xl">Level 27</li>
              <li className="flex flex-row items-center pb-4 text-lg uppercase md:text-xl">
                <GiAngelWings className="mx-2 h-6 w-8" />
                Web Developer & Artist
              </li>
              <li className="text-md flex flex-row items-center pb-2 md:text-lg">
                <GiBroadsword className="mx-2" />
                MacOS, Windows, Linux
              </li>
              <li className="text-md flex flex-row items-center pb-2 md:text-lg">
                <GiShield className="mx-2" />
                VSCode, Vim
              </li>
              <li className="text-md flex flex-row items-center pb-2 md:text-lg">
                <GiOrbWand className="mx-2" />
                React / Tailwind CSS / Typescript
              </li>
              <li className="text-md flex flex-row items-center pb-2 md:text-lg">
                <GiBlackBook className="mx-2" />
                C++, Python, Bash
              </li>
              <li className="text-md flex flex-row items-center pb-2 md:text-lg">
                <GiLargePaintBrush className="mx-2" />
                Procreate, Adobe Photoshop
              </li>
            </ul>
          </div>
        </div>
        {/* SIDE PANEL */}
        <div className="flex h-full flex-col justify-evenly p-8">
          <div className="relative h-[150px] w-[150px] overflow-hidden rounded-3xl border-4 border-yellow-900">
            <Image alt="portrait" src="/images/vivian.jpg" style={{ objectFit: "contain" }} width={200} height={200} />
          </div>
          {/* <div className="flex w-full flex-row justify-evenly">
            <button className="h-8 w-8 rounded-full bg-red-300"> left</button>
            <button className="h-8 w-8 rounded-full bg-red-300"> left</button>
          </div>
          <button className="h-8 w-8 rounded-full bg-red-300"> vol</button> */}
        </div>
      </div>
    </div>
  )
}
