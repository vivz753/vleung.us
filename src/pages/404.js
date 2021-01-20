import React from "react";
import MyLayout from "../layout/MyLayout";
import SEO from "../layout/seo";

function NotFoundPage() {
  return (
    <MyLayout>
      <SEO title="404: Not found" />
      <div>
       Page not found :(
      </div>
    </MyLayout>
  );
}

export default NotFoundPage;
