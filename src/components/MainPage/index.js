import React from "react";
import { Link } from "react-router-dom";

import MapWrapper from "./MapWrapper";
import MyHeader from "./MyHeader";

export class MainPage extends React.PureComponent {
  render() {
    return (
      <MapWrapper>
        <MyHeader>HackerNews</MyHeader>
        <p>News will be there</p>
        <button>Load more</button>
      </MapWrapper>
    );
  }
}

export default MainPage;
