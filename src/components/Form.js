import React from "react";

export default class Form extends React.Component {
  state = {
    title: "JavaScript",
    text: "Javascript is awsome",
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else {
      console.log("Nothing here");
    }
  };
  render() {
    const { title, text } = this.state;
    return (
      <div>
        <form>
          <h2>The Title is : {title}</h2>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea name="text" value={text} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
