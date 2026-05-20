import { TrackOutboundClick } from "src/common/interfaces";
import { OutboundClickModel } from "src/models";

/**
 * Track outbound click.
 * @param data - Outbound click data
 * @returns True when outbound click is recorded
 */
export const trackOutboundClick = async (data: TrackOutboundClick) => {
  await OutboundClickModel.create(data);
  return true;
};
