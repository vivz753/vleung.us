import React from "react";
import { Link } from "gatsby";
import tw, { styled, css } from "twin.macro"
import Clock from "react-live-clock"

const MyHeader = (props) => {

// Containers
const Container = tw.div`container mx-auto flex flex-wrap px-5 py-8 flex-col md:flex-row items-center`
const NavBar = tw.nav`flex flex-wrap md:flex-row flex-col items-center md:items-start`

// Fonts
const titleText = css`${tw`md:mx-4 flex text-2xl items-center font-legacy md:mb-0`}`
const normalText = css`${tw`md:mx-4 md:my-0 my-1 font-legacy text-lg font-regular`}`

// Components
const ColorLink = props => (
  <>
    <HoverColor style={props.style} color={props.color}>
		<Link to={props.path}>
			{props.text}
		</Link>
		</HoverColor>
  </>
)

const HoverColor = styled.p`
	&:hover {
		color: ${props => 
			{
				return props.color==="pink" ? "#ed64a6" : 
				props.color==="purple" ? "#9f7aea" :
				props.color==="blue" ? "#4299e1" :
				props.color==="green" ? "#48bb78" :
				props.color==="yellow" ? "#ecc94b" :
				props.color==="orange" ? "#ed8936" :
				props.color==="red" ? "#f56565" : "#cbd5e0" 
			}
		};
	}
	${props => props.style}
`

  return (
		<div className={`${props.className} ${props.dark && `bg-club text-white`}`}>
			<Container>
				{/* Title */}
				<ColorLink style={titleText} path="/app" text="vleung" color="purple"/>
				
				{/* Menu */}
				<NavBar>

					<ColorLink style={normalText} color="blue" path="/app/cv/" text="CV"/>
					<ColorLink style={normalText} color="red"  path="/app/portfolio/" text="Portfolio"/>

				</NavBar>

				{/* Time */}
				<p className="md:ml-auto text-xs md:m-4 mt-3">
					<Clock format={'h:mm:ss a '} ticking={true} timezone={'US/Pacific'} /> PST
				</p>

		</Container>
	</div>
  );
}

export default MyHeader;
