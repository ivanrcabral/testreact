import React from "react";
import './Banner.scss';

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let banner = this.props.banner
    return (
      <div className="banner-container">
        <div className="banner-text">{banner.text}</div>
        </div>
    
    )
  }
}


export default Banner;