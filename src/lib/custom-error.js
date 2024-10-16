import { CUSTOM_ERROR_MESSAGES } from "../constants/error.js";

export function createCustomError(status) {
  const err = new Error(CUSTOM_ERROR_MESSAGES[status]);
  err.status = status;
  return err;
}
