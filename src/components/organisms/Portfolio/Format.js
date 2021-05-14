import React from 'react'
import tw, { css } from 'twin.macro'

export const Section= (props) =>
(
	<section id={props.id} css={[tw`bg-yellow-100`,
		props.color==="green" && tw`bg-green-100`,
		props.color==="purple" && tw`bg-purple-100`,
		props.color==="red" && tw`bg-red-100`,
    props.color==="black" && tw`bg-club text-white`]}>
		{props.children}
	</section>
)
export const Container= (props) => (
<div id={props.id} css={[tw`container mx-auto px-5 sm:py-16 pb-16 pt-12`]} >
	{props.children}
</div>
)
export const Col=tw.div`flex flex-col`
export const CenterDiv=tw.div`text-center`
export const Title=tw.h1`sm:text-4xl text-3xl pb-6 md:pb-12 font-medium font-legacy`
export const Green=css`${tw`bg-green-400`}`
export const Purple=css`${tw`bg-purple-400`}`
export const Red=css`${tw`bg-red-400`}`
export const Bar = (props) =>
(
	<div css={[tw`flex flex-col rounded overflow-hidden bg-blue-400 h-1`,
		props.color==="green" && Green,
		props.color==="purple" && Purple,
		props.color==="red" && Red
	]} />
)
export const Content=tw.div`flex flex-col md:flex-row items-center md:py-12 py-6`
export const H1=tw.h1`md:w-2/5 md:py-12 py-6 font-black text-center font-regular text-3xl `
export const P=tw.p`md:w-2/3 md:ml-auto leading-relaxed text-base font-regular`
