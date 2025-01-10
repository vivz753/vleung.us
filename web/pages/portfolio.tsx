import { NextPage } from "next"
import { FC } from "react"
const Portfolio: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pt-24">
      {/* ART */}
      {/* Insert art store items, finished paintings */}
      {/* Idea: use Sanity.io to manage image content */}
      {/* <div className="flex h-full w-full flex-col items-center bg-pink-900 px-8 py-24 text-pink-200 lg:px-16">
        <div className="py-2 text-4xl font-medium">Art</div>
      </div> */}
      {/* E-COMMERCE */}
      <div className="flex h-full w-full flex-col items-center bg-blue-900 px-8 py-24 text-blue-200 lg:px-16">
        <div className="py-2 text-4xl font-medium">E-Commerce</div>
        <div className="my-8 h-[1px] w-full rounded-3xl border-2 border-blue-500" />
        <div className="flex flex-col items-center justify-evenly py-8 lg:flex-row">
          <div className="min-w-max py-4 text-2xl font-medium lg:px-40">Art store</div>
          <div className="font-regular text-center text-base leading-relaxed lg:text-left">
            {`A fully functional, custom web store built using Typescript / Next.js / Stripe. This is mainly a personal
            project that I have worked on for about a year, from 2023 to 2024, mainly to challenge myself as a software
            developer / designer and also to create something practical—a platform for people to purchase the quirky
            art created by me and my friends.`}
          </div>
        </div>
        <div className="flex w-full justify-center gap-24 lg:flex-row">
          <div className="flex w-full shrink-0 flex-col lg:w-[350px]">
            <div className="my-8 hidden text-xl font-medium lg:flex">Mobile</div>
            {/* Add a drop down for screen types */}
            <div className="relative my-8 h-[85vh] max-h-[85vh] min-h-[650px] overflow-hidden rounded-lg bg-white lg:my-0">
              <iframe
                title={"title"}
                width="100%"
                height="100%"
                src={"https://carrotsandhummus.vercel.app/shoppe"}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="hidden w-full flex-col justify-center lg:flex 2xl:w-[1280px]">
            <div className="my-8 text-xl font-medium">Desktop</div>
            <div className="relative h-[85vh] overflow-hidden rounded-lg bg-white xl:w-full 2xl:w-[1280px]">
              <iframe
                title={"title"}
                width="100%"
                height="100%"
                src={"https://carrotsandhummus.vercel.app/shoppe"}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
      {/* MATERIALS DESIGNER */}
      <div className="flex h-full w-full flex-col items-center bg-orange-900 px-8 py-24 text-orange-200 lg:px-16">
        <div className="py-2 text-4xl font-medium">IDE / Visualizer</div>
        <div className="my-8 h-[1px] w-full rounded-3xl border-2 border-orange-500" />
        <div className="flex flex-col items-center justify-evenly py-8 lg:flex-row">
          <div className="min-w-max py-4 text-2xl font-medium lg:px-40">Materials Designer</div>
          <div className="font-regular text-center text-base leading-relaxed lg:text-left">
            {`This is a mock app I built for a job interview. The company asked interviewees to create a single-page application which can render atoms in a 3D space. The arrangement of atoms in a crystal, or crystal lattice, can be scientifically analyzed to determine its properties, strengths, and weaknesses. In practice, this tool would help make informed decisions about which materials would be most suitable for an industrial product.`}
          </div>
        </div>
        <div className="flex w-full justify-center gap-24 lg:flex-row">
          <div className="flex w-full shrink-0 flex-col lg:w-[350px]">
            <div className="my-8 hidden text-xl font-medium lg:flex">Mobile</div>
            {/* Add a drop down for screen types */}
            <div className="relative my-8 h-[85vh] max-h-[85vh] min-h-[650px] overflow-hidden rounded-lg bg-white lg:my-0">
              <iframe
                title={"title"}
                width="100%"
                height="100%"
                src={"https://materials-designer.vercel.app/"}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="hidden w-full flex-col justify-center lg:flex 2xl:w-[1280px]">
            <div className="my-8 text-xl font-medium">Desktop</div>
            <div className="relative h-[85vh] overflow-hidden rounded-lg bg-white xl:w-full 2xl:w-[1280px]">
              <iframe
                title={"title"}
                width="100%"
                height="100%"
                src={"https://materials-designer.vercel.app/"}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
      {/* COMPUTER GRAPHICS */}
      <div className="flex h-full min-h-screen w-full flex-col items-center bg-green-900 px-8 py-24 text-green-200 lg:px-16">
        <div className="py-2 text-4xl font-medium">Computer Graphics</div>
        <div className="my-8 h-[1px] w-full rounded-3xl border-2 border-green-500" />
        <div className="flex flex-col items-center justify-evenly py-8 lg:flex-row">
          <div className="min-w-max py-4 text-2xl font-medium lg:px-40">2D/3D Simulations</div>
          <div className="font-regular text-center text-base leading-relaxed lg:text-left">
            {`Math exists in everything. These worlds are created by keeping track of every single point in 3D and 2D
            space. Camera view angles and perspectives are calculated using matrix multiplication and fundamental
            concepts of linear algebra. Basically, everything we see and know to exist can be broken down into formulas
            and lists of data points. Fun fact: the 3D model of the Notre Dame Cathedral in the video game Assassin's
            Creed was used to help reconstruct the real one in Paris after it was burned down.`}
          </div>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
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
        </div>
      </div>
    </div>
  )
}

export default Portfolio

const VideoCard: FC<{ title: string; src: string; description: string }> = ({ title, src, description }) => (
  <div className="flex w-full flex-col md:w-1/3">
    <div className="relative my-8 h-[180px] overflow-hidden rounded-lg lg:h-[240px] 2xl:h-[360px]">
      <iframe
        title={title}
        width="100%"
        height="100%"
        src={src}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <div className="py-2 text-xl font-medium">{title}</div>
    <div className="font-regular text-base leading-relaxed">{description}</div>
  </div>
)
