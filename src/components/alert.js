import React from 'react';

const Alert = ({ message, type, hide} ) => {

  return (
    <div className={`alert alert-${type}`} role="alert" hide={hide}>
      { message }
      {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button> */}
    </div>
  )
}