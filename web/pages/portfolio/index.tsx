import { NextPage } from "next"
import Link from "next/link"

const Portfolio: NextPage = () => {
  return (
    <div className="flex h-full min-h-screen w-full pt-[112px]">
      <div className="flex w-full justify-center p-8">
        <div className="flex w-full max-w-[1280px] flex-1 flex-col">
          <Link href="/portfolio/flamenco" className="group flex flex-col gap-4">
            <div className="drop-shadow-pink-300 h-[180px] w-full rounded-2xl bg-[url(/images/flamenco.webp)] bg-cover bg-top bg-no-repeat outline-pink-100 saturate-[.8] transition group-hover:outline group-hover:drop-shadow-xl group-hover:saturate-[1] lg:h-[360px]"></div>
            <label className="cursor-pointer text-xl font-semibold group-hover:text-pink-400">
              Open-source development on Flamenco @ Blender
            </label>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
