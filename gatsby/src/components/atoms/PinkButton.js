import React from 'react'
import tw, { styled, css } from "twin.macro"

const PinkButtonBase = tw.p`
  inline-flex items-center bg-pink-500 py-2 px-4 text-white focus:outline-none hover:bg-pink-600 border border-white rounded-full text-base mt-4 md:mt-0 font-regular shadow-lg
`

const Arrow = () =>
(
  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
		<path d="M5 12h14M12 5l7 7-7 7"></path>
	</svg>
)

export const PinkButton = props => (
  <>
    <PinkButtonBase>
      {props.text}<Arrow />
    </PinkButtonBase>
  </>
)
