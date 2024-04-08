import Head from "next/head"
import { useRouter } from "next/router"
import { FC } from "react"
// import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const Layout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Vivian Leung Web Dev</title>
        <meta name="description" content="Portfolio of Vivian Leung" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="min-h-screen relative flex w-full flex-col overflow-auto border border-red-500">
          <Navbar />
          {/* Page w/ content */}
          {children}
          {/* <Footer /> */}
        </div>
      </main>
    </>
  )
}