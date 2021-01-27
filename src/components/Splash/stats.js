import React from 'react';
import tw, { css } from 'twin.macro'

import { Text, RegularText, Quote } from '../Common/Text'

const BlackB= css`${tw`border-black`}`
const STR= css`${tw`border-red-500 w-1/2`}`
const INT= css`${tw`border-blue-500 w-10/12`}`
const DEX= css`${tw`border-green-500 w-11/12`}`
const AGI= css`${tw`border-yellow-500 w-7/12`}`
const END= css`${tw`border-pink-500 w-1/4`}`
const Border = props => (
	<div css={[ 
						tw`w-full`,
						props.left && tw`border-l-2 h-8 `,
						props.top && tw`border-t-2`,
						props.stat && tw`border-t-4 rounded-r-sm`,
						BlackB, // black by default
						props.color==="red" && STR,
						props.color==="blue" && INT,
						props.color==="green" && DEX,
						props.color==="yellow" && AGI,
						props.color==="pink" && END,
	]} /> 
)

const ListItem = props => 
(
	<div className="flex flex-row w-full sm:w-full lg:w-3/4" >
		<div className="w-1/8">
			<Text style={RegularText} text={props.leftText} />
		</div>
		<div className="w-7/8 ml-auto">
			<Text style={RegularText} text={props.rightText} />
		</div>
	</div>
)

export const Stats = () => {
  return (
		<div className="flex flex-col w-full">	
			<Text style={Quote} text="Level 24" />
			<div className="flex w-full items-center ">
				<div className="w-1/6" >
					<ul className="my-3">STR</ul>
					<ul className="my-3">INT</ul>
					<ul className="my-3">DEX</ul>
					<ul className="my-3">AGI</ul>
					<ul className="my-3">END</ul>
				</div>
				<div className="w-5/6 xs:mx-2 sm:mx-2 lg:-mx-4 xl:-mx-12 my-8 lg:my-8 px-5">
					<Border top />
					<Border left />
					<Border stat color="red" />
					<Border left />
					<Border stat color="blue" />
					<Border left />
					<Border stat color="green" />
					<Border left />
					<Border stat color="yellow" />
					<Border left />
					<Border stat color="pink" />
					<Border left />
					<Border top />
				</div>
			</div>
			<div className="text-left mx-auto w-full xl:w-3/4 px-5 md:px-0 my-10 lg:my-4">
				<ListItem leftText="Weapon:" rightText="MacBook Pro 2016" />
				<ListItem leftText="Class:" rightText="Web Developer" />
				<ListItem leftText="Languages:" rightText="JS, C++, Python" />
				<ListItem leftText="Skills:" rightText="Git, React, Vim, VSCode" />
			</div>
		</div>
)
}
