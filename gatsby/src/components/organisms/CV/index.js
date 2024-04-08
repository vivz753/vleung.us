import React from 'react';
import { Link } from "gatsby"
import tw, { styled, css } from 'twin.macro'
import { useGlobalState } from "../../../hooks/useGlobalState";

// Containers
const Container = tw.div`container mx-auto flex px-8 sm:px-24 md:px-0 md:py-20 pt-0 flex-col items-center`
const CenterDiv = tw.div`text-center justify-center lg:m-6 mx-4 mt-0 mb-8`
const LeftDiv = tw.div`lg:w-8/12 md:w-11/12 justify-center`
const LeftDivA = tw.div`lg:pl-12 md:pl-8 pt-4 pb-4`

// Fonts
const Normal= css`${tw`text-base`}`
const Title = css`${tw`text-2xl`}`
const H1 = css`${tw`text-lg`}`

// Text Components
const StyledParagraph = styled.p`
	${tw`mb-0 leading-relaxed font-regular`}
  ${props => props.style} 
	${props => props.css}
	${({bold}) => bold && tw`font-bold`}
	${({right}) => right && tw`md:ml-auto`}
	${({left}) => left && tw`mr-auto`}
`

const Text = props => (
	<StyledParagraph left={props.left} right={props.right} bold={props.bold} style={props.style} css={props.css}>
		{props.text}
  </StyledParagraph>
)

const Job = props => (
<div className="mb-4">
	<div className="flex md:flex-row flex-col">
		<Link to={props.link}>
			<Text left bold style={Normal} text={props.title} />
		</Link>
		<Text right style={Normal} text={props.date} />
	</div>
	<Text left style={Normal} text={props.location} />
</div>
)

function CV () {

  const { theme } = useGlobalState();

  return (
    <div className={`${theme ? `bg-club text-white` : `bg-white text-black`}`}>
      <Container>
        <CenterDiv>
          <Text style={Title} text="Vivian Leung" />
          <Text style={H1} text="vivz753@gmail.com   |   (916) 833-8138" />
        </CenterDiv>
        <LeftDiv>
            
          {/* Employment */}
          <Text style={Title} text="Employment" />
          <LeftDivA>
            <Job title="Front-End Software Engineer" date="Dec 2021 - Feb 2023" location="Coinvise" />
            <Job title="Senior Web Components Engineer" date="Jul 2021 - Dec 2021" location="Infor, New York NY USA" />
            <Job title="Front-End Software Engineer" date="Mar 2021 - Apr 2021" location="The Power of Music, London England UK" />
            <Job title="Full Stack Software Engineer" date="Dec 2020 - Feb 2021" location="AutoviseAI" />
            <Job title="C++ Software Engineer" date="Nov 2019 - Sep 2020" location="Auris Health, Redwood City CA USA" />
            <Job title="Machine Learning Intern" date="Jun 2019 - Sep 2019" location="Clover Network, Sunnyvale CA USA" />
            <Job title="Front-End Software Intern" date="Oct 2018 - Mar 2019" location="IBM Silicon Valley Labs, San Jose CA USA" />
            <Job title="Instructional Student Assistant" date="Nov 2017 - May 2018" location="San Jose State University, San Jose CA USA" />
            <Job title="Lab Technician" date="Aug 2017 - Sep 2017" location="Spectra7 Microsystems, San Jose CA USA" />
            <Job title="Sales Associate" date="Dec 2016 - Feb 2017" location="Barnes & Nobles, Inc., San Jose CA USA" />
            <Job title="Lifeguard, Swim Instructor" date="May 2014 - Aug 2015" location="Cosumnes CSD, Elk Grove CA USA" />
            <Job title="Tutor, Babysitter" date="Sep 2014 - Jul 2015" location="Self-employed, Elk Grove, CA USA" />
          </LeftDivA>

          {/* Education */}
          <Text style={Title} text="Education" />
          <LeftDivA>
            <Job title="BS Software Engineering, 3.72 GPA" date="Aug 2015 - May 2019" location="San Jose State University, San Jose CA" />
          </LeftDivA>

          {/* Leadership */}
          <Text style={Title} text="Leadership" />
          <LeftDivA>
            <Job title="Treasurer" date="May 2018 - May 2019" location="Society of Women Engineers, San Jose State University"/>
            <Job title="Clubroom Manager" date="Nov 2017 - May 2018" location="Society of Women Engineers, San Jose State University" />
            <Job title="Vice President" date="May 2012 - May 2014" location="Key Club, Cosumnes Oaks Highschool" />
            <Job title="Public Relations Officer" date="May 2013 - May 2014" location="National Honor Society, Cosumnes Oaks Highschool" />
          </LeftDivA>

          {/* Awards/Certifications */}
          <Text style={Title} text="Awards/Certifications" />

          <LeftDivA>
                <Job title="edX Verified Certificate for Computer Graphics" link="https://courses.edx.org/certificates/482ed4cfd2b0444d846da2e1975dacdc" date="Oct 2020" location="University of San Diego, San Diego CA" />
            <Job title="Dean's Scholar" date="Aug 2015 - May 2019" location="San Jose State University, San Jose CA" />
            <Job title="Silicon Valley Engineering Scholarship" date="Aug 2015 - May 2019" location="San Jose State University, San Jose CA" />
            <Job title="American Red Cross Lifeguarding/First Aid/Administering Emergency Oxygen/CPR/AED" date="Apr 2014" location="Cosumnes CSD, Elk Grove" />
            <Job title="AP Scholar with Distinction" date="May 2014" location="Collegeboard" />
            <Job title="Distinguished Vice President" date="May 2013" location="Key Club Cal-Nev-Ha District Convention, Anaheim CA " />
          </LeftDivA>
        </LeftDiv>
      </Container>
    </div>
  );
}

export default CV
