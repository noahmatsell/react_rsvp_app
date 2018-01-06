import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

const Header = props =>
  <header>
  <h1>RSVP</h1>
  <p>A Treehouse App</p>
  <GuestInputForm 
    newGuestSubmitHander={props.newGuestSubmitHander}
    pendingGuest={props.pendingGuest}
    handleNameInput={props.handleNameInput}
  />
  </header>

Header.propTypes = {
  newGuestSubmitHander: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired,
}

export default Header;