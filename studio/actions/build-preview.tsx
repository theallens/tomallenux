import { useState } from "react";
import { useDocumentOperation, type DocumentActionComponent } from "sanity";

const PREVIEW_URL = "https://preview--tomallenux.netlify.app";

/**
 * Starts a preview build. The browser can't hold the GitHub token, so this only stamps the
 * draft: a Sanity webhook watches that field and starts the build.
 */
export const BuildPreviewAction: DocumentActionComponent = ({ id, type }) => {
  const { patch } = useDocumentOperation(id, type);
  const [confirming, setConfirming] = useState(false);

  return {
    label: "Build preview",
    onHandle: () => setConfirming(true),
    dialog: confirming && {
      type: "confirm",
      message: `This builds the site with all your drafts. It takes about 2 minutes, then you can see it at ${PREVIEW_URL}. Anyone with that link can see your drafts.`,
      onConfirm: () => {
        patch.execute([{ set: { previewRequestedAt: new Date().toISOString() } }]);
        setConfirming(false);
      },
      onCancel: () => setConfirming(false),
    },
  };
};
