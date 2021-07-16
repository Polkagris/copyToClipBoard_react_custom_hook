import React from "react";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

const CopyButton = ({ textToCopy }) => {
  const [isCopied, handleCopy] = useCopyToClipboard();
  console.log("isCopied: ", isCopied);

  return <button onClick={() => handleCopy(textToCopy)}>copy</button>;
};

export default CopyButton;
