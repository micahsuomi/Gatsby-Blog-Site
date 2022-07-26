import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import logo from "../../imgs/logo-brightmike.png"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"

import headerStyles from "./styles.module.scss"
import "./style.css"

const Header = ({ title, subtitle }) => {
  const [isToggled, setIsToggled] = useState(false)
  const [isPortraitsOpen, setPortraitsOpen] = useState(false)
  const [isPhotographyOpen, setPhotographyOpen] = useState(false)

  const toggleOnClick = () => {
    setIsToggled(!isToggled)
  }
  const toggle = e => {
    console.log(e)
    if (isToggled && e.keyCode === 27) {
      setIsToggled(false)
    } else {
      if (e.key === "Enter") {
        // console.log(e.key)
        // setIsToggled(false)
      }
    }
  }

  const openPortraitsOnClick = () => setPortraitsOpen(!isPortraitsOpen)

  const openPortraitsOnKeyDown = e => {
    if (e.keyCode === 13) {
      setPortraitsOpen(!isPortraitsOpen)
    }
  }
  const openPhotographyOnClick = () => setPhotographyOpen(!isPhotographyOpen)

  const openPhotographyOnKeyDown = e => {
    if (e.keyCode === 13) {
      setPhotographyOpen(!setPhotographyOpen)
    }
  }
  const closeDropdown = () => {
    setPhotographyOpen(false)
    setPortraitsOpen(false)
    setIsToggled(false)
  }

  return (
    <header>
      <div className={headerStyles.titleWrapper}>
        <Link to="/" className={headerStyles.title} onClick={closeDropdown}>
          <img
            src={logo}
            alt="michele zucca logo pic"
            className={headerStyles.logo}
          />
          <h2>{title}</h2>
          <p className={headerStyles.subtitle}>{subtitle}</p>
        </Link>
      </div>

      <div>
        <nav>
          <div className={headerStyles.toggleWrapper}>
            <button
              className={headerStyles.toggleBar}
              style={isToggled ? styleBorder : styleNoBorder}
              onClick={toggleOnClick}
              onKeyDown={e => toggle(e)}
            >
              <span
                className={isToggled ? "line top active" : "line top"}
              ></span>
              <span
                className={isToggled ? "line middle active" : "line middle"}
              ></span>
              <span
                className={isToggled ? "line bottom active" : "line bottom"}
              ></span>
            </button>
          </div>

          {isToggled && (
            <ul className={isToggled ? "nav-links open" : "nav-links"}>
              <li className={headerStyles.navListItem}>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/"
                  onClick={closeDropdown}
                >
                  Home
                </Link>
              </li>

              <li className={headerStyles.navListItem}>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/about"
                  onClick={closeDropdown}
                >
                  About
                </Link>
              </li>

              <button
                className={headerStyles.navListItem}
                onKeyDown={e => openPortraitsOnKeyDown(e)}
                onClick={openPortraitsOnClick}
              >
                Portraits
                {isPortraitsOpen ? (
                  <FaChevronUp
                    className={headerStyles.dropDownIcon}
                    aria-hidden="true"
                  />
                ) : (
                  <FaChevronDown
                    className={headerStyles.dropDownIcon}
                    aria-hidden="true"
                  />
                )}
              </button>

              <>
                <ul
                  className={
                    isPortraitsOpen
                      ? headerStyles.nestedNavList
                      : headerStyles.nestedNavListClose
                  }
                >
                  <li className={headerStyles.nestedListItem}>
                    <Link
                      className={headerStyles.navItemNested}
                      to="/helsinkifirstbatch"
                      onClick={closeDropdown}
                    >
                      Helsinki First Batch
                    </Link>
                  </li>
                  <li className={headerStyles.nestedListItem}>
                    <Link
                      className={headerStyles.navItemNested}
                      to="/helsinkisecondbatch"
                      onClick={closeDropdown}
                    >
                      Helsinki Second Batch
                    </Link>
                  </li>

                  <li className={headerStyles.nestedListItem}>
                    <Link
                      className={headerStyles.navItemNested}
                      to="/thelordandthenewcreatures"
                      onClick={closeDropdown}
                    >
                      The L. and N. C.
                    </Link>
                  </li>
                </ul>
              </>
              <li className={headerStyles.navListItem}>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/abstracts"
                  onClick={closeDropdown}
                >
                  Abstracts
                </Link>
              </li>

              <li className={headerStyles.navListItem}>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/digital"
                  onClick={closeDropdown}
                >
                  Digital
                </Link>
              </li>

              <button
                className={headerStyles.navListItem}
                onClick={openPhotographyOnClick}
                onKeyDown={e => openPhotographyOnKeyDown(e)}
              >
                Photography
                {isPhotographyOpen ? (
                  <FaChevronUp
                    className={headerStyles.dropDownIcon}
                    aria-hidden="true"
                  />
                ) : (
                  <FaChevronDown
                    className={headerStyles.dropDownIcon}
                    aria-hidden="true"
                  />
                )}
              </button>
              <ul
                className={
                  isPhotographyOpen
                    ? headerStyles.nestedNavList
                    : headerStyles.nestedNavListClose
                }
              >
                <li className={headerStyles.nestedListItem}>
                  <Link
                    className={headerStyles.navItemNested}
                    to="/allegories"
                    onClick={closeDropdown}
                  >
                    Allegories
                  </Link>
                </li>
                <li className={headerStyles.nestedListItem}>
                  <Link
                    className={headerStyles.navItemNested}
                    to="/playingwiththelightsofsydney"
                    onClick={closeDropdown}
                  >
                    Lights Of Sydney
                  </Link>
                </li>
                <li className={headerStyles.nestedListItem}>
                  <Link
                    className={headerStyles.navItemNested}
                    to="/whiletraveling"
                    onClick={closeDropdown}
                  >
                    While Travelling
                  </Link>
                </li>
              </ul>

              <li className={headerStyles.navListItem}>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  partiallyActive={true}
                  to="/blog"
                  onClick={closeDropdown}
                >
                  Blog
                </Link>
              </li>

              <li className={headerStyles.navListItem}>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/contact"
                  onClick={closeDropdown}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  )
}

const styleBorder = {
  border: "2px solid rgb(53, 36, 46)",
  borderRadius: "500px",
  justifyContent: "center",
  //  transition: "0.1s ease-in-out",
  // transition: "transform 0.2s ease-out",
  // transitionDelay: ".25s"
}
const styleNoBorder = { border: "none" }

export default Header
