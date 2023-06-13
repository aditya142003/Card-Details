import React from "react";
import "./Style/Card.css";
import chip from "./Images/chip.png";
import map from "./Images/map.png";
import visa from "./Images/visa.png";

function Card(props) {
  var first = [1, 2, 3, 4];
  var second = [1, 2, 3, 4];
  var third = [1, 2, 3, 4];
  var forth = [1, 2, 3, 4];
  var arr = [first, second, third, forth];
  document.documentElement.style.setProperty("--dimesnion", props.dimension);
  return (
    <div className="container">
      <div className="innerConatiner">
        <div className="front">
          <img src={map} className="map"></img>
          <img src={chip} className="chip"></img>
          <img src={visa} className="visa"></img>
          <div className="cardNum">
            {arr.map((e) => {
              return (
                <span className="cardNumFChild">
                  {e.map((t) => {
                    return <span>{t}&nbsp;</span>;
                  })}
                </span>
              );
            })}
          </div>
          <div className="bottom">
            <div className="cardName">
              <div>Card Holder</div>
              <div>FULL NAME</div>
            </div>
            <div className="cardDate">
              <div>Expires</div>
              <div>MM/YY</div>
            </div>
          </div>
        </div>
        <div className="back">
          <img src={map} className="map"></img>
          <div className="blackStrip"></div>
          <span className="cvvWord">CVV</span>
          <div className="cvv"></div>
          <img src={visa} className="visaBack"></img>
        </div>
      </div>
    </div>
  );
}

export default Card;
