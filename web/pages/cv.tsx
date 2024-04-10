import { NextPage } from "next"
import Link from "next/link"
import { FC } from "react"

const CV: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-8 pt-28 lg:px-24">
      <div className="flex w-full max-w-[719px] flex-col py-24">
        <div className="flex flex-col items-center justify-center gap-4 py-8">
          <div className="text-2xl">Vivian Leung</div>
          <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-8">
            {/* TODO: insert icons */}
            <div>vivz753@gmail.com</div>
            <Link href="https://github.com/vivz753">https://github.com/vivz753</Link>
            <Link href="https://linkedin.com/in/vivz753">https://linkedin.com/in/vivz753</Link>
          </div>
        </div>
        <div className="-ml-4 py-4 text-2xl lg:-ml-12">Experience</div>
        <Job title="Instructor" date="Apr 2023 - Feb 2024" location="Art Hub Academy, Sunnyvale CA USA" />
        <Job title="Lead Front-End Engineer" date="Dec 2021 - Mar 2023" location="Coinvise, San Francisco CA USA" />
        <Job title="Senior Web Components Engineer" date="Jul 2021 - Dec 2021" location="Infor, New York NY USA" />
        <Job
          title="Front-End Software Engineer"
          date="Mar 2021 - April 2021"
          location="The Power of Music LTD, London England UK"
        />
        <Job title="Full Stack Software Engineer" date="Dec 2020 - Feb 2021" location="AutoviseAI LLC, Gujarat India" />
        <Job title="C++ Software Engineer" date="Nov 2019 - Sep 2020" location="Auris Health, Redwood City CA USA" />
        <Job title="Machine Learning Intern" date="Jun 2019 - Sep 2019" location="Clover Network, Sunnyvale CA USA" />
        <Job
          title="Front-End Software Intern"
          date="Oct 2018 - Mar 2019"
          location="IBM Silicon Valley Labs, San Jose CA USA"
        />
        <Job
          title="Instructional Student Assistant"
          date="Nov 2017 - May 2018"
          location="San Jose State University, San Jose CA USA"
        />
        <Job title="Lab Technician" date="Aug 2017 - Sep 2017" location="Spectra7 Microsystems, San Jose CA USA" />
        <Job title="Sales Associate" date="Dec 2016 - Feb 2017" location="Barnes & Nobles, Inc., San Jose CA USA" />
        <Job title="Lifeguard, Swim Instructor" date="May 2014 - Aug 2015" location="Cosumnes CSD, Elk Grove CA USA" />
        <Job title="Tutor, Babysitter" date="Sep 2014 - Jul 2015" location="Self-employed, Elk Grove, CA USA" />
        <div className="-ml-4 py-4 text-2xl lg:-ml-12">Education</div>
        <Job
          title="BS Software Engineering, 3.72 GPA"
          date="Aug 2015 - May 2019"
          location="San Jose State University, San Jose CA"
        />
        <div className="-ml-4 py-4 text-2xl lg:-ml-12">Leadership</div>
        <Job
          title="Treasurer"
          date="May 2018 - May 2019"
          location="Society of Women Engineers, San Jose State University"
        />
        <Job
          title="Clubroom Manager"
          date="Nov 2017 - May 2018"
          location="Society of Women Engineers, San Jose State University"
        />
        <Job title="Vice President" date="May 2012 - May 2014" location="Key Club, Cosumnes Oaks Highschool" />
        <Job
          title="Public Relations Officer"
          date="May 2013 - May 2014"
          location="National Honor Society, Cosumnes Oaks Highschool"
        />
        <div className="-ml-4 py-4 text-2xl lg:-ml-12">Awards & Certifications</div>
        <Job
          link="https://courses.edx.org/certificates/482ed4cfd2b0444d846da2e1975dacdc"
          title="edX Verified Certificate for Computer Graphics"
          date="Oct 2020"
          location="University of San Diego, San Diego CA"
        />
        <Job title="Dean's Scholar" date="Aug 2015 - May 2019" location="San Jose State University, San Jose CA" />
        <Job
          title="Silicon Valley Engineering Scholarship"
          date="Aug 2015 - May 2019"
          location="San Jose State University, San Jose CA"
        />
        <Job
          title="American Red Cross Lifeguarding / First Aid / Administering Emergency Oxygen / CPR / AED"
          date="Apr 2014"
          location="Cosumnes CSD, Elk Grove"
        />
        <Job title="AP Scholar with Distinction" date="May 2014" location="Collegeboard" />
        <Job
          title="Distinguished Vice President"
          date="May 2013"
          location="Key Club Cal-Nev-Ha District Convention, Anaheim CA "
        />
      </div>
    </div>
  )
}

export default CV

const Job: FC<{ title: string; date: string; location: string; link?: string }> = ({
  title,
  date,
  location,
  link = "",
}) => (
  <ConditionalWrapper link={link}>
    <div className="flex flex-row justify-between py-2">
      <div className="flex flex-col gap-1">
        <span className="text-lg font-bold">{title}</span>
        <span className="text-lg">{location}</span>
      </div>
      <span className="mt-2 min-w-max text-right align-bottom text-xs uppercase">{date}</span>
    </div>
  </ConditionalWrapper>
)

const ConditionalWrapper: FC<React.PropsWithChildren<{ link: string }>> = ({ link, children }) =>
  link ? <Link href={link}>{children}</Link> : <div>{children}</div>
