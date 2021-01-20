import React from "react";
import MyLayout from "../layout/MyLayout";
import SEO from "../layout/seo";
import { Splash } from "../components/Splash/splash";

function IndexPage() {
  return (
    <MyLayout>
      <SEO
        keywords={[`vivian leung`, `vivian`]}
        title="Home"
      />
      <Splash />
    </MyLayout>
  );
}

export default IndexPage;
