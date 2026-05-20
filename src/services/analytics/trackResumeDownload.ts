import { OutboundClickType } from "src/common/enums";
import { trackOutboundClick } from "src/services/outboundClicks";
import { incrementResumeDownload } from "src/services/resumeAssets";

/**
 * Track resume download.
 * @param data.id - Resume asset id
 * @param data.visitorId - Visitor id
 * @param data.path - Source path
 * @returns True when resume download is tracked
 */
export const trackResumeDownload = async ({
  id,
  visitorId,
  path,
}: {
  id: string;
  visitorId?: string;
  path?: string;
}) => {
  const resume = await incrementResumeDownload(id);

  await trackOutboundClick({
    label: "Resume download",
    url: resume?.url,
    type: OutboundClickType.RESUME_DOWNLOAD,
    visitorId,
    path,
  });

  return true;
};
