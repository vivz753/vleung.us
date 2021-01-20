import React from "react"
import { Link } from 'gatsby';
import tw, { css } from "twin.macro"

import { RegularText, RegularParagraph, Text } from '../Common/Text'

const FlexCenter = tw.div`flex justify-center flex-col`
const Row = tw.span`inline-flex sm:ml-auto sm:mt-0 mt-4 mb-4 justify-center sm:justify-start`

const Green = css`${tw`bg-green-200 text-green-600`}`
const Purple = css`${tw`text-purple-600 bg-purple-200`}`
const Red = css`${tw`text-red-600 bg-red-200`}`

const Badge = props => (
  <Link to={props.path}>
    <span css={[tw`mr-5 px-3 inline-flex text-xs leading-5 font-semibold rounded-full`,
      props.color==="green" && Green,
      props.color==="purple" && Purple,
      props.color==="red" && Red
      ]}>
      {props.text}
    </span>
  </Link>
)

export const ViewMyWork = () =>
(
<FlexCenter>
	<Row>
		<div>
			<Badge path="/portfolio#artist" text="Artist" color="red" />
			<Badge path="/portfolio#engineer" text="Engineer" color="green" />
			<Badge path="/portfolio#activist" text="Activist" color="purple" />
		</div>
	</Row>
</FlexCenter>
)
