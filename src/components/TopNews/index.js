import React from "react";
import { connect } from "react-redux";
import { getDescription } from "../../actions/actions";

export class TopNews extends React.PureComponent {
  state = {};

  componentDidMount() {
    console.log("props1", this.props);
    // this.props.getDescription(this.state.stories, 5);
  }

  render() {
    console.log("props2", this.props);
    return <div>Some news there</div>;
  }
}

const mapStateToProps = state => {
  return {
    detailedStories: state.detailedStories
  };
};

export default connect(mapStateToProps, { getDescription })(TopNews);
