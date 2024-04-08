import React from "react";
import Carousel from 'nuka-carousel';
import { Container, Col, CenterDiv, Title, Bar, Content, H1, P } from './Format';

import One from '../../../images/swe/swe_table.jpeg';
import Two from "../../../images/swe/vivian-award.jpg"
import Wie2 from '../../../images/swe/wie-2.jpg'
import Seven from '../../../images/swe/succulent-shop-2.jpg'
import Nine from '../../../images/swe/succulent-shop-mario.jpg'
import Ten from '../../../images/swe/succulent-shop-mario-2.jpg'
import Eleven from '../../../images/swe/succulents-display.jpg'
import Twelve from '../../../images/swe/succulents.jpg'
import Fourteen from '../../../images/swe/swe-board.jpg'
import Fifteen from '../../../images/swe/swe-julie.jpeg'

const Leadership = (props) => {

    
const Img = (props) => (
	<div>
		<img alt="" src={props.src} />
	</div>
)

const sweAlbum = [
	{ src: One },
	{ src: Two },
	{ src: Wie2 },
	{ src: Seven },
	{ src: Eleven },
	{ src: Nine },
	{ src: Ten },
	{ src: Twelve },
	{ src: Fourteen },
	{ src: Fifteen },
]

const StyledCarousel = (props) => (
  <div className="items-center justify-center mx-auto md:w-2/3">
   <Carousel autoplay wrapAround cellAlign="center" heightMode="current">
		{ props.images.map( (img) => <Img src={img.src} /> )}
	 </Carousel>
	</div>
)

return (
	<section id="activist" className={`${props.dark ? `bg-purple-900 bg-opacity-25 text-purple-200` : `bg-purple-100`}`}>
		<Container>
			<CenterDiv><Title>Community Service</Title></CenterDiv>	
			<Bar className="bg-purple-500"/>
			<Col>
				<Content>
					<H1>Society of Women Engineers</H1>
					<P>
						When overwhelmed with school work, I found solace in community service clubs. Working with Society of Women Engineers at San Jose State University allowed me to build rapport with like-minded individuals. Together, we cultivated a safe place for women in engineering, empowering them to pursue their full potential in engineering and leadership at SJSU. How? By partnering with local and wordly organizations, facilitating panels with alumni and professionals, fundraising for national conventions, and electing thirty chair positions to our board to assist with end-of-the-year goals—we had many!
					</P>
				</Content>
			</Col>
			<StyledCarousel images={sweAlbum} />
		</Container>
	</section>
);
}

export default Leadership
