import request from "superagent";

export const ALL_STORIES = "ALL_STORIES";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
function allStories(payload) {
  return {
    type: ALL_STORIES,
    payload
  };
}

export const getStories = () => dispatch => {
  request(`${baseUrl}/topstories.json`)
    .then(response => {
      const action = allStories(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
