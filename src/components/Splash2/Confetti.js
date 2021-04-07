import React from "react";
import { css } from "twin.macro";
import { keyframes } from "@emotion/react"
import seedrandom from "seedrandom";

const confettiAnimation = keyframes`
0% { transform: rotateZ(0deg) rotateY(0deg) rotateX(0deg) translate(0,0); }
25% { transform: rotateZ(2deg) rotateY(120deg) rotateX(2deg) translate(-1vw,25vh); }
50% { transform: rotateZ(5deg) rotateY(240deg) rotateX(0deg) translate(1vw,50vh); }
75% { transform: rotateZ(2deg) rotateY(360deg) rotateX(2deg) translate(-1vw,75vh); }
100% { transform: rotateZ(5deg) rotateY(480deg) rotateX(0deg) translate(1vw,95vh); }

`

const Confetti = (props) => {

  const colors = [
    `bg-red-500`, 
    `bg-orange-500`,
    `bg-yellow-500`,
    `bg-green-500`,
    `bg-blue-500`,
    `bg-purple-500`,
  ]

  const color = colors[props.number % 6];
  const leftMargin = seedrandom(props.number)()*100;
  
  return (
    <div
      key={props.key}
      className={`w-5 h-2 ${color} z-20 rounded-sm`}
      css={[
        css`
        visibility: visible;
        position: absolute; 
        left: ${leftMargin}%;
        animation: ${props.drop && confettiAnimation} 4s linear;
        `
      ]}
    >

    </div>
  )
}

const ConfettiParty = (props) => {
  const totalConfetti = 200;
  const confettiArray = Array.from(Array(totalConfetti), (x, index) => index);

  return (
    <div className="h-full">
    {confettiArray.map((confetti, index) => {
    return(
      <Confetti key={index} number={index} drop={props.counter % totalConfetti >= index} />
    )
  })}
  </div>
  )
}

export default ConfettiParty;