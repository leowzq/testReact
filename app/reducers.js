const reducer = (state = 'default', action) => {
  switch (action.type) {
    case 'name':
      return {
        name: 'reducerTest'
      };
    default:
      return {
        name: state
      };
  }
}

export default reducer;
