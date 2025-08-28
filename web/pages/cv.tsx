import { Entry, Icon } from "@types"
import clsx from "clsx"
import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import React, { FC } from "react"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const experience: Entry[] = [
  {
    title: "Open Source Web Developer with Google Summer of Code 2025",
    organization: "Blender Foundation",
    location: "Amsterdam, Netherlands",
    date: "May 2025 - Sept 2025",
    description: "",
    link: "https://devtalk.blender.org/t/gsoc-2025-adding-handy-features-and-ui-improvements-to-flamenco/40723",
  },
  {
    title: "Instructor",
    organization: "ArtHub Academy",
    location: "Sunnyvale CA USA",
    date: "Apr 2023 - May 2025",
    description: "",
  },
  {
    title: "Front-End Engineer",
    organization: "Coinvise",
    location: "San Francisco CA USA",
    date: "Dec 2021 - Mar 2023",
    description: "",
  },
  {
    title: "Senior Web Components Engineer",
    organization: "Infor",
    location: "New York NY USA",
    date: "Jul 2021 - Dec 2021",
    description: "",
  },
  {
    title: "Software Engineer",
    organization: "Auris Health",
    location: "Redwood City CA USA",
    date: "Nov 2019 - Sep 2020",
    description: "",
  },
  {
    title: "Software Intern (Machine Learning)",
    organization: "Clover Network",
    location: "Sunnyvale CA USA",
    date: "Jun 2019 - Sep 2019",
    description: "",
  },
  {
    title: "Software Intern (Front-End)",
    organization: "IBM Silicon Valley Labs",
    location: "San Jose CA USA",
    date: "Oct 2018 - Mar 2019",
    description: "",
  },
  {
    title: "Instructional Student Assistant",
    organization: "San Jose State University",
    location: "San Jose CA USA",
    date: "Nov 2017 - May 2018",
    description: "",
  },
  {
    title: "Lab Technician",
    organization: "Spectra7 Microsystems",
    location: "San Jose CA USA",
    date: "Aug 2017 - Sep 2017",
    description: "",
  },
  {
    title: "Sales Associate",
    organization: "Barnes & Nobles, Inc.",
    location: "San Jose CA USA",
    date: "Dec 2016 - Feb 2017",
    description: "",
  },
  {
    title: "Lifeguard, Swim Instructor",
    organization: "Cosumnes CSD",
    location: "Elk Grove CA USA",
    date: "May 2014 - Aug 2015",
    description: "",
  },
]

const education: Entry[] = [
  {
    title: "BS Software Engineering 3.72 GPA",
    organization: "San Jose State University",
    location: "San Jose CA",
    date: "Aug 2015 - May 2019",
    description: "",
  },
]
const leadership: Entry[] = [
  {
    title: "Treasurer",
    organization: "Society of Women Engineers",
    location: "San Jose State University",
    date: "May 2018 - May 2019",
    description: "",
  },
  {
    title: "Clubroom Manager",
    organization: "Society of Women Engineers",
    location: "San Jose State University",
    date: "Nov 2017 - May 2018",
    description: "",
  },
  {
    title: "Vice President",
    organization: "Key Club",
    location: "Cosumnes Oaks Highschool",
    date: "May 2012 - May 2014",
    description: "",
  },
  {
    title: "Public Relations Officer",
    organization: "National Honor Society",
    location: "Cosumnes Oaks Highschool",
    date: "May 2018 - May 2019",
    description: "",
  },
]

const awardsCertifications: Entry[] = [
  {
    title: "edX Verified Certificate for Computer Graphics",
    organization: "University of San Diego",
    location: "San Diego CA USA",
    date: "Oct 2020",
    description: "",
    link: "https://courses.edx.org/certificates/482ed4cfd2b0444d846da2e1975dacdc",
  },
  {
    title: "Dean's Scholar",
    organization: "San Jose State University",
    location: "San Jose CA USA",
    date: "Aug 2015 - May 2019",
    description: "",
  },
  {
    title: "Silicon Valley Engineering Scholarship",
    organization: "San Jose State University",
    location: "San Jose CA USA",
    date: "Aug 2015 - May 2019",
    description: "",
  },
  {
    title: "American Red Cross Lifeguarding / First Aid / Administering Emergency Oxygen / CPR / AED",
    organization: "Cosumnes CSD",
    location: "Elk Grove CA USA",
    date: "Aug 2015 - May 2019",
    description: "",
  },
  {
    title: "AP Scholar with Distinction",
    organization: "Collegeboard",
    location: "",
    date: "May 2014",
    description: "",
  },
  {
    title: "Distinguished Vice President",
    organization: "Key Club Cal-Nev-Ha District",
    location: "",
    date: "May 2013",
    description: "",
  },
]

const logoLinkHoverStyle = "group-hover:text-pink-400"
const LogoLink: FC<{ link: string; label: string; icon: Icon }> = ({ link, label, icon }) => (
  <a href={link} className="group flex flex-row items-center gap-2">
    {icon === Icon.LINKEDIN ? (
      <FaLinkedin className={clsx("h-8 w-8", logoLinkHoverStyle)} />
    ) : icon === Icon.GITHUB ? (
      <FaGithubSquare className={clsx("h-8 w-8", logoLinkHoverStyle)} />
    ) : (
      <MdEmail className={clsx("h-8 w-8", logoLinkHoverStyle)} />
    )}

    <span className={logoLinkHoverStyle}>{label}</span>
  </a>
)

const CV: NextPage = () => {
  return (
    <div className="flex h-full min-h-screen w-full items-center pt-[112px]">
      <main className="grid w-full pb-8 lg:grid-cols-[minmax(230px,_450px)_minmax(774px,_1024px)] lg:gap-8 lg:pb-0">
        <aside className="flex h-full w-full flex-col">
          <div className="sticky top-[0vh] w-full bg-pink-50 py-[5vh] lg:h-[100vh]">
            <section className="grid h-full items-center justify-center gap-4">
              <div className="flex flex-col items-center ">
                <div className="relative mb-2 h-48 w-48 overflow-clip rounded-full">
                  <Image
                    alt="Profile picture of Vivian with her cat, Mimi"
                    src="/images/me-mimi-profile.png"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span className="text-2xl">Vivian Leung</span>
                <span className="text-lg">Web Developer</span>
              </div>
              <div className="order-3 flex flex-col items-center lg:order-2 ">
                <span className="my-2 text-2xl">Skills</span>
                <div className="grid h-full grid-cols-2 gap-x-8 2xl:grid-cols-1">
                  <span className="text-lg">• Typescript</span>
                  <span className="text-lg">• React.js</span>
                  <span className="text-lg">• Git</span>
                  <span className="text-lg">• OpenAPI</span>
                  <span className="text-lg">• Linux/Unix CLI</span>
                  <span className="text-lg">• Go</span>
                  <span className="text-lg">• C++</span>
                  <span className="text-lg">• SQL</span>
                </div>
              </div>
              <div className="order-2 flex flex-col items-center lg:order-3 ">
                <span className="my-2 text-2xl">Contact</span>
                <div className="flex h-full flex-col">
                  <LogoLink link="mailto:vivz753@gmail.com" label="vivz753@gmail.com" icon={Icon.MAIL} />
                  <LogoLink link="https://github.com/vivz753" label="github.com/vivz753" icon={Icon.GITHUB} />
                  <LogoLink
                    link="https://linkedin.com/in/vivz753"
                    label="linkedin.com/in/vivz753"
                    icon={Icon.LINKEDIN}
                  />
                </div>
              </div>
            </section>
          </div>
        </aside>
        <div className="flex w-full items-center justify-center px-8 lg:p-8">
          <section className="flex w-full max-w-[550px] flex-col lg:max-w-full">
            <Title>Experience</Title>
            {experience.map(({ title, organization, location, date, link }) => (
              <Job
                key={title + organization}
                title={title}
                organization={organization}
                location={location}
                date={date}
                link={link}
              />
            ))}
            <Title>Education</Title>
            {education.map(({ title, organization, location, date }) => (
              <Job
                key={title + organization}
                title={title}
                organization={organization}
                location={location}
                date={date}
              />
            ))}
            <Title>Leadership</Title>
            {leadership.map(({ title, organization, location, date }) => (
              <Job
                key={title + organization}
                title={title}
                organization={organization}
                location={location}
                date={date}
              />
            ))}
            <Title>Awards & Certifications</Title>
            {awardsCertifications.map(({ title, organization, location, date, link }) => (
              <Job
                key={title + organization}
                title={title}
                organization={organization}
                location={location}
                date={date}
                link={link}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}

export default CV

const Title: FC<React.PropsWithChildren> = ({ children }) => (
  <span className="py-4 text-center text-2xl lg:text-left">{children}</span>
)

const Job: FC<{ title: string; date: string; organization: string; location: string; link?: string }> = ({
  title,
  organization,
  location,
  date,
  link = "",
}) => (
  <ConditionalWrapper link={link}>
    <div className="flex flex-col py-2 lg:ml-8">
      <div className="grid lg:grid-cols-[1fr,_minmax(100px,140px)]">
        <span className={clsx("text-lg font-bold", link && "underline hover:text-pink-400")}>{title}</span>
        <span className="min-w-max text-sm uppercase text-stone-700 lg:pt-1.5 lg:text-right">{date}</span>
      </div>
      <span className="flex flex-col whitespace-pre text-lg lg:inline-flex lg:flex-row">
        <span>{organization}</span>
        <span className="hidden lg:flex">{location ? ` — ` : ``}</span>
        <span>{location}</span>
      </span>
    </div>
  </ConditionalWrapper>
)

const ConditionalWrapper: FC<React.PropsWithChildren<{ link: string }>> = ({ link, children }) =>
  link ? <Link href={link}>{children}</Link> : <div>{children}</div>
