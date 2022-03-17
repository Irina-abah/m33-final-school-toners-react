import React from 'react';
import "./Popup.css";

const Popup = ({isOpen, onClose, isSuccess}) => {

  const SUCCESS_MESSAGE = "Quantity of toners has been updated";
  const FAILED_MESSAGE = "Something went wrong, try again";

  function handleClick(evt) {
    onClose()
  }

  React.useEffect(() => {
  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      console.log(evt.target)
      onClose();
    }
  }
  document.addEventListener('keydown', handleEscClose);
  return () => {
  document.removeEventListener('keydown', handleEscClose);
  }
  }, [onClose]);

    return (
      <div className={`popup ${isOpen ? "popup_opened" : ""}`} onMouseDown={onClose}>
      <div className="popup__container">
          <button type="button" className="button button_type_close" onClick={handleClick} aria-label="close"> 
          </button>
          <div className="popup__info">
            <h2 className="popup__title">{isSuccess ? SUCCESS_MESSAGE : FAILED_MESSAGE}</h2>
          </div>
      </div>
  </div> 
    )
};

export default Popup;