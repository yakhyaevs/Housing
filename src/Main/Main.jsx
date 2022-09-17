import React, { Component } from "react";
import "../Main/Main.css";
import home1 from "../Images/house1.png";
import home2 from "../Images/house2.png";
import home3 from "../Images/house3.png";
//  constructor. eslint(no-useless-constructor)
const houses = [
  {
    id: 1,
    img: home1,
    name: "Asia Pacific",
  },
  {
    id: 2,
    img: home2,
    name: "Hi-Tech House",
  },
  {
    id: 3,
    img: home3,
    name: "Craft House",
  },
  {
    id: 1,
    img: home1,
    name: "Pacific",
  },
  {
    id: 2,
    img: home2,
    name: "Blur House",
  },
  {
    id: 3,
    img: home3,
    name: "Modern House",
  },
  {
    id: 1,
    img: home1,
    name: "Ocean House",
  },
  {
    id: 2,
    img: home2,
    name: "Village",
  },
  {
    id: 3,
    img: home3,
    name: "One-room",
  },
];

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="homeColor">
        {houses.map(
          (val, index) =>
            val.name
              .toLocaleLowerCase()
              .includes(this.props.inputValue.toLocaleLowerCase()) && (
              <div className="cards">
                <img className="sizeHouse" src={val.img} alt="House Image" />
                <p className="textCard">{val.name}</p>
                <p className="cardText">{val.text2}</p>
              </div>
            )
        )}
      </div>
    );
  }
}

export default Main;
