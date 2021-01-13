import axios from 'axios';
import { FETCH_ALL_LIST_DECLARATIONS, saveAllDeclarations } from 'src/actions/global';

const listDeclarationsMiddleware = (store) => (next) => (action) =>  {
  switch (action.type) {
    case FETCH_ALL_LIST_DECLARATIONS:
      axios.get('declarations.json')
        .then((response) => {
          store.dispatch(saveAllDeclarations(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
        break;

    default:
      next(action);
  }
};

export default listDeclarationsMiddleware;