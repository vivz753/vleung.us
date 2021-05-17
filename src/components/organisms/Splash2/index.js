import React, { useState } from "react";
import ConfettiParty from "./Confetti";
import Player from "./Player";
import { FaBirthdayCake, FaSun, FaMoon } from "react-icons/fa"
import ProfilePic from '../../../images/vivian.jpg'
import { GiBroadsword, GiOrbWand, GiAngelWings, GiBlackBook, GiShield } from "react-icons/gi"
import { useGlobalState } from "../../../hooks/useGlobalState"

const Splash2 = () => {

  const { dispatch, theme } = useGlobalState();

  const [dropped, setDropped] = useState(-1);

  const dropConfetti = () => {
    console.log("dropping confetti")
    setDropped(dropped + 1);
    console.log(dropped)
  }

  const changeColor = () => {
    dispatch({ type: "theme", data: !theme })
  }  

  return (
    <div className={`relative overflow-hidden z-20 ${theme ? `bg-club` : `bg-yellow-100`} w-full mx-auto items-center justify-center my-auto flex flex-col`}>
      <div className="w-full -mt-2">
        <ConfettiParty counter={dropped} /> 
      </div>
      <div className="w-full lg:w-4/5 xl:w-7/12 h-full text-center pt-12 px-4 sm:px-8 md:py-20">
        {/* Attennas */}
        <div className="hidden md:flex flex-row ml-32">
          <svg className="w-32 h-12 stroke-current stroke-2 text-gray-300">
            <line x1="0" y1="0" x2="100" y2="50" />
          </svg>
          <svg className="w-48 h-12 stroke-current stroke-2 text-gray-300">
            <line x1="200" y1="0" x2="100" y2="50" />
          </svg>
        </div>
        {/* Top Screen */}
        <div className="p-8 px-6 justify-center border-8 border-yellow-900 bg-yellow-800 md:rounded-t-xl rounded-t-full md:jusitfy-end mx-auto flex flex-col md:flex-row w-full h-full">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row items-center justify-center">
              {/* Profile Pic */}
              <div className="px-8 sm:px-32 md:px-0 md:order-last relative w-full md:w-1/3 md:h-full my-8 flex items-center justify-center md:justify-end">
                <div className="relative">
                  {/* Ping */}
                  <div className="absolute top-3 right-3">
                    <span className="h-3 w-3 flex justify-center items-center">
                      <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                  <img className="rounded-b-xl rounded-t-full md:rounded-xl" src={ProfilePic} alt="me" />
                </div>
              </div>
              {/* Content */}
              <div className={`relative font-regular md:order-first sm:w-5/6 border-8 border-yellow-900 bg-club rounded-xl md:mr-8 w-full md:w-2/3 pb-8 text-left items-center justify-center flex flex-col text-white`}>
                <div className="absolute w-full h-full top-0 left-0 flex flex-row justify-evenly z-0">
                  <div className="animate-pulse w-1/6 bg-opacity-75 bg-white"></div>
                  <div className="animate-pulse w-1/6 bg-opacity-75 bg-pink-300"></div>
                  <div className="animate-pulse w-1/6 bg-opacity-75 bg-blue-400"></div>
                  <div className="animate-pulse w-1/6 bg-opacity-75 bg-green-300"></div>
                  <div className="animate-pulse w-1/6 bg-opacity-75 bg-yellow-400"></div>
                  <div className="animate-pulse w-1/6 bg-opacity-75 bg-red-500"></div>
                  <div className="aniamte-pulse w-1/6 bg-opacity-75 bg-blue-800"></div>
                </div>
                <ul className="z-50">
                  <li className="text-center text-xl md:text-3xl py-8">Level 25</li>
                  <li className="text-lg uppercase md:text-2xl pb-4 flex flex-row items-center"><GiAngelWings className="mx-2 w-8 h-6" />Web Developer</li>
                  <li className="text-md md:text-xl pb-2 flex flex-row items-center"><GiBroadsword className="mx-2" />MacBook Pro 2016</li>
                  <li className="text-md md:text-xl pb-2 flex flex-row items-center"><GiShield className="mx-2" />Vim, VSCode</li>
                  <li className="text-md md:text-xl pb-2 flex flex-row items-center"><GiOrbWand className="mx-2" />React, Tailwind CSS, Emotion</li>
                  <li className="text-md md:text-xl pb-2 flex flex-row items-center"><GiBlackBook className="mx-2" />Javascript, C++, Python</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Screen & Buttons */}
        <div className="flex px-4 sm:px-8 md:px-0 py-8 pb-14 mb-8 md:py-12 border-4 border-yellow-900 bg-yellow-900 rounded-b-xl flex-row justify-evenly w-full">
          <button onClick={dropConfetti} className="text-center text-red-700 justify-center flex items-center bg-red-500 rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-red-700 border-b-8 hover:bg-red-600 active:text-red-800 active:bg-red-700 focus:outline-none">
            <FaBirthdayCake className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <Player 
            url="">
            <button className="bg-yellow-500 rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-yellow-600 border-b-8 hover:bg-yellow-600 focus:outline-none">
            </button>
          </Player>
          <button onClick={changeColor} className="text-center text-blue-700 justify-center flex items-center bg-blue-500 rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-blue-700 border-b-8 hover:bg-blue-600 active:text-blue-800 active:bg-blue-700 focus:outline-none">
            { theme
              ? <FaSun className="h-6 w-6 md:w-8 md:h-8"/>
              : <FaMoon className="h-6 w-6 md:w-8 md:h-8" />
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Splash2
