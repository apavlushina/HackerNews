export default function(state = [], action = {}) {
  switch (action.type) {
    case "ALL_STORIES":
      return action.payload;
    case "DETAILED_STORIES":
      return [...state, action.payload];
    default:
      return state;
  }
}
