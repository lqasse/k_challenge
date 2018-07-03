export const addItem = itemId => ({
  type: 'ADD_ITEM',
  itemId: itemId
});

export const resetItems = () => ({
  type: 'RESET_ITEMS'
});
