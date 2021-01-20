import PropTypes from "prop-types";
import React from "react";
import Footer from "./MyFooter"
import Header from "./MyHeader";

function MyLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        {children}
      </main>
      
      <Footer/>
    </div>
  );
}

MyLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyLayout;
