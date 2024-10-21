import exchangeService from "../services/exchange-service.js";
import ownService from "../services/ownService.js";
import shopService from "../services/shopService.js";
import {
  createShopMapper,
  getShopDetailMapper,
  getShopListMapper,
} from "./mappers/shopMapper.js";

async function createShop(req, res, next) {
  const shop = await shopService.createShop(req.body);
  const own = await ownService.update(req.body);
  const [shopResult, ownResult] = await Promise.all([shop, own]);
  // 보유량에서 0이되면 delete
  // 카드를 보유하고 있는지 확인하는 코드 추가
  const responseData = createShopMapper(shopResult);
  res.status(201).send(responseData);
}

async function getShopList(req, res, next) {
  const shops = await shopService.getShopListByQuery(req.query);
  const count = await shopService.countShopListByQuery(req.query);
  const [list, total] = await Promise.all([shops, count]);

  console.log("shops : ", shops);
  console.log("count : ", count);

  const responseData = getShopListMapper(list, total);

  res.send(responseData);
}

async function getShopDetail(req, res, next) {
  const { shopId } = req.params;
  const userId = req.session?.userId || "";
  const shop = await shopService.getShopDetailById(shopId);
  const isUserShopOwner = await shopService.checkUserShopOwner(userId, shopId);
  const [data, isowner] = await Promise.all([shop, isUserShopOwner]);
  let responseData = {};
  if (!isowner) {
    const isExchange = await exchangeService.checkExchangeByUser(
      userId,
      shopId
    );
    responseData = getShopDetailMapper(data, isExchange);
  } else {
    responseData = getShopDetailMapper(data);
  }
  res.send(responseData);
}

async function updateShop(req, res, next) {
  const { shopId } = req.params;
  const shop = await shopService.updateShop(shopId, req.body);
  const responseData = createShopMapper(shop);
  res.send(responseData);
}

async function deleteShop(req, res, next) {
  try {
    const { shopId } = req.params;
    const userId = req.session.userId;
    const result = await shopService.deleteShop({ userId, shopId });

    return res.status(200).send(result);
  } catch (err) {
    return next(err);
  }
}

async function createExchange(req, res, next) {
  try {
    const { shopId, cardId, description } = req.body;
    const userId = req.session.userId;
    const result = await exchangeService.createExchange({
      userId,
      shopId,
      cardId,
      description,
    });

    return res.status(200).send(result);
  } catch (err) {
    return next(err);
  }
}

export default {
  createShop,
  getShopList,
  getShopDetail,
  updateShop,
  deleteShop,
  createExchange,
};
