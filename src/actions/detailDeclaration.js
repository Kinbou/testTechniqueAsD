export const FETCH_DETAIL_DECLARATION = 'FETCH_DETAIL_DECLARATION';
export const SAVE_DETAIL_DECLARATION = 'SAVE_DETAIL_DECLARATION';
export const ID_DECLARATION = 'ID_DECLARATION';

export const fetchDetailDeclaration = () => ({
  type: FETCH_DETAIL_DECLARATION,
});

export const saveDetailDeclaration = (detail) => ({
  type: SAVE_DETAIL_DECLARATION,
  detail,
})

export const idDeclaration = (id) => ({
  type: ID_DECLARATION,
  id,
});