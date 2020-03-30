import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="add-task">
        <h1 className="app-title">Todos App</h1>
      </header>
    );
  }
}

export default Header;
