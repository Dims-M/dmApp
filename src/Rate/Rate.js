import React from "react";
import "./Rate.css";

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      currencyRate: {},
    };
    this.currency = ["USD", "RUB", "CAD", "PHP"];
    this.getRateData();
  }

  render() {
    return (
      <div className="Rate">
        <h3> Курс валют на 30 ноября 2019</h3>
        <div className="flex-container">
          <div className="block flex-item">
            <div className="currency-name">USD</div>
            <div className="currency-in">1500 Kr</div>
            <div className="currency-out">1200 Kr</div>
          </div>
          <div className="block flex-item">
            <div className="currency-name">USD</div>
            <div className="currency-in">1500 Kr</div>
            <div className="currency-out">1200 Kr</div>
          </div>
          <div className="block flex-item">
            <div className="currency-name">USD</div>
            <div className="currency-in">1500 Kr</div>
            <div className="currency-out">1200 Kr</div>
          </div>
        </div>
      </div>
    );
  }

  getRateData = () => {
    // var myHeaders = new Headers();
    // myHeaders.append("apikey", "ZCk1jAPayX9V4og1figAupODeD63SrHp");

    // var requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    //   headers: myHeaders,
    // };

    fetch(
      // "https://api.exchangeratesapi.io/v1/latest?access_key=ZCk1jAPayX9V4og1figAupODeD63SrHp"
      // fetch(
      "https://api.apilayer.com/exchangerates_data/latest?apikey=ZCk1jAPayX9V4og1figAupODeD63SrHp"
      // "https://apilayer.com/marketplace/playground/exec?api_id=223&method=get&endpoint=/latest"
      // "https://www.cbr-xml-daily.ru/latest.js"
      // "https://api.apilayer.com/exchangerates_data/latest?symbols=symbols&base=base",
      // requestOptions
      // )
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ date: data.date });
      });
  };
}

export default Rate;
