import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from "@mui/material";
import { useEffect, useState, useRef } from "react";

const MenuBar = (props) => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const [isMediaSubMenusVisible, setMediaSubMenusVisible] = useState(false);
  const navRef = useRef(null); // Ref for the nav element
  const dropdownRef = useRef(null); // Ref for the dropdown

  useEffect(() => {
    if (isDesktop) {
      props.setIsNavbarVisible(true);
    }
  }, [isDesktop]);

  useEffect(() => {
    isDesktop 
      ? props.setIsNavbarVisible(true)
      : props.setIsNavbarVisible(false);
  }, []);

  const resetStates = () => {
    props.handleLinkClick('#nav', isDesktop);
    setMediaSubMenusVisible(false);
  };

  // Handle click outside to hide dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setMediaSubMenusVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="" ref={navRef}>
      <div style={{ display: props.isNavbarVisible ? "block" : "none" }} className="fade-in">
        <div className="header-bottom-row" id="navbarNav" style={{ marginLeft: "auto" }}>
          <ul className="nav-menu-list">
            {["home", "about", "services", "clients", "suppliers", "contact"].map((section) => (
              <li className="nav-item" key={section}>
                <a
                  className="nav-link"
                  href={`/#${section}`}
                  onClick={() => props.handleLinkClick(`#${section}`, isDesktop)}
                >
                  {section === "about" || section === "contact"
                    ? `${section.charAt(0).toUpperCase() + section.slice(1)} Us`
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}

            {/* Media Gallery Dropdown */}
            <li className="nav-item" ref={dropdownRef}>
              <span
                className=""
                href="#"
                id="mediaGalleryDropdown"
                onClick={() => setMediaSubMenusVisible(!isMediaSubMenusVisible)}
              >
                Media Gallery
              </span>
              <ul
                className="sub-menu fade-in"
                style={{ display: isMediaSubMenusVisible ? "block" : "none" }}
              >
                <li>
                  <Link to="/photos" onClick={resetStates}>
                    Photos
                  </Link>
                </li>
                <li>
                  <Link to="/videos" onClick={resetStates}>
                    Videos
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Search Box */}
          <form className="d-flex ms-3" onSubmit={props.handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={props.searchText}
              onChange={props.handleSearchChange}
            />
            <button className="btn btn-outline-success" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;