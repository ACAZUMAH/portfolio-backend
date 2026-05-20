import { model, Schema } from "mongoose";
import { Collections } from "src/common/enums";
import { VisitEventDocument } from "src/common/interfaces";

const visitEventSchema = new Schema<VisitEventDocument>(
  {
    visitorId: { type: String, required: true },
    sessionId: { type: String, required: true },
    path: { type: String, required: true },
    referrer: { type: String, default: "direct" },
    userAgent: { type: String, default: "unknown" },
    device: { type: String, default: "unknown" },
    utmSource: { type: String, default: "direct" },
    utmMedium: { type: String, default: "none" },
    utmCampaign: { type: String, default: "none" },
  },
  { timestamps: true },
);

export const VisitEventModel = model<VisitEventDocument>(
  Collections.VisitEvents,
  visitEventSchema,
);
