import { h, Component } from "preact";
// import "./Inputs.css"; // Import your CSS file

class Inputs extends Component {
  state = {
    inputValue: "",
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
          className="input-field"
          placeholder="Type something..."
        />
        <div className="input-line" />
      </div>
    );
  }
}

export default Inputs;
