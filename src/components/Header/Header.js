import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import headerStyles from './Header.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false
    };
  }
  toggleNav = () => {
    this.setState({
      showNav: !this.state.showNav
    });
  };

  render() {
    const { showNav } = this.state;
    return (
      <header className={headerStyles.header}>
        <div>
          <Link className={headerStyles.logo__link} to="/">
            {this.props.siteTitle}
          </Link>
        </div>
        <div className={headerStyles.toggle} onClick={this.toggleNav}>
          &#9776;
        </div>

        <nav className={headerStyles.nav}>
          {showNav && (
            <ul className={headerStyles.nav__mobile}>
              <li className={headerStyles.nav__item}>
                <Link to="/" className={headerStyles.nav__link}>
                  home
                </Link>
              </li>
              <li className={headerStyles.nav__item}>
                <Link to="/Blog" className={headerStyles.nav__link}>
                  blog
                </Link>
              </li>
              <li className={headerStyles.nav__item}>
                <Link to="/Portfolio" className={headerStyles.nav__link}>
                  portfolio
                </Link>
              </li>
            </ul>
          )}
          <div className={headerStyles.nav__desktop}>
            <Link to="/" className={headerStyles.nav__link}>
              home
            </Link>
            <Link to="/Blog" className={headerStyles.nav__link}>
              blog
            </Link>
            <Link to="/Portfolio" className={headerStyles.nav__link}>
              portfolio
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
