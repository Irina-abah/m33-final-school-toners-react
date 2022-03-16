const Toner = ({toner}) => {
  return (
    <li>
      <div>
        <p>Toner name: {toner.toner_name}</p>
        <p>Toner colour: {toner.colour}</p>
        <p>Toner quantity: {toner.quantity}</p>
      </div>
     </li>
  )
}

export default Toner;