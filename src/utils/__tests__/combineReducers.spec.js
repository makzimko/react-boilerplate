import combineReducers from '../combineReducers';
import createReducer from '../createReducer';

describe('combineReducer util function', () => {
  const actionTypes = {
    notes: {
      create: '/notes/create',
      delete: '/notes/delete',
    },
    comments: {
      create: '/comments/create',
      delete: '/comments/delete',
    },
    messages: {
      create: '/messages/create',
    },
  };

  const notesReducer = createReducer(Symbol.for('notes'), {
    [actionTypes.notes.create]: jest.fn((notes) => [...notes, 'Some note']),
    [actionTypes.notes.delete]: jest.fn(),
  });

  const commentsReducer = createReducer(Symbol.for('comments'), {
    [actionTypes.comments.create]: jest.fn((comments) => [
      ...comments,
      'Some comment',
    ]),
    [actionTypes.comments.delete]: jest.fn(),
  });

  const combinedReducer = combineReducers({
    notes: notesReducer,
    comments: commentsReducer,
  });

  it('should return default structure of state piece for unacceptable actions', () => {
    const state = undefined;

    const result = combinedReducer(state, {
      type: actionTypes.messages.create,
    });

    expect(result).toEqual({
      notes: Symbol.for('notes'),
      comments: Symbol.for('comments'),
    });
  });

  it('should combine state with result of necessary reducer', () => {
    const state = {
      notes: ['Initial note'],
      comments: ['Initial comments'],
    };

    const intermediateResult = combinedReducer(state, {
      type: actionTypes.notes.create,
    });

    expect(intermediateResult.notes).toEqual(['Initial note', 'Some note']);
    expect(intermediateResult.comments).toBe(state.comments);

    const result = combinedReducer(state, {
      type: actionTypes.comments.create,
    });

    expect(result.notes).toBe(intermediateResult.notes);
    expect(result.comments).toEqual(['Initial comments', 'Some comment']);
  });

  it('should provide reducer that consists list of actions and initial state', () => {
    expect(combinedReducer.actions).toEqual([
      actionTypes.notes.create,
      actionTypes.notes.delete,
      actionTypes.comments.create,
      actionTypes.comments.delete,
    ]);
    expect(combinedReducer.initialState).toEqual({
      notes: Symbol.for('notes'),
      comments: Symbol.for('comments'),
    });
  });
});
