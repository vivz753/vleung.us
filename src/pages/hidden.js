import React from 'react'
import MyLayout from '../layout/MyLayout'
import tw from 'twin.macro'

import { H1, Quote, RegularText, RegularParagraph, Text } from '../components/Common/Text'

const Section = tw.section`bg-yellow-100`
const Container=tw.div`container mx-auto flex px-5 pb-12 flex-col items-center`
const Row=tw.div`mx-auto inline-flex sm:flex-row flex-col`
const Col=tw.div`flex-col`
const Content=tw.div`lg:flex-grow md:w-full flex flex-col items-center text-center`
const Card=tw.div`lg:flex-grow md:w-full md:px-5 px-1 py-10 flex flex-col items-center`


function Hidden () {
return (
	<MyLayout>
		<Section>
			<Container>
				<Content>
					<Card>
						<Text style={RegularText} text="*gasp*" />
						<Text style={RegularText} text="you've discovered the hidden page!" />
					</Card>
					<img src="https://i2.wp.com/media3.giphy.com/media/xT8qBkqPvuA8ajpMl2/giphy.gif" alt="Smell Roses" />
					<Card>
					<Text style={Quote} text={`"Life moves pretty fast. If you don't stop and look around once in a while, you could miss it."`}/>
					<Text style={RegularText} text="—Ferris Bueller's Day Off (1986)"/>
					</Card>
				</Content>
				<Row>
					<Card>
						<img src="https://prodimage.images-bn.com/pimages/9781628726725_p0_v5_s550x406.jpg" alt="What You Should Know About Politics But Don't" />
						<Text style={RegularParagraph} text="Book currently reading: What You Should Know About Politics But Don't (2019)" />	
					</Card>
					<Card>
						<img src="https://e.snmc.io/i/300/w/d0957c2a9f88ab256f6f41f6f02226c4/5867121" alt="Good Will Hunting" />
						<img src="https://upload.wikimedia.org/wikipedia/en/5/54/RBGfilmPoster.jpeg" alt="RBG" />
						<Text style={RegularParagraph} text="Movie last watched: Good Will Hunting (1997), RBG (2018)" />
					</Card>
					<Card>

						<img src="https://m.media-amazon.com/images/M/MV5BNjVhMjBhMDYtYTVlZi00MWM3LTg1MDktYjc1NmZhOTNkOTA5XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg" alt="Tales of the City" />
						<img src="https://is1-ssl.mzstatic.com/image/thumb/Video71/v4/2e/c9/62/2ec962fa-ac53-33ca-131d-7253d7458809/mzl.vsiemytq.lsr/268x0w.png" alt="Gilmore Girls" />
						<Text style={RegularParagraph} text="TV Show currently watching: Tales of the City (2019), Gilmore Girls (2003)" />
					</Card>
					<Card>
						<img src="https://steamcdn-a.akamaihd.net/steam/apps/1151640/capsule_616x353.jpg?t=1596817204" alt="Horizon Zero Dawn" />
						<Text style={RegularParagraph} text="Video Game last played: Horizon Zero Dawn (2017)" />
					</Card>
				</Row>
				<Card>
				<Col>
					<Text style={RegularParagraph} text="Top 10 Favorite Movies:" />
					<Text style={RegularText} text="1. Silver Linings Playbook (2012)" />
					<Text style={RegularText} text="2. Portrait of a Lady on Fire (2019)" />
					<Text style={RegularText} text="3. The Handmaiden (2016)" />
					<Text style={RegularText} text="4. A Star Is Born (2018)" />
					<Text style={RegularText} text="5. Moonlight (2016)" />
					<Text style={RegularText} text="6. Spider-Man: Into the Spider-Verse" />
					<Text style={RegularText} text="7. Gran Torino (2008)" />
					<Text style={RegularText} text="8. Freedom Writers (2007)" />
					<Text style={RegularText} text="9. The Lion King (1994)" />
					<Text style={RegularText} text="10. Mulan (1998)" />
				</Col>
				</Card>
			</Container>
		</Section>
	</MyLayout>
);
}

export default Hidden
