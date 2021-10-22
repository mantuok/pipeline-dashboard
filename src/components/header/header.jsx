import React from 'react';

const Header = () => {
  return (
    <header className="page__header header">
      <img className="header__logo" src="../img/logo.png" width="60" height="60" alt="Pipeline Dashboard" />
      <span className="header__title">Eagle Eye Platform</span>
    </header>
  )
};

export default Header;