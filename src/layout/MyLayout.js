import PropTypes from "prop-types";
import React from "react";
import Footer from "./MyFooter"
import Header from "./MyHeader";

function MyLayout({ children }) {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <Header className="z-30"/>
      <main>
        {children}
      </main>
      <Footer className="z-30"/>
    </div>
  );
}

MyLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyLayout;
