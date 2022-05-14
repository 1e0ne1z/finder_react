import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("tk") !== null){
      setAuth(true);
    } 
  }, [])

  return (
    <Layout>
      <Seo title="Home" />
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{}</h1>
            <p className="lead text-muted"> Welcome to HR App</p>
            <StaticImage
              src="../images/gatsby-astronaut.png"
              width={300}
              quality={95}
              formats={["AUTO", "WEBP"]}
              alt="A Gatsby astronaut"
              className="img-fluid"
            />

          </div>
        </div>
        {!auth && 
          <div className="row">
            <Link to="/login" className="btn btn-primary my-2">Login</Link>
            <Link to="/signup" className="btn btn-secondary my-2">Sign Up</Link>
          </div>
        }
      </section>
    </Layout>
  )
}

export default IndexPage
