import React from 'react'
import { Link } from 'gatsby'
import tw from 'twin.macro'

import { SocialMediaButtons } from '../components/atoms/SocialMediaButtons'
import { GiFlowerPot } from 'react-icons/gi'

const MyFooter = (props) => {
  return (
    <footer className={`${props.className} ${props.dark && `bg-club text-white`}`}>
      <div className="container px-5 py-8 mx-auto flex items-center md:flex-row flex-col">
        
        <div className="flex flex-row items-center justify-evenly">
          <div className="flex title-font font-medium items-center md:justify-start justify-center">
            <p className="ml-3 text-2xl font-regular">
              <Link to="/app">
                vleung
              </Link>
            </p>
          </div>
          <div className="ml-2">
            <Link to="/app/hidden">
              <GiFlowerPot css={[tw`hover:text-pink-500`]}/>
            </Link>
          </div>
        </div>

				<div className="my-2 md:ml-2">
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
