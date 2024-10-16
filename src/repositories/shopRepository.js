import prisma from "./prisma.js";

import {
  shopCreateSelect,
  shopDetailSelect,
  shopListSelect,
} from "./selects/shopSelect.js";

async function createShop(createData) {
  return await prisma.shop.create({
    data: createData,
    select: shopCreateSelect,
  });
}

async function getShopListByQuery(filter) {
  const { orderBy, skip, take, where } = filter;
  return prisma.shop.findMany({
    orderBy,
    skip,
    take,
    where,
    select: shopListSelect,
  });
}

async function countShopListByQuery(filter) {
  return prisma.shop.count({
    where: filter,
  });
}

async function getShopDetailById(id) {
  return prisma.shop.findUniqueOrThrow({
    where: { id },
    select: shopDetailSelect,
  });
}

async function name(params) {
  
}

export default {
  createShop,
  getShopListByQuery,
  countShopListByQuery,
  getShopDetailById,
};
