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
    <div className="relative overflow-hidden z-20 bg-yellow-100 w-full mx-auto items-center justify-center my-auto flex flex-col">
      <div className="w-full -mt-2">
        <ConfettiParty counter={dropped} /> 
      </div>
      <div className="w-1/2 h-full text-center py-20">
        <div className="jusitfy-center mx-auto flex flex-row w-full h-full">
          <div className="w-1/3 m-8 flex items-center justify-center">
            <img className="rounded-lg" src={ProfilePic} alt="me" />
          </div>
          <div className="w-2/3 text-left items-center justify-center flex flex-col text-gray-900">
            <ul>
              <li className="text-3xl py-2">Level 24</li>
              <li className="text-2xl pb-4 flex flex-row items-center">Web Developer<GiAngelWings className="mx-2" /></li>
              <li className="text-xl pb-2 flex flex-row items-center"><GiBroadsword className="mx-2" />MacBook Pro 2016</li>
              <li className="text-xl pb-2 flex flex-row items-center"><GiShield className="mx-2" />Vim, VSCode</li>
              <li className="text-xl pb-2 flex flex-row items-center"><GiOrbWand className="mx-2" />React, Tailwind CSS, Emotion, Styled Components</li>
              <li className="text-xl pb-2 flex flex-row items-center"><GiBlackBook className="mx-2" />Javascript, C++, Python</li>
            </ul>

          </div>
        </div>
        <div className="flex flex-row justify-evenly w-full py-16">
          <button onClick={dropConfetti} className="text-center text-red-700 justify-center flex items-center bg-red-500 rounded-full w-32 h-32 border-red-700 border-b-8 hover:bg-red-600 focus:text-red-800">
            <FaBirthdayCake className="w-8 h-8" />
          </button>
          <Player 
            url="">
            <button className="bg-yellow-500 rounded-full w-32 h-32 border-yellow-600 border-b-8 hover:bg-yellow-600 focus:bg-yellow-700 focus:border-yellow-200">
            </button>
          </Player>
          <button onClick={changeColor} className="text-center text-blue-700 justify-center flex items-center bg-blue-500 rounded-full w-32 h-32 border-blue-700 border-b-8 hover:bg-blue-600 focus:bg-blue-700 focus:border-blue-200">
            { theme
              ? <FaSun className="w-8 h-8"/>
              : <FaMoon className="w-8 h-8" />
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Splash2