import axios from 'axios';
import { FETCH_DETAIL_DECLARATION, saveDetailDeclaration } from 'src/actions/detailDeclaration';

const detailDeclarationMiddleware = (store) => (next) => (action) =>  {
  const { idDeclaration } = store.getState().detail;
  switch (action.type) {
    case FETCH_DETAIL_DECLARATION:
      axios.get(`http://localhost:3000/${idDeclaration.id}.json`)
        .then((response) => {
          store.dispatch(saveDetailDeclaration(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
        break;

    default:
      next(action);
  }
};

export default detailDeclarationMiddleware;