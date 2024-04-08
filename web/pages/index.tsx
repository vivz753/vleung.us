import Image from "next/image"
import { GiAngelWings, GiBlackBook, GiBroadsword, GiLargePaintBrush, GiOrbWand, GiShield } from "react-icons/gi"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative flex h-[450px] w-1/2 flex-row items-center rounded-2xl border-4 border-yellow-700 bg-yellow-700">
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
              <li className="w-full py-8 text-center text-xl md:text-3xl">Level 25</li>
              <li className="flex flex-row items-center pb-4 text-lg uppercase md:text-2xl">
                <GiAngelWings className="mx-2 h-6 w-8" />
                Artist & Web Developer
              </li>
              <li className="text-md flex flex-row items-center pb-2 md:text-xl">
                <GiBroadsword className="mx-2" />
                MacBook Pro 2016
              </li>
              <li className="text-md flex flex-row items-center pb-2 md:text-xl">
                <GiShield className="mx-2" />
                Vim, VSCode
              </li>
              <li className="text-md flex flex-row items-center pb-2 md:text-xl">
                <GiOrbWand className="mx-2" />
                React, Tailwind CSS, Emotion
              </li>
              <li className="text-md flex flex-row items-center pb-2 md:text-xl">
                <GiBlackBook className="mx-2" />
                Javascript, C++, Python
              </li>
              <li className="text-md flex flex-row items-center pb-2 md:text-xl">
                <GiLargePaintBrush className="mx-2" />
                Procreate, Adobe Photoshop
              </li>
            </ul>
          </div>
          {/* <div
          style={{
            clipPath: "polygon(0% 100%, 50% 60%, 100% 100%)",
          }}
          className="w-[300px] h-[300px] absolute -translate-y-full bg-red-500"
        ></div> */}
        </div>
        {/* SIDE PANEL */}
        <div className="flex h-full flex-col p-8">
          <div className="relative h-[150px] w-[150px] overflow-hidden rounded-3xl border-4 border-yellow-900">
            <Image alt="portrait" src="/images/vivian.jpg" style={{ objectFit: "contain" }} width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  )
}
