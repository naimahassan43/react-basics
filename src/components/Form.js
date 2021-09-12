import React from "react";

export default class Form extends React.Component {
  state = {
    title: "JavaScript",
    text: "Javascript is awesome",
    library: "React",
    isAwesome: true,
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
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log("Nothing here");
    }
  };
  render() {
    const { title, text, library, isAwesome } = this.state;
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
          <br />
          <br />
          <select value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
