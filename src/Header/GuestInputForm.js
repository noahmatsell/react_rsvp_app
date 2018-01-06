import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = props =>
  <form onSubmit={props.newGuestSubmitHander}>
  <input 
    onChange={props.handleNameInput}
    type="text" 
    value={props.pendingGuest}
    placeholder="Invite Someone" />
  <button type="submit" name="submit" value="submit">Submit</button>
</form>

GuestInputForm.protoTypes = {
  newGuestSubmitHander: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired,
};

export default GuestInputForm;