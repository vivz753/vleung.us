import React from 'react';
import { Link } from 'gatsby'
import tw, { css } from 'twin.macro'

import { BiPalette } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { GiBarracksTent } from 'react-icons/gi'
import MyLayout from '../layout/MyLayout';
import SEO from '../layout/seo';

import Art from '../components/Portfolio/Art'
import ComputerGraphics from '../components/Portfolio/ComputerGraphics'
import Leadership from '../components/Portfolio/Leadership'

const ColorLink = props => (
	<Link to={props.path}>
		<p className="px-2 text-blue-500"
			css={[props.color==="red" && Red,
						props.color==="green" && Green,
						props.color==="purple" && Purple]}>
			{ props.icon==="palette" && <BiPalette/> }
			{ props.icon==="laptop" && <FaLaptopCode/> }
			{ props.icon==="tent" && <GiBarracksTent/> }
		</p>

	</Link>
)
const Green=css`${tw`text-green-500`}`
const Purple=css`${tw`text-purple-500`}`
const Red=css`${tw`text-red-500`}`


function Portfolio () {



	return (
		<MyLayout>
			<SEO
					keywords={[`work`, `projects`, `design`, `vivian work`]}
					title="Work"
			/>
			<div className="fixed sticky pb-8 md:-mt-16 sm:w-1/4 items-center justify-center mx-auto text-center flex flex-row">
				<ColorLink path="/portfolio#artist" icon="palette" color="red"/> 
				<ColorLink path="/portfolio#engineer" icon="laptop" color="green"/> 
				<ColorLink path="/portfolio#activist" icon="tent" color="purple"/>
			</div>
			<Art />
			<ComputerGraphics />
			<Leadership />
		</MyLayout>
	);
}

export default Portfolio
