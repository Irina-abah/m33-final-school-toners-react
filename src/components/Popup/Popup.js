import React from 'react';
import "./Popup.css";

const Popup = ({onClose, isSuccess, item, onUpdateQuantity}) => {

  const SUCCESS_MESSAGE = "Quantity of toners has been updated";
  const FAILED_MESSAGE = "Something went wrong, try again";
  
  const [quantity, setQuantity] = React.useState('');

  function handleQuantityChange(evt) {
    setQuantity(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateQuantity(item.id, {
        quantity: quantity,
      });
      console.log(item.id)
  }

  function handleClick(evt) {
    onClose();
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
      <>
        <div className="popup" onMouseDown={handleClick}></div>
        <div className="popup__container">
          <button type="button" className="button button_type_close" onClick={onClose} aria-label="close"> 
          </button>
          <h3>Update quantity of selected toner</h3>
          <p className="infoitem">Toner name: <span>{item.toner_name}</span></p>
          <p className="infoitem">Toner colour: {item.colour}</p>
          <form className="popup__input-container" name="quantity" onSubmit={handleSubmit}>
            <div className="quantity__container">
              <label className="quantity__lable" htmlFor="quantity">Enter new quantity</label>
              <input 
                type="number" 
                className="popup__input" 
                id="quantity"
                name="quantity"
                value={quantity || ""} 
                onChange={handleQuantityChange}
                placeholder="New quantity"
                min="1" 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="button button_type_confirm">
              Confirm
            </button>
          </form>
          {isSuccess && <h2 className="popup__title">{isSuccess ? SUCCESS_MESSAGE : FAILED_MESSAGE}</h2>}
        </div>
      </>
    )
};

export default Popup;