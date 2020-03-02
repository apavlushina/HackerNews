export default function(state = [], action = {}) {
  switch (action.type) {
    case "ALL_STORIES":
      return action.payload;
    default:
      return state;
  }
}
