import createHttpError from "http-errors";
import { Types, isValidObjectId } from "mongoose";
import { OutboundClickModel } from "src/models";

/**
 * Get outbound click by id.
 * @param id - Outbound click id
 * @returns Outbound click
 * @throws 400 error if id is invalid
 * @throws 404 error if outbound click is not found
 */
export const getOutboundClickById = async (
  id: string | Types.ObjectId,
) => {
  if (!isValidObjectId(id))
    throw createHttpError.BadRequest("Invalid outbound click id");

  const outboundClick = await OutboundClickModel.findById(id);
  if (!outboundClick) throw createHttpError.NotFound("Outbound click not found");

  return outboundClick;
};
