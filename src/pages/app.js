import React, { useEffect } from "react";
import { Router } from "@reach/router";
import MyLayout from "../layout/MyLayout";
import SEO from "../layout/seo";
import { GlobalState } from "../hooks/useGlobalState"
import Splash2 from "../components/organisms/Splash2";
import CV from "../components/organisms/CV"
import Portfolio from "../components/organisms/Portfolio"
import Hidden from "../components/organisms/Hidden"

function App() {

  return (
    <GlobalState>
      <MyLayout>
        <SEO
          keywords={[`vleung.us`, `vivian leung`]}
          title="vleung.us"
        />
        <Router basepath="/app">
          <Splash2 path="/"/>
          <CV path="/cv"/>
          <Hidden path="/hidden"/>
          <Portfolio path="/portfolio"/>
        </Router>
      </MyLayout>
    </GlobalState>
  )
}

export default App;