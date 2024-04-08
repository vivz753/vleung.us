import clsx from "clsx"
import Link from "next/link"
import { FC } from "react"
import Clock from "react-live-clock"

const hexColor = (color: string) =>
  color === "pink"
    ? "#ed64a6"
    : color === "purple"
    ? "#9f7aea"
    : color === "blue"
    ? "#4299e1"
    : color === "green"
    ? "#48bb78"
    : color === "yellow"
    ? "#ecc94b"
    : color === "orange"
    ? "#ed8936"
    : color === "red"
    ? "#f56565"
    : "#cbd5e0"

export const ColorLink: FC<{ text: string; href: string }> = ({ text, href }) => {
  return (
    <Link href={href} className={clsx(`hover:text-pink-500`)}>
      {text}
    </Link>
  )
}

export const Navbar: FC = () => {
  return (
    <div className="absolute bg-pink-100 flex w-full flex-row items-center gap-24 py-10 px-24">
      {/* Title */}
      <ColorLink href="/" text="vleung" />

      {/* Menu */}
      <div className="flex w-full flex-row items-center gap-24">
        <ColorLink href="/cv/" text="CV" />
        <ColorLink href="/portfolio/" text="Portfolio" />
      </div>

      {/* Time */}
      <p className="mt-3 text-xs md:m-4 md:ml-auto">
        {/* <Clock format={"h:mm:ss a "} ticking={true} timezone={"US/Pacific"} /> PST */}
      </p>
    </div>
  )
}