import { NextPage } from "next"
import Image from "next/image"

const Mimi: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-pink-200 px-8 pt-28 lg:px-24">
      <div className="flex flex-col gap-8">
        <div className="text-3xl text-pink-500">mimi, the tuxedo cat</div>
        <div className="text-sm text-pink-500">birth date: 4/23/2023</div>
        <div className="text-sm text-pink-500">contact: 1-916-833-8138</div>
        <div className="relative h-[500px] w-[400px] overflow-hidden rounded-3xl border-4 border-white">
          <Image alt="portrait" src="/images/me-mimi.jpg" style={{ objectFit: "contain" }} width={400} height={500} />
        </div>
      </div>
    </div>
  )
}
export default Mimi
