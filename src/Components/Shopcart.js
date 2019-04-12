import React from "react";

const Shopcart = props => (
  <div>
    <ul>
      {props.shopCart.map(shopObj => (
        <li key={shopObj.Uid}>
          <div>
            {shopObj.Name} - {shopObj.Qty} - {shopObj.Date} -{" "}
            <input
              type="checkbox"
              name="checkDone"
              onChange={props.toDoDone.bind(props, shopObj.Uid)}
              checked={shopObj.Done}
            />
            <button onClick={props.deleteToDo.bind(props, shopObj.Uid)}>
              Usuń
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Shopcart;
