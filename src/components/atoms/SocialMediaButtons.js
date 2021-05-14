import React from 'react';
import tw from 'twin.macro'

import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Style=tw`w-6 h-6 md:h-8 md:w-8`

const LogoButton = (props) =>
(
	<a href={props.src} className="ml-3 hover:text-purple-500">
		{ props.icon==="git" && <FaGithub css={[tw`hover:text-green-500`, Style]}/> }
		{ props.icon==="linkedin" && <FaLinkedinIn css={[tw`hover:text-blue-500`, Style]}/> } 
		{ props.icon==="twitter" && <FaTwitter css={Style}/> } 
		{ props.icon==="insta" && <FaInstagram css={Style}/> } 
	</a>
)

export const SocialMediaButtons = () => (

	<div className="flex justify-center">
		<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
			<LogoButton src="https://github.com/vivz753" icon="git"/>
			<LogoButton src="https://www.linkedin.com/in/vivz753/" icon="linkedin"/>
{/*		
			<LogoButton src="https://twitter.com/vaginamilktea" icon="twitter"/>
			<LogoButton src="https://www.instagram.com/vivian.leung01/?hl=en" icon="insta"/>
*/}	
	 </span>
	</div>

)
