import { cardDetailSelect, cardSelect } from "./card-select.js";

export const shopSelect = {
  id: true,
  price: true,
  remainingQuantity: true,
  totalQuantity: true,
  exchangeGrade: true,
  exchangeGenre: true,
  exchangeDescription: true,
};

export const shopCreateSelect = {
  ...shopSelect,
  User: {
    select: {
      nickname: true,
    },
  },
  Card: {
    select: cardDetailSelect,
  },
};

export const shopListSelect = {
  ...shopSelect,
  Card: {
    select: cardSelect,
  },
};
