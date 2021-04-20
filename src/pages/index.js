import React, { useEffect } from "react";
import { navigate } from "gatsby-link";
import { FaCompactDisc } from "react-icons/fa"

function IndexPage() {
  useEffect(() => {
    navigate("/app")
  })

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin">
        <FaCompactDisc className="animate-spin w-16 h-16 text-blue-500"/>
      </div>
    </div>
  );
}

export default IndexPage;
