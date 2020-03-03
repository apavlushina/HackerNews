import React from "react";
import { connect } from "react-redux";
import TopNews from "../TopNews";
import Search from "../Search";
import { getStories, getDescription } from "../../actions/actions";
import MapWrapper from "./MapWrapper";
import MyHeader from "./MyHeader";

export class MainPage extends React.PureComponent {
  state = {};

  componentDidMount() {
    this.props.getStories();
    // this.props.getDescription(this.props.stories, 5);
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

export default connect(mapStateToProps, { getStories, getDescription })(
  MainPage
);
