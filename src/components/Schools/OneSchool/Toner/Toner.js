import "./Toner.css";
import React from "react";
import Popup from "../../../Popup/Popup";

const Toner = ({ toner, onChangeQuantity, isSuccess, setIsSuccess}) => {

  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(true)
  }

  const handleCloseClick = () => {
    setIsOpen(false)
    setIsSuccess(false)
  }

  const tonerClassName = `infoitem ${(toner.quantity <= 3) ? "toner-low" : ""}`; 
 
  return (
    <li>
      <div className="toner-info">
        <p className={tonerClassName}>Toner name: <span>{toner.toner_name}</span></p>
        <p className={tonerClassName}>Toner colour: {toner.colour}</p>
        <div className="quantity-wrapper">
        <p className={tonerClassName}>Toner quantity: {toner.quantity}</p>
        <button className="button button_type_change"type="button" onClick={handleClick}>Change quantity</button>
        {isOpen && <Popup
          onClose={handleCloseClick} 
          isSuccess={isSuccess} 
          item={toner} 
          onUpdateQuantity={onChangeQuantity}
        />}
        </div>
      </div>
     </li>
  )
}

export default Toner;