import { useEffect, useState } from "react";

const titlePrefix = process.env.REACT_APP_TITLE_PREFIX;

/**
 * Simple custom hook to update the document title
 * @param title title of the current page
 * @returns title of the current page
 */
const useDocumentTitle = (title: string) => {
  const [documentTitle, setDocumentTitle] = useState(title);
  useEffect(() => {
    document.title = `${titlePrefix} ${documentTitle}`;
  }, [documentTitle]);

  return [documentTitle, setDocumentTitle];
};

export { useDocumentTitle };
