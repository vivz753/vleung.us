import { Icon } from "@types"
import clsx from "clsx"
import { FC } from "react"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const logoLinkHoverStyle = "group-hover:text-pink-400 text-pink-900"
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

export const Footer: FC = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-4 bg-pink-200 px-12 py-10 lg:flex-row lg:px-24">
      <LogoLink link="mailto:vivz753@gmail.com" label="" icon={Icon.MAIL} />
      <LogoLink link="https://github.com/vivz753" label="" icon={Icon.GITHUB} />
      <LogoLink link="https://linkedin.com/in/vivz753" label="" icon={Icon.LINKEDIN} />
    </footer>
  )
}
