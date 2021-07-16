import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";

export const useCopyToClipboard = (resetTimer = null, inputText) => {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = (input) => {
    if (typeof input === "string" || typeof input === "number") {
      // copy
      copy(input.toString());
      setCopied(true);
    } else {
      setCopied(false);
      console.error(`Cannot copy type of ${typeof input}`);
    }
  };

  return [isCopied, handleCopy];
};
