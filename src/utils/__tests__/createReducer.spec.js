import createReducer from '../createReducer';

describe('createReducer util function', () => {
  const actionTypes = {
    first: '/action/first',
    second: '/action/second',
    invalid: '/action/invalid',
  };

  const firstAction = { type: actionTypes.first };
  const secondAction = { type: actionTypes.second };
  const invalidAction = { type: actionTypes.invalid };

  const handlers = {
    first: jest.fn(),
    second: jest.fn(),
  };

  const initialState = {};

  const reducer = createReducer(initialState, {
    [actionTypes.first]: handlers.first,
    [actionTypes.second]: handlers.second,
  });

  it('should call necessary handler according to action', () => {
    const state = {};

    reducer(state, firstAction);

    expect(handlers.first).toHaveBeenCalledTimes(1);
    expect(handlers.first).toHaveBeenCalledWith(state, firstAction);

    reducer(state, secondAction);
    expect(handlers.second).toHaveBeenCalledTimes(1);
    expect(handlers.second).toHaveBeenCalledWith(state, secondAction);
  });

  it('should filter out unacceptable actions and return state', () => {
    const state = {};

    const result = reducer(state, invalidAction);

    expect(result).toBe(state);
  });

  it('should use initial state if no state provided', () => {
    const state = undefined;

    reducer(state, firstAction);

    expect(handlers.first).toHaveBeenCalledWith(initialState, firstAction);
  });

  it('should provide reducer that consists list of actions and initial state', () => {
    expect(reducer.actions).toEqual([actionTypes.first, actionTypes.second]);
    expect(reducer.initialState).toBe(initialState);
  });
});
