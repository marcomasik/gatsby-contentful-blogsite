import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/miles_logo.svg"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header__wrapper">
      <div className="header__wrapper__logo-container">
        <Link to ="/">
          {/*{siteTitle}*/}
          <img src={Logo} alt="Logo"/>
        </Link>
      </div>
      <div className="header__wrapper__navigation-container">
        <div>Hol dir die App</div>
        <div>Preise</div>
        <div>So geht´s</div>
        <div>Cities</div>
        <div>FAQ</div>
        <div>For Business</div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
