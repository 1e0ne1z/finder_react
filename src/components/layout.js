import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import React, { useState, useEffect } from "react";

import Navbar from "./navbar"
import "./layout.scss"

const Layout = ({ children }) => {

  const [uAuth, setAuth] = useState(false);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const fetchUser = () => {
    console.log('authenticated!')
    setAuth(true);
  };

  useEffect(() => {
    if(localStorage.getItem("tk") !== null){
      fetchUser();
    }
}, [] );

  return (
    <div className="container-fluid p-0">
      <Navbar siteTitle={`HR App`} uAuth={uAuth} />
      <main >
        <main>{children}</main>
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
