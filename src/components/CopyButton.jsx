import React from "react";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

const CopyButton = ({ textToCopy }) => {
  const [isCopied, handleCopy] = useCopyToClipboard(2000);

  return (
    <button disabled={isCopied} onClick={() => handleCopy(textToCopy)}>
      {isCopied ? "copied" : "copy"}
    </button>
  );
};

export default CopyButton;
