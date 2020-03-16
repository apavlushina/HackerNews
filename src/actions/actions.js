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

export const DETAILED_STORIES = "DETAILED_STORIES";

function detailedStories(payload) {
  return {
    type: DETAILED_STORIES,
    payload
  };
}

export const getDescription = (
  arrayOfStories,
  startCounter,
  finishCounter
) => dispatch => {
  console.log("props in action", arrayOfStories);
  for (let i = startCounter; i <= finishCounter; i++) {
    request(`${baseUrl}item/${i}.json`)
      .then(response => {
        const action = detailedStories(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};
