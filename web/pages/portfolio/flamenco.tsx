import { NextPage } from "next"
import Link from "next/link"

const Flamenco: NextPage = () => {
  return (
    <div className="flex h-full min-h-screen w-full justify-center pt-[112px]">
      <div className="flex w-full max-w-[1024px] flex-col gap-8 px-6 py-8">
        <span className="text-4xl">Open-source development on Flamenco @ Blender</span>
        <div className="flex flex-col gap-2">
          <span className="text-xl">Role: designer, frontend, backend, project management</span>
          <span className="text-xl">Tools: Vue.js, Go, Make, OpenAPI, Swagger, Git</span>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Google Summer of Code 2025:</h3>
          <li className="hover:text-pink-400 hover:underline">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/146--unkr5YtfjCHBzau-T6HwR5e7sR8G2mk4bo27k4g/edit?usp=sharing"
            >
              Project Proposal
            </Link>
          </li>
          <li className="hover:text-pink-400 hover:underline">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/1SDxfW2mo8HpzuvdoUvcH4O3iErP8SE9g2s4bwZIKmxc/edit?usp=sharing"
            >
              Final Submission
            </Link>
          </li>
          <li className="hover:text-pink-400 hover:underline">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://devtalk.blender.org/t/gsoc-2025-adding-handy-features-and-ui-improvements-to-flamenco/40723"
            >
              Blender Forum Weekly Updates
            </Link>
          </li>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Overview</h3>
          <p>
            Flamenco is the open-source render farm web application created by the Blender Foundation. The primary goal
            of this project was to implement a settings page to make it easy for users to configure the Flamenco
            Manager. The secondary goal was to implement UI fixes and enhancements to improve the overall user
            experience with the web application. I contributed a total of 20+ pull requests to Flamenco which included
            fixing bugs, refactoring code and implementing the following features:
          </p>
          <li>Settings page</li>
          <li>Multi-select of jobs, tasks, workers</li>
          <li>Mass-selection of jobs by timestamp</li>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Design</h3>
          <p>
            Because Flamenco has over 20 customizable settings, I decided on a minimalistic form and divided the amount
            of settings into five manageable categories: Core Settings, Timeout & Failures, Storage, MQTT, and
            Variables.
          </p>
          <div className="my-4 flex flex-col items-center lg:my-12 lg:gap-4">
            <div className="h-[250px] w-full bg-[url(/images/flamenco-core-settings.png)] bg-contain bg-center bg-no-repeat lg:h-[560px]"></div>
            <Link
              className="hover:text-pink-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.figma.com/design/RHefk3EJ6H75668g4mSO13/GSoC-Flamenco-YAML-Config-Editor?node-id=0-1&t=dCLQ05qV5GRlc657-1"
            >
              View the full mockup on Figma
            </Link>
          </div>
          <p>
            I decided on a side dialog and a subheader that scrolls along with the user’s screen, making it easy to
            access essential functions regardless of whether the user is at the top, middle, or bottom of the form. The
            side dialog provides a brief description about the page, along with a description explaining what each
            setting does. The description for each setting is dynamically rendered based on which input the user is
            currently focused on, minimizing clutter and only showing what’s necessary based on where the user is
            clicking. By keeping the descriptions in the sidebar, text is minimized on the form, keeping it clean and
            making it easy for users to scan through. The subheader acts as a navigation bar specific to this page,
            making it easy for users to jump to a specific section of the form. The subheader also contains the Save
            button, so that users can conveniently save their changes regardless of what scroll position they are at.
            Despite the fact that there are a lot of settings to tinker with, the sticky elements make it easy for users
            to jump around the form and find additional info without adding to the length of the page, minimizing the
            amount of time a user spends scrolling up and down a page.
          </p>
          <div className="my-8 flex flex-col items-center gap-4 lg:my-12">
            <div className="h-[200px] w-full bg-[url(/images/flamenco-variables-mockup.png)] bg-contain bg-center bg-no-repeat lg:h-[360px]"></div>
            <p>Mockup of Variables</p>
          </div>
          <p>
            The Variables section was unique in that the user could dynamically add variables, and have multiple
            configurations for each variable. Several iterations revealed that more attributes were required, like the
            audience. Users should be able to add/delete variables, and also add/edit/delete various configurations for
            each variable.
          </p>
          <div className="my-4 flex flex-col items-center gap-4 lg:my-12">
            <div className="h-[250px] w-full bg-[url(/images/flamenco-variables-initial.png)] bg-contain bg-center bg-no-repeat lg:h-[460px]"></div>
            <p>Initial implementation of Variables</p>
          </div>
          <div className="my-4 flex flex-col items-center gap-4 lg:my-12">
            <div className="h-[300px] w-full bg-[url(/images/flamenco-variables-final.png)] bg-contain bg-center bg-no-repeat lg:h-[560px]"></div>
            <p>Final implementation of Variables</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Mentorship</h3>
          <span>
            Under the Google Summer of Code 2025 program, I received mentorship from Sybren Stuvel at the Blender
            Foundation. Despite the 12 hour time difference (I was in California, USA and Sybren was in Amsterdam,
            Netherlands), we had weekly meetings to discuss updates, timeline, and any blockers. I worked in 1-2 week
            sprints, submitted pull requests, made changes accordingly after reviews, and repeated this until the code
            was finally merged into main.
          </span>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Takeaways</h3>
          <span>
            As a front-end engineer, the main challenges of this project revolved around understanding the back-end code
            and how to make the most out of my development tools. Writing unit tests, API calls, and handling structs in
            Go was difficult at first but opened my eyes to new ways of thinking. While gaining experience in new tools
            and a new language, I also received exposure with best practices in testing, API’s, and low-level code. I
            learned how to run tests using make and VSCode, how to use cURL and Postman to test API endpoints, and how
            to utilize Swagger documentation and OpenAPI to manage and auto generate API code. I frequently referred to
            developer docs to better understand various go packages, including how to marshal/unmarshal with
            encoding/json, how to handle HTTP requests and responses with echo, and how to format durations with time. I
            developed proficiency with error handling and learned about the data types Go has to offer. Overall, I
            gained valuable knowledge in the realm of Go, testing, and API’s.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Flamenco
