import React, { useState } from 'react';
import tw, { css } from 'twin.macro'
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import ProfilePic from '../../images/profile.jpg'
import { H1 } from '../Common/Text'
import { ViewMyWork }  from './viewmywork'
import { Stats } from './stats'

const Section = tw.section`bg-yellow-100`
const Container = tw.div`container mx-auto flex px-5 py-12 lg:px-12 lg:flex-row flex-col items-center`
const Avatar = (props) =>
(
	<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
		<img className="object-scale-down object-center w-full h-full rounded-lg shadow-xl" alt="avatar" src={props.src} />
	</div>
)
const Content = tw.div`lg:flex-grow w-full px-2 lg:w-1/2 lg:pl-24 flex flex-col md:w-7/12  items-center text-center`
const Bio = () =>
(
	<div className="mt-8 m-auto">
		<H1>hi, i'm vivian</H1>
	</div>
)

export const Splash = () => {

	const [toggleStats, setToggleStats] = useState(false);

	const handleToggle = () => {
		console.log(!toggleStats);
		setToggleStats(!toggleStats);
	}

  return (
		<Section>
			<Container>
				<Avatar src={ProfilePic} />
				<Content>
					<Bio />
					{/* <ViewMyWork /> */}
					<div onClick={handleToggle} className="hover:text-pink-300 m-auto" >
						{ toggleStats && <FaCaretUp css={[tw`h-6 w-6`]} /> }
						{ !toggleStats && <FaCaretDown css={[tw`h-6 w-6`]} /> }
					</div>
					{ toggleStats && <Stats /> }
				</Content>
      </Container>
		</Section>
	);
}
