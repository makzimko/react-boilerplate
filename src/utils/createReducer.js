/**
 * Create reducer proxy and store handlers and initial state
 * Proxy function will filter out unacceptable action type and call needed reducers
 */
const createReducer = (initialState, handlers) => {
  const reducer = (state = initialState, action) => {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };

  reducer.actions = Object.keys(handlers);
  reducer.initialState = initialState;

  return reducer;
};

export default createReducer;
