import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  state = { date: new Date(), locale: "bn-BD" };

  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date(), locale: "bn-BD" };
  //   //way-2
  //   this.handleClick = this.handleClick.bind(this);
  // }

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  //way-1: this problem solved-> best practice
  // handleClick = () => {
  //   this.setState({
  //     locale: "en-US",
  //   });
  // };

  //way-2:bind-- using constructor
  // handleClick() {
  //   this.setState({
  //     locale: "en-US",
  //   });
  // }

  //way-3: jodi parameter thake, bind use kora jay
  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date, locale } = this.state;
    let button;
    if (locale === "bn-BD") {
      button = (
        <Button change={this.handleClick} locale="en-US">
          Click Here
        </Button>
      );
      console.log(button);
    } else {
      button = (
        <Button change={this.handleClick} locale="bn-BD">
          Click Here
        </Button>
      );
      console.log(button);
    }
    return (
      <div>
        <h1 className="heading">
          <span className="text">It is {date.toLocaleTimeString(locale)}</span>
        </h1>
        {/* <button onClick={this.handleClick}>Click Here</button> */}
        {/* //way-3 */}
        {/* <button onClick={this.handleClick.bind(this,'en-US')}>Click Here</button> */}
        {/* //bind avoid kore parameter send korte chaile */}
        {/* <button type="button" onClick={() => this.handleClick("en-US")}>
          Click Here
        </button> */}
        {button}
      </div>
    );
  }
}

export default Clock;
