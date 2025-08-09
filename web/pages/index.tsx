import Image from "next/image"

export default function Home() {
  return (
    <div className="flex h-full min-h-screen w-full items-center items-center justify-center px-8 pt-[108px]">
      <div className="flex flex-col items-center gap-12 lg:flex-row">
        <div className="relative mb-2 h-48 w-48 shrink-0 overflow-clip rounded-full">
          <Image
            alt="Profile picture of Vivian with her cat, Mimi"
            src="/images/me-mimi-profile.png"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="max-w-2/5 flex h-max whitespace-pre-line rounded-md border border-stone-900 p-6 lg:max-w-[500px]">
          <span>
            {`Hello! My name is Vivian Leung and I'm a web developer. 
          
          I graduated from San Jose State University in 2019 with a B.S. in Software Engineering. On my free time, I teach workshops in drawing and painting, play video games, make music with my bass guitar and piano, and play with my cat Mimi, who is the inspiration for look and feel of this website.
        
        You can find my CV and Portfolio above, and my contact in the bottom left corner.`}
          </span>
        </div>
      </div>
    </div>
  )
}
