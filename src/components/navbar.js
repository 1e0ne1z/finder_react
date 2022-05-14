import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useEffect, useState } from "react"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle, uAuth }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">{siteTitle}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
                aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          {uAuth ? (        
          <>
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
                <ExactNavLink
                  to="/profile"
                >
                  Profile
                </ExactNavLink>
              </li>
            </ul>
            <div className="d-flex">
              <a className="btn btn-secondary" href="/logout">Logout</a>
            </div>
          </>
        ) : (
          <>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
          </ul>
          <div className="d-flex">
              <a className="btn btn-light ms-3" href="/login">Login</a>
            </div>
          </>
        )}
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
