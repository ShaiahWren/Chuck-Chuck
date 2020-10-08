import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Quotes.css";

class Quotes extends Component {
    render() {
        return (
            <div className="quote-card">
                <img
                  src={this.props.allOfChuck.icon_url}
                  alt="chuck icon"
                />
                <p>
                  {this.props.allOfChuck.value}
                </p>
          </div>
        
        );

    }
   
  };
  
  export default Quotes;