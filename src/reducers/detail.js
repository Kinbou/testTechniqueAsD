import {
  SAVE_DETAIL_DECLARATION,
  ID_DECLARATION,
} from 'src/actions/detailDeclaration';

const initialState = {
  detailDeclaration: [],
  idDeclaration: ''
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DETAIL_DECLARATION:
      return {
        ...state,
        detailDeclaration: action.detail,
      };

    case ID_DECLARATION:
      return {
        ...state,
        idDeclaration: action.id,
      }

    default:
      return state;
  }
};

export default reducer;