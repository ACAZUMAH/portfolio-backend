import { model, Schema } from "mongoose";
import { Collections } from "src/common/enums";
import { OutboundClickDocument } from "src/common/interfaces";

const outboundClickSchema = new Schema<OutboundClickDocument>(
  {
    label: { type: String },
    url: { type: String },
    type: { type: String },
    visitorId: { type: String },
    path: { type: String },
  },
  { timestamps: true },
);

export const OutboundClickModel = model<OutboundClickDocument>(
  Collections.OutboundClicks,
  outboundClickSchema,
);
