const combineReducers = (reducers) => {
  const actions = [];
  const initialState = {};

  Object.keys(reducers).forEach((reducerName) => {
    const reducer = reducers[reducerName];
    actions.push(...reducer.actions);
    initialState[reducerName] = reducer.initialState;
  });

  const reducer = (state = initialState, action) => {
    if (!actions.includes(action.type)) {
      return state;
    }

    return {
      ...state,
      ...Object.keys(reducers).reduce((acc, reducerName) => {
        acc[reducerName] = reducers[reducerName](state[reducerName], action);
        return acc;
      }, {}),
    };
  };

  reducer.actions = actions;
  reducer.initialState = initialState;

  return reducer;
};

export default combineReducers;
