import React from "react";
import { connect } from "react-redux";
import TopNews from "../TopNews";
import Search from "../Search";
import { getStories, getDescription } from "../../actions/actions";
import MapWrapper from "./MapWrapper";
import MyHeader from "./MyHeader";

export class MainPage extends React.PureComponent {
  state = {
    counter: 20,
    stories: [],
    description: []
  };

  async componentDidMount() {
    await this.props.getStories();
    console.log("mount", this.props.stories, 0, this.state.counter);
    this.props.getDescription(this.props.stories, 0, this.state.counter);
    console.log("mount2", this.props.stories, 0, this.state.counter);
  }

  loadMore = () => {
    this.setState({ counter: this.state.counter + 20 });
    console.log("counter1", this.state.counter);
    this.props.getDescription(
      this.props.stories,
      this.props.description.length,
      this.state.counter
    );
    console.log("counter2", this.state.counter, this.state.description.length);
  };

  render() {
    return (
      <MapWrapper>
        <MyHeader>HackerNews</MyHeader>
        <TopNews
          stories={this.props.stories}
          description={this.props.description}
        />
        <button
          onClick={() => this.loadMore()}
          type="button"
          className="button"
        >
          Load more
        </button>
        <Search />
      </MapWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    stories: state.stories,
    descriptions: state.description
  };
};

export default connect(mapStateToProps, { getStories, getDescription })(
  MainPage
);
