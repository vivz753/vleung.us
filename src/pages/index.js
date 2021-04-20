import React, { useEffect } from "react";
import MyLayout from "../layout/MyLayout";
import SEO from "../layout/seo";
import { Splash } from "../components/organisms/Splash/splash";
import Splash2 from "../components/organisms/Splash2";
import { GlobalState } from "../hooks/useGlobalState"
import { navigate } from "gatsby-link";


function IndexPage() {
  useEffect(() => {
    navigate("/app")
  })
  
  return (
    <GlobalState>
      <MyLayout>
        <SEO
          keywords={[`vleung.us`, `vivian leung`, `vivian`]}
          title="vleung.us"
          />
        <Splash2 />
      </MyLayout>
    </GlobalState>
  );
}

export default IndexPage;
