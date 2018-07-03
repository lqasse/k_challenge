import { ItemPoints } from './../itemPoints';

export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const itemId = action.itemId;

      let updatedItems = { ...state.items };
      if (!updatedItems[itemId]) {
        updatedItems[itemId] = {
          count: 1,
          points: ItemPoints[itemId].points,
          bonus: 0
        };
      } else {
        let item = updatedItems[itemId];
        let count = item.count + 1;

        let bonus = ItemPoints[itemId].bonus
          ? Math.floor(count / ItemPoints[itemId].bonusCount) *
            ItemPoints[itemId].bonus
          : 0;

        updatedItems[itemId] = {
          count: count,
          points: count * ItemPoints[itemId].points + bonus,
          bonus: bonus
        };
      }

      let sumBonus = Object.values(updatedItems).reduce(
        (accumulated, item) => accumulated + item.bonus,
        0
      );
      let sumPoints = Object.values(updatedItems).reduce(
        (accumulated, item) => accumulated + item.points,
        0
      );

      return {
        items: updatedItems,
        sumBonus: sumBonus,
        sumPoints: sumPoints
      };
    case 'RESET_ITEMS':
      return { sumBonus: 0, sumPoints: 0, items: {} };

    default:
      return state;
  }
};
