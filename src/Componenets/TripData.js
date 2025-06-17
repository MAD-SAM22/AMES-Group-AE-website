import { Component } from "react";

class TripData extends Component {
  render() {
    return (
      <>
        <div className="t-card">
          <div className="t-image">
            <img src={this.props.image} alt="t-imag" />
          </div>
          <h4>{this.props.heading}</h4>
          <p>{this.props.text}</p>
        </div>
      </>
    );
  }
}
export default TripData;
