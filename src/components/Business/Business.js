import React from "react";
import "./Business.css";

class Business extends React.Component {
  render() {
    const { business } = this.props;
    return (
      <div className="Business">
        <div className="image-container">
          <a href={business.url} target="_blank" rel="noopener noreferrer">
            <img src={business.imageSrc} alt="" />{" "}
          </a>
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <a
              href={`https://maps.google.com/maps?q=${business.latitude},${business.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {business.address}
            </a>
            <p>{business.city}</p>
            <p>
              {business.state}
              {business.zipCode}
            </p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">Rating: {business.rating}</h3>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
