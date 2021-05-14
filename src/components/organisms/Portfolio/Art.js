import React from "react";
import tw from "twin.macro"
import { Section, Container, Col, CenterDiv, Title, Bar, Content, H1, P } from './Format';
import Gallery from 'react-grid-gallery';
import { BiPalette } from 'react-icons/bi'

import Eight from "../../../images/art/8.jpg"
import One from "../../../images/art/1.jpg"
import OneThumb from "../../../images/art/1thumb.jpg"
import Two from "../../../images/art/2.jpg"
import TwoThumb from "../../../images/art/2thumb.jpg"
import Three from "../../../images/art/3.jpg"
import Five from "../../../images/art/5.jpg"
import FiveThumb from "../../../images/art/5thumb.jpg"
import Six from "../../../images/art/6.jpg"
import SixThumb from "../../../images/art/6thumb.jpg"
import Seven from "../../../images/art/7.jpg"
import SevenThumb from "../../../images/art/7thumb.jpg"
import OilOnion from "../../../images/art/OilOnion.jpg"
import OilAnthonyBourdain from "../../../images/art/OilAnthonyBourdain.jpg"
import OilLandscape from "../../../images/art/OilLandscape.jpg"
import CharcoalButt from "../../../images/art/CharcoalButt.jpg"
import Asaro from "../../../images/art/Asaro.jpg"
import Mark from "../../../images/art/Mark.jpg"
import CharcoalQueen from "../../../images/art/CharcoalQueen.jpg"
import OilRBG from "../../../images/art/OilRBG.jpg"
import OilWhiteLady from "../../../images/art/OilWhiteLady.jpg"
import Zagreus from "../../../images/art/Zagreus.jpg"

const GalleryBox=tw.div`mb-8 w-full mx-auto overflow-hidden block`

// const One="https://i.imgur.com/NpgBaOo.jpg"
// const OneThumb="https://i.imgur.com/dsIGmuH.jpg"
// const Two="https://i.imgur.com/01Bf8er.jpg"
// const TwoThumb="https://i.imgur.com/qvcpWVG.jpeg"
// const Three="https://i.imgur.com/KmFgUtF.jpg"
// const Five="https://i.imgur.com/RCPQGx3.jpg"
// const FiveThumb="https://i.imgur.com/JXRH1yO.jpg"
// const Six="https://i.imgur.com/LtpSyhS.jpg"
// const SixThumb="https://i.imgur.com/SaqShsf.jpg"
// const Seven="https://i.imgur.com/bR0og5M.jpg"
// const SevenThumb="https://i.imgur.com/nmi6bIW.jpg"

// const OilOnion="https://i.imgur.com/E1OnKyP.jpg"
// const OilLandscape="https://imgur.com/MkZP7Qh.jpg"
// const OilAnthonyBourdain="https://imgur.com/pPRIAwA.jpg"


const IMAGES =
[
{
        src: One, 
        thumbnail: OneThumb, 
        thumbnailWidth: 1261,
        thumbnailHeight: 2081,
        caption: "Charcoal, 11 hrs - July 2020"
},
{
        src: Two, 
        thumbnail: TwoThumb,
        thumbnailWidth: 531,
        thumbnailHeight: 731,
        caption: "Charcoal, 10 hrs - July 2020"
},
{
        src: Three, 
        thumbnail: Three, 
        thumbnailWidth: 3024,
        thumbnailHeight: 4032,
				caption: "Charcoal, 8.5 hrs - August 2020"
},
{
				src: Five,
				thumbnail: FiveThumb, 
				thumbnailWidth: 585,
				thumbnailHeight: 901,
				caption: "Charcoal, 7 hrs - August 2020"
},
{
				src: Six,
				thumbnail: SixThumb,
				thumbnailWidth: 3024,
				thumbnailHeight: 4032,
				caption: "Charcoal, 5.5 hrs - August 2020"
},
{
				src: Seven,
				thumbnail: SevenThumb,
				thumbnailWidth: 3024,
				thumbnailHeight: 4032,
				caption: "Charcoal, 7 hrs - September 2020"
},
{
				src: OilOnion,
				thumbnail: OilOnion,
				thumbnailWidth: 3363,
				thumbnailHeight: 2712,
				caption: "Oil paint, 14 hrs - September 2020"
},
{
				src: OilLandscape,
				thumbnail: OilLandscape,
				thumbnailWidth: 3024,
				thumbnailHeight: 4032,
				caption: 'Oil paint 16"x20", 40 hrs - October 2020'
},
{
				src: OilAnthonyBourdain,
				thumbnail: OilAnthonyBourdain,
				thumbnailWidth: 3024,
				thumbnailHeight: 4000,
				caption: 'Oil paint 16"x20", 27 hrs - November 2020'
},
{
				src: Eight,
				thumbnail: Eight,
				thumbnailWidth: 4000,
				thumbnailHeight: 2900,
				caption: 'Charcoal 8.5"x11", 2 hrs - December 2020'
},
{
				src: CharcoalButt,
				thumbnail: CharcoalButt,
				thumbnailWidth: 3024,
				thumbnailHeight: 4000,
				caption: 'Charcoal 8.5"x11", 5 hrs - December 2021'
},
{
				src: Asaro,
				thumbnail: Asaro,
				thumbnailWidth: 3024,
				thumbnailHeight: 4000,
				caption: 'Charcoal 8.5"x11", 6 hrs - February 2021'
},
{
				src: Mark,
				thumbnail: Mark,
				thumbnailWidth: 3024,
				thumbnailHeight: 4000,
				caption: 'Charcoal 8.5"x11", 6 hrs - February 2021'
},
{
				src: CharcoalQueen,
				thumbnail: CharcoalQueen,
				thumbnailWidth: 3024,
				thumbnailHeight: 4000,
				caption: 'Charcoal 8.5"x11", 2 hrs - December 2020'
},
{
				src: OilRBG,
				thumbnail: OilRBG,
				thumbnailWidth: 3024,
				thumbnailHeight: 4000,
				caption: 'Oil paint 11"x14", 25 hrs - December 2020'
},
{
				src: OilWhiteLady,
				thumbnail: OilWhiteLady,
				thumbnailWidth: 3024,
				thumbnailHeight: 4000,
				caption: 'Oil paint 11"x14", 10 hrs - January 2021'
},
{
				src: Zagreus,
				thumbnail: Zagreus,
				thumbnailWidth: 3024,
				thumbnailHeight: 4000,
				caption: 'Chameleon markers 8.5"x11", 12 hrs - March 2020'
},
]

const Art = (props) => {

return (
	<Section id="artist" color={props.dark ? `black` : `red`}>
		<Container>
			<CenterDiv>
        <Title>
        {/* <BiPalette className="text-center mx-auto justify-center" /> */}
          Artwork
        </Title>
      </CenterDiv>
			<Bar color="red"/>
			<Col>
				<Content>
					<H1>Charcoal/Oil Studies</H1>
					<P>
						I like my government how I like my art; "representing subject matter truthfully, without artificiality and avoiding speculative fiction and supernatural elements" is the definition of Realism.
					</P>
				</Content>
			</Col>
		
				<GalleryBox css={[tw``]} >
					<Gallery images={IMAGES} rowHeight={240} enableImageSelection={false} backdropClosesModal={true} showLightboxThumbnails={true}/>
				</GalleryBox>
				<GalleryBox>
					<u>
					<a href="https://gumroad.com/vleung">Gumroad Store</a>
					</u>
				</GalleryBox>
		</Container>
	</Section>
);
}

export default Art 
