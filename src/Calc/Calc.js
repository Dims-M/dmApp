import React from "react";
import "./Calc.css";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // date: "",
      // currencyRate: {},
    };
    // this.currency = ["USD", "RUB", "CAD", "PHP"];
  }

  calcRate = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("Отправка формы");
    console.log(e.target.elemens);
    let elemens = e.target.elemens;
    console.log(elemens);
  };

  render() {
    return (
      <div className="calculator">
        <h3> Калькулятор обмена</h3>
        <div className="block">
          <div>Я хочу</div>
          <div>
            <label>
              <input type="radio" name="radio" defaultValue="0" />
              купить
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="radio" defaultValue="1" />
              продать
            </label>
          </div>
          <div>
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="150" name="count-currency" />
              <select name="" id="">
                {/* <option value="USD">USD</option>
              <option value="RUB">RUB</option>
              <option value="EUR">EUR</option> */}

                {Object.keys(this.props.rate).map((keyName, i) => (
                  <option key={keyName} value={keyName}>
                    {keyName}
                  </option>
                ))}
              </select>
              <input type="submit" defaultValue="calc" />
            </form>
          </div>
          <div>
            <h4>Результат</h4>
            <ul className="calc-res">
              <li>EUR 150</li>
              {/* <li>EUR 150</li>
              <li>EUR 150</li>
              <li>EUR 150</li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
