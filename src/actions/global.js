export const FETCH_ALL_LIST_DECLARATIONS = 'FETCH_ALL_LIST_DECLARATIONS';
export const SAVE_ALL_DECLARATIONS = 'SAVE_ALL_LIST_DECLARATIONS';

export const fetchAllListDeclarations = () => ({
  type: FETCH_ALL_LIST_DECLARATIONS,
});

export const saveAllDeclarations = (declarations) => ({
  type: SAVE_ALL_DECLARATIONS,
  declarations,
})