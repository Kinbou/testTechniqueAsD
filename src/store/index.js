import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import listDeclarationsMiddleware from 'src/middlewares/listDeclarations';
import detailDeclarationMiddleware from 'src/middlewares/detailDeclaration';

const enhancers = composeWithDevTools(
  applyMiddleware(
    listDeclarationsMiddleware,
    detailDeclarationMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;