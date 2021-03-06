import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends React.Component {
  render() {
    if (this.props.businesses) {
      return (
        <div className="BusinessList">
          {this.props.businesses.map(business => {
            return <Business key={business.id} business={business} />;
          })}
        </div>
      );
    } else {
      return (
        <h3 className="not-here">
          We have no suggestions for that location yet...
        </h3>
      );
    }
  }
}

export default BusinessList;
