import React from "react";
import tw from "twin.macro"
import { Section, Container, Col, CenterDiv, Title, Bar, Content, H1, P } from './Format';
import Gallery from 'react-grid-gallery';

const GalleryBox=tw.div`mb-8 w-full mx-auto overflow-hidden block`

const One="https://i.imgur.com/NpgBaOo.jpg"
const OneThumb="https://i.imgur.com/dsIGmuH.jpg"
const Two="https://i.imgur.com/01Bf8er.jpg"
const TwoThumb="https://i.imgur.com/qvcpWVG.jpeg"
const Three="https://i.imgur.com/KmFgUtF.jpg"
const Five="https://i.imgur.com/RCPQGx3.jpg"
const FiveThumb="https://i.imgur.com/JXRH1yO.jpg"
const Six="https://i.imgur.com/LtpSyhS.jpg"
const SixThumb="https://i.imgur.com/SaqShsf.jpg"
const Seven="https://i.imgur.com/bR0og5M.jpg"
const SevenThumb="https://i.imgur.com/nmi6bIW.jpg"

const OilOnion="https://i.imgur.com/E1OnKyP.jpg"
const OilLandscape="https://imgur.com/MkZP7Qh.jpg"
const OilAnthonyBourdain="https://imgur.com/pPRIAwA.jpg"


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
}
]

function Art() {

return (
	<Section id="artist" color="red">
		<Container>
			<CenterDiv><Title>Artwork</Title></CenterDiv>
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
