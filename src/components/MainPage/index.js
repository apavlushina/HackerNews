import React from "react";
import { connect } from "react-redux";
import TopNews from "../TopNews";
import Search from "../Search";
import { getStories } from "../../actions/actions";
import MapWrapper from "./MapWrapper";
import MyHeader from "./MyHeader";

export class MainPage extends React.PureComponent {
  state = {};

  componentDidMount() {
    console.log("comp mount");
    this.props.getStories();
  }

  render() {
    return (
      <MapWrapper>
        <MyHeader>HackerNews</MyHeader>
        <TopNews stories={this.props.stories} />
        <Search />
      </MapWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    stories: state.stories
  };
};

export default connect(mapStateToProps, { getStories })(MainPage);
