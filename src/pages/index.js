import React from "react";
import MyLayout from "../layout/MyLayout";
import SEO from "../layout/seo";
import { Splash } from "../components/Splash/splash";
import Splash2 from "../components/Splash2";

function IndexPage() {
  return (
    <MyLayout>
      <SEO
        keywords={[`vleung.us`, `vivian leung`, `vivian`]}
        title="vleung.us"
      />
      <Splash2 />
    </MyLayout>
  );
}

export default IndexPage;
