import React from 'react';
import tw from 'twin.macro'
import { Section, Container, Col, CenterDiv, Title, Bar, Content, H1, P } from './Format';

const ComputerGraphics = (props) => {

const VideosContainer=tw.div`flex flex-wrap sm:-m-4 -mx-4`
const VideoIframe= (props) => (
	<div className="rounded-lg h-64 overflow-hidden shadow-xl">
		<iframe
			title={props.title}
			width="100%" height="100%"
			src={props.src}
			frameBorder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		/>
	</div>
)
const VideoCard= (props) => (
<div className="p-4 md:w-1/3 pt-8 pb-6 sm:pb-4">
	<VideoIframe src={props.src} title={props.title} />
	<h2 className="text-xl font-medium title-font font-legacy mt-5">
		{props.title}
	</h2>
	<p className="text-base leading-relaxed font-regular mt-2">
	  {props.description}
	</p>
</div>
)

return (
<div id="engineer">
	<Section id="engineer" color={props.dark ? `black` : `green`}>
		<Container id="engineer">
			<CenterDiv><Title>Computer Graphics</Title></CenterDiv>
			<Bar color="green"/>
			<Col>
				<Content>
					<H1>2D/3D Simulations</H1>
					<P>
					Math exists in everything. These worlds are created by keeping track of every single point in 3D and 2D space. Camera view angles and perspectives are calculated using matrix multiplication and fundamental concepts of linear algebra. Basically, everything we see and know to exist can be broken down into formulas and lists of data points. Fun fact: the 3D model of the Notre Dame Cathedral in the video game Assassin's Creed was used to help reconstruct the real one in Paris after it was burned down.
					</P>
				</Content>
			</Col>
			<VideosContainer>
				<VideoCard 
					src="https://www.youtube.com/embed/o47EnZuYJrQ" 
					title="Ray Tracing in 3D using an Octree"
					description="This is an assignment for my class CS134: Computer Game Design & Programming at San Jose State University taken with Kevin Smith during fall semester 2018. Created using openFrameworks library, and developed in XCode IDE."
				/>
				<VideoCard 
					src="https://www.youtube.com/embed/yUKTGlYq0QY"
					title="Pumpkin Cat & the Skulls"
					description="A 2D Vintage Arcade Shooter that demonstrates the use of game physics, collision detection, and particle/sprite systems while emphasizing a cleanly written object-oriented framework. This is a game I created for my CS134 class at SJSU with guidance from Professor Kevin Smith. It was coded in C++ and relies on the openFrameworks library. Sprites were drawn using Adobe Photoshop CS6."
				/>
				<VideoCard 
					src="https://www.youtube.com/embed/1EQnre0qbFg"
					title="Unbarrelble: A 3D Simulation"
					description="This is a demo of my final project for CS134, created with my partner, Cyrus. This game demonstrates the use of camera manipulation, above-height telemetry sensing, and collision detection using octrees. Collect as many fruits possible with the barrel which simulates a thrust and gravity force similar to one of a rocket in space. All 3D models were created using Maya."
				/>
			</VideosContainer>
		</Container>
	</Section>
</div>
);

}

export default ComputerGraphics 
