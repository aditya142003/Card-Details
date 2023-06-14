import React, { useEffect, useState } from "react";
import "./Style/Card.css";
import chip from "./Images/chip.png";
import map from "./Images/map.png";
import visa from "./Images/visa.png";

function Card(props) {
  const [first, setfirst] = useState("####");
  const [second, setsecond] = useState("####");
  const [third, setthird] = useState("####");
  const [forth, setforth] = useState("####");
  const [fullname, setfullname] = useState("FULL NAME");
  const [cvvs, setcvvs] = useState("####");
  const [expiryMon, setexpiryMon] = useState("MM");
  const [expiryYear, setexpiryYear] = useState("YYYY");
  const star = "****";
  const hash = "####";

  document.documentElement.style.setProperty("--dimesnion", props.dimension);

  const cardNumber = JSON.parse(props.cardNumber);
  const holderName = JSON.parse(props.holderName);
  const cvv = JSON.parse(props.cvv);

  useEffect(() => {
    // console.log(data);
    if (cardNumber.focus == true) {
      document.getElementById("cardNum").style.border = "white 3px solid";
    } else {
      document.getElementById("cardNum").style.border = "white 0px solid";
    }
    var num = cardNumber.value.length;
    var str = cardNumber.value;
    if (num != 0) {
      if (num <= 4) {
        var temp = str + hash.slice(num, 4);
        setfirst(temp);
        setsecond(hash);
      } else if (num > 4 && num <= 8) {
        var temp = star.slice(0, num - 4) + hash.slice(num - 4, 4);
        setsecond(temp);
        setthird(hash);
      } else if (num > 8 && num <= 12) {
        var temp = star.slice(0, num - 8) + hash.slice(num - 8, 4);
        setthird(temp);
        setforth(hash);
      } else if (num > 12 && num <= 16) {
        var temp = str.slice(12, num) + hash.slice(num - 12, 4);
        setforth(temp);
      }
    } else {
      setfirst(hash);
    }
    if (holderName.focus == true) {
      document.getElementById("cardFullName").style.border = "white 3px solid";
    } else {
      document.getElementById("cardFullName").style.border = "white 0px solid";
    }
    if (holderName.value.length != 0) {
      setfullname(holderName.value);
    } else {
      setfullname("FULL NAME");
    }
    if (props.dateFocus == true) {
      document.getElementById("expiryDate").style.border = "white 3px solid";
    } else {
      document.getElementById("expiryDate").style.border = "white 0px solid";
    }
    if (props.month) {
      setexpiryMon(props.month + 1);
      setexpiryYear(props.year);
    } else {
      setexpiryMon("MM");
      setexpiryYear("YYYY");
    }

    if (cvv.focus == true) {
      document.getElementById("innerContainer").style.transform =
        "rotateY(180deg)";
    } else {
      document.getElementById("innerContainer").style.transform =
        "rotateY(0deg)";
    }
    var cvvlength = cvv.value.length;
    if (cvv.value.length != 0) {
      var temp = cvv.value + hash.slice(cvvlength, 4);
      setcvvs(temp);
    } else {
      setcvvs("####");
    }
  }, [
    cardNumber.focus,
    cardNumber.value,
    holderName.value,
    holderName.focus,
    cvv.focus,
    cvv.value,
    props.dateFocus,
    props.month,
    props.year,
  ]);

  return (
    <div className="container">
      <div className="innerConatiner" id="innerContainer">
        <div className="front">
          <img src={map} className="map"></img>
          <img src={chip} className="chip"></img>
          <img src={visa} className="visa"></img>
          <div className="cardNum" id="cardNum">
            <span className="cardNumChild">
              <span>{first}&nbsp;</span>
              <span>{second}&nbsp;</span>
              <span>{third}&nbsp;</span>
              <span>{forth}&nbsp;</span>
            </span>
          </div>
          <div className="bottom">
            <div className="cardName">
              <div>Card Holder</div>
              <div id="cardFullName" className="cardFullName">
                {fullname}
              </div>
            </div>
            <div className="cardDate">
              <div>Expires</div>
              <div id="expiryDate" className="expiryDate">
                {expiryMon != "MM"
                  ? `${
                      expiryMon / 10 >= 1 ? expiryMon : "0" + expiryMon
                    }/${expiryYear}`
                  : "MM/YYYY"}
              </div>
            </div>
          </div>
        </div>
        <div className="back">
          <img src={map} className="map"></img>
          <div className="blackStrip"></div>
          <span className="cvvWord">CVV</span>
          <div className="cvv" id="cardcvv">
            {cvvs}
          </div>
          <img src={visa} className="visaBack"></img>
        </div>
      </div>
    </div>
  );
}

export default Card;
