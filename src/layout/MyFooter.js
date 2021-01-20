import React from 'react'
import { Link } from 'gatsby'
import tw from 'twin.macro'

import { SocialMediaButtons } from '../components/SocialMediaButtons'
import { GiFlowerPot } from 'react-icons/gi'

function MyFooter() {
  return (
    <footer className="border border-2 border-white">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
					
				<div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
					<p className="ml-3 text-2xl font-regular">
						<Link to="/">
							vleung
						</Link>
					</p>
				</div>
				
        <p className="text-md text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 font-regular">© 2020 Vivian Leung
        </p>

				<div className="md:ml-2">
					<Link to="/hidden">
						<GiFlowerPot css={[tw`hover:text-pink-500`]}/>
					</Link>
				</div>

				<div className="md:ml-auto">
					<SocialMediaButtons />
				</div>

      </div>
    </footer>
  );
}

export default MyFooter;
