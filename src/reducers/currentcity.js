const currentcity = (state = { currentcity: "Loading" }, action) => {
  switch (action.type) {
    case "CHANGE_CITY":
      return {
        ...state,
        currentcity: action.currentcity
      };
    default:
      return state;
  }
};
export default currentcity;
