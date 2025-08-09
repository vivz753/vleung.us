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
    <Link href={href} className={clsx(`text-xl text-pink-900 hover:text-pink-500`)}>
      {text}
    </Link>
  )
}

export const Navbar: FC = () => {
  return (
    <nav className="absolute flex w-full flex-row items-center gap-8 bg-pink-200 px-12 py-10 lg:gap-16 lg:px-24">
      {/* Title */}
      <ColorLink href="/" text="vleung" />
      {/* Menu */}
      <div className="flex w-full flex-row items-center gap-8">
        <ColorLink href="/cv/" text="CV" />
        <ColorLink href="/portfolio/" text="Portfolio" />
      </div>

      {/* Time */}
      <div className="mt-3 hidden flex-row whitespace-pre text-xs text-pink-900 sm:flex">
        <Clock format={"dddd, MMMM Mo, YYYY, h:mm:ss a"} ticking={true} timezone={"US/Pacific"} />
        <span>{` (PST)`}</span>
      </div>
    </nav>
  )
}
