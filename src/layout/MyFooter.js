import React from 'react'
import { Link } from 'gatsby'
import tw from 'twin.macro'

import { SocialMediaButtons } from '../components/atoms/SocialMediaButtons'
import { GiFlowerPot } from 'react-icons/gi'

const MyFooter = (props) => {
  return (
    <footer className={`${props.className} w-full ${props.dark && `bg-gray-800 text-white`}`}>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
				<div className="flex title-font font-medium items-center md:justify-start justify-center">
					<p className="ml-3 text-2xl font-regular">
						<Link to="/app">
							vleung
						</Link>
					</p>
				</div>
				
				<div className="md:ml-2">
					<Link to="/app/hidden">
						<GiFlowerPot css={[tw`hover:text-pink-500`]}/>
					</Link>
				</div>

				<div className="md:ml-2">
          {props.song}
        </div>

				<div className="md:ml-auto">
					<SocialMediaButtons />
				</div>

      </div>
    </footer>
  );
}

export default MyFooter;
