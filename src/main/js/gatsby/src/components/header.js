import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import p2pgif from "../images/p2pdance.gif"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `linear-gradient(teal,white)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 500,
        padding: `2vh`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <img src={p2pgif} alt="p2p-gif" />
        </Link>
      </h1>
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
