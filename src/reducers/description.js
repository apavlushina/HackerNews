export default function(state = [], action = {}) {
  switch (action.type) {
    case "DETAILED_STORIES":
      return [...state, action.payload];
    default:
      return state;
  }
}
