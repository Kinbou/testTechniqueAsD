import {
  SAVE_ALL_DECLARATIONS,
} from 'src/actions/global';

const initialState = {
  listDeclarations: []
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_DECLARATIONS:
      return {
        ...state,
        listDeclarations: action.declarations,
      };

    default:
      return state;
  }
};

export default reducer;