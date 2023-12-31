import React, { useState } from "react";
import "./Style/MainArea.css";
import Card from "./Card";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function MainArea() {
  const [cardNumber, setCardnumber] = useState({
    focus: false,
    value: [],
  });
  const [holderName, setholderName] = useState({
    focus: false,
    value: "",
  });
  const [expiryDate, setExpiryDate] = useState({
    focus: false,
    value: new Date(),
  });
  const [cvv, setcvv] = useState({
    focus: false,
    value: [],
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
    if (expiryDate.focus) {
      setExpiryDate({ ...expiryDate, focus: false });
    } else {
      setExpiryDate({ ...expiryDate, focus: true });
    }
  };
  document.addEventListener("click", (e) => {
    setIsOpen(false);
    setExpiryDate({ ...expiryDate, focus: false });
  });

  return (
    <div className="mainContainer">
      <div className="cardContainer">
        <Card
          dimension="200px"
          cardNumber={JSON.stringify(cardNumber)}
          holderName={JSON.stringify(holderName)}
          cvv={JSON.stringify(cvv)}
          month={expiryDate.value.getMonth()}
          year={expiryDate.value.getFullYear()}
          dateFocus={expiryDate.focus}
        />
      </div>
      <form>
        <div className="cardNumberContainer">
          <div>Card Number</div>
          <input
            type="number"
            onFocus={(e) => {
              setCardnumber({ ...cardNumber, focus: true });
            }}
            onBlur={(e) => {
              setCardnumber({ ...cardNumber, focus: false });
            }}
            onChange={(e) => {
              setCardnumber({ ...cardNumber, value: e.target.value });
            }}
            placeholder="Number"
          ></input>
        </div>
        <div className="cardNumberContainer">
          <div>Holder Name</div>
          <input
            type="text"
            onFocus={(e) => {
              setholderName({ ...holderName, focus: true });
            }}
            onBlur={(e) => {
              setholderName({ ...holderName, focus: false });
            }}
            onChange={(e) => {
              setholderName({ ...holderName, value: e.target.value });
            }}
            id="holderName"
            placeholder="Name"
          ></input>
        </div>
        <div className="secondDiv">
          <div>
            <div>Expiry Date</div>
            <button className="example-custom-input" onClick={handleClick}>
              {(expiryDate.value.getMonth() + 1) / 10 >= 1
                ? expiryDate.value.getMonth() + 1
                : "0" + (expiryDate.value.getMonth() + 1)}
              /{expiryDate.value.getFullYear()}
            </button>
            {isOpen && (
              <DatePicker
                minDate={new Date()}
                showMonthYearPicker
                showTwoColumnMonthYearPicker
                shouldCloseOnSelect={true}
                onChange={(date) => {
                  setExpiryDate({ ...expiryDate, value: date });
                }}
                inline
              />
            )}
          </div>
          <div>
            <div>CVV</div>
            <input
              type="number"
              onFocus={(e) => {
                setcvv({ ...cvv, focus: true });
              }}
              onBlur={(e) => {
                setcvv({ ...cvv, focus: false });
              }}
              onChange={(e) => {
                setcvv({ ...cvv, value: e.target.value });
              }}
              placeholder="Number"
              id="cvv"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MainArea;
