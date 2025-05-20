import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faLinkedin, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import MenuBar from './MenuBar';
import masLogo1 from '../images/mas-logo1.png'; 

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: '#home',
      searchText: '', // State to hold the search text
      isNavbarVisible: true,
    };
    this.isNavbarVisible = true; // Mirror the value for external read
  }

  componentDidMount() {
    // Also sync the initial value to parent once
    this.props.setNavbarVisible(this.state.isNavbarVisible);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isNavbarVisible !== this.state.isNavbarVisible) {
      this.props.setNavbarVisible(this.state.isNavbarVisible);
    }
  }
  

  handleLinkClick = (link, isDesktop) => {
    !isDesktop && this.setIsNavbarVisible(false);
    this.setState({ activeLink: link });

    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  handleSearchChange = (event) => {
    this.setState({ searchText: event.target.value });
  };

  handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const { searchText } = this.state;
    console.log('Search text submitted:', searchText); // Log the search text

    if (searchText) {
      // Remove previous highlights
      this.removeHighlights();

      // Get all text nodes in the body
      const bodyTextNodes = document.evaluate(
        "//text()",
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
      );

      console.log('Text nodes found:', bodyTextNodes.snapshotLength); // Log the number of text nodes

      let found = false;

      // Loop through all text nodes to find the search text
      for (let i = 0; i < bodyTextNodes.snapshotLength; i++) {
        const node = bodyTextNodes.snapshotItem(i);
        const text = node.nodeValue;

        // Check if the search text exists in the current text node
        const index = text.toLowerCase().indexOf(searchText.toLowerCase());
        if (index !== -1) {
          found = true;

          const range = document.createRange();
          range.setStart(node, index);
          range.setEnd(node, index + searchText.length);

          // Highlight the selected text
          this.highlightText(range);

          // Scroll to the selected text
          const rect = range.getBoundingClientRect();
          window.scrollTo({
            top: rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2,
            behavior: 'smooth',
          });

          break; // Exit the loop once we found the text
        }
      }

      // If not found, clear selection
      if (!found) {
        alert("Text not found!");
      }
    } else {
      alert("Please enter a search term!"); // Alert if the search text is empty
    }
  };

  removeHighlights = () => {
    const highlighted = document.querySelectorAll('.highlight');
    highlighted.forEach((el) => {
      el.classList.remove('highlight');
    });
  };

  highlightText = (range) => {
    const span = document.createElement('span');
    span.className = 'highlight';
    range.surroundContents(span);
  };

  setIsNavbarVisible = (value) => {
    this.setState({ ...this.state, isNavbarVisible: value });
  }  

  render() {
    const { activeLink, searchText } = this.state;

    return (
      <header id="nav" className="header-background">
        <div className="header-wrapper">
          <div>
            <div className="">
            <div className="header-top-row">
              {/* Company Logo */}
              <Link className="header-logo" to="/">
                <img src={masLogo1} alt="Company Logo" className='header-logo-image' />
              </Link>

              {/* Slogan */}
              <div className="widescreen slogan-wrapper">
                <div className="slogan">The Art of Engineering Brilliance</div>
              </div>

              {/* Social Media Icons */}
              <div className="widescreen">
                <a href="https://wa.me/+923335550788?text=Hello!%20I%27d%20like%20to%20inquire%20about%20your%20services." target='_blank' rel="noreferrer" style={{ color: '#25D366', fontSize: '1.5rem' }}>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="https://www.instagram.com/masengineering21?igsh=NDVveWVnY3R0bWdy" target='_blank' rel="noreferrer" style={{ color: '#C13584', fontSize: '1.5rem' }}>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com" target='_blank' rel="noreferrer" style={{ color: '#0A66C2', fontSize: '1.5rem' }}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.facebook.com" target='_blank' rel="noreferrer" style={{ color: '#1877F2', fontSize: '1.5rem' }}>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://youtube.com/@masengineeringsol?si=8I0IY6BBA_ERiAk0" target='_blank' rel="noreferrer" style={{ color: '#FF0000', fontSize: '1.5rem' }}>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <Menu setIsNavbarVisible={this.setIsNavbarVisible} isNavbarVisible={this.state.isNavbarVisible} />
            </div>
          </div>
        </div>

        <MenuBar 
          handleSearchSubmit={this.handleSearchSubmit} 
          searchText={searchText}
          handleSearchChange={this.handleSearchChange}
          handleLinkClick={this.handleLinkClick}
          setIsNavbarVisible={this.setIsNavbarVisible}
          isNavbarVisible={this.state.isNavbarVisible}
        />

        {/* Style for highlighted text */}
        <style>{`
          .highlight {
            background-color: yellow;
          }
        `}</style>
        </div>
      </header>
    );
  }
}

export default Navbar;
