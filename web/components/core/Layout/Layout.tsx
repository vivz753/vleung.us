import Head from "next/head"
import { FC } from "react"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const Layout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>vleung.us</title>
        <meta name="description" content="Portfolio of Vivian Leung" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative flex w-full flex-col ">
          <Navbar />
          {/* Page w/ content */}
          <div className="flex h-full min-h-screen">{children}</div>
          <Footer />
        </div>
      </main>
    </>
  )
}
