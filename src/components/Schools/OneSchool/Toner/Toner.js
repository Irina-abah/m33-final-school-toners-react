import "./Toner.css";

const Toner = ({toner, onChangeQuantity}) => {

  const handleChange = (e) => {
    e.preventDefault()
    onChangeQuantity(toner.quantity);
  }
  return (
    <li>
      <div className="toner-info">
        <p className="infoitem">Toner name: <span>{toner.toner_name}</span></p>
        <p className="infoitem">Toner colour: {toner.colour}</p>
        <div className="quantity-wrapper">
        <p className="toner-quantity">Toner quantity: {toner.quantity}</p>
        <button className="button button_type_change"type="button" onClick={handleChange}>Change quantity</button>
        </div>
        
      </div>
     </li>
  )
}

export default Toner;