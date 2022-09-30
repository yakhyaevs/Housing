import React from "react";
import Img2 from "../Images/Search.png";
import "../Search/Search.css";
import Name from "../Main/Main.jsx";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  render() {
    const onChange = (e) => {
      this.setState({ name: e.target.value });
    };
    return (
      <div className="ParentSearch">
        <div className="ChildSearch">
          <input
            className="input"
            type="text"
            placeholder="Enter an address, neighborhood, city, or ZIP code"
            onChange={onChange}
          />
          <img className="Img2" src={Img2} alt="Error" />
          <button className="btn1"> Search</button>
        </div>
        <div className="ParentProperty">
          <h3>Properties</h3>
          <p className="property">
            You can find any types of houses in this webpage... Thanks)))
          </p>
          {/* <p>Total number of Houses{this.state.name.length}</p> */}
          <div className="container"></div>
        </div>

        <Name inputValue={this.state.name} />
      </div>
    );
  }
}
export default Search;
