/* eslint-disable */
export default function iterateThroughObject(reportWithIterator) {
  let itemStr = ''; let
    i = 0;
  for (const item of reportWithIterator) {
    if (reportWithIterator.length - 1 === i) {
      itemStr += item;
    } else {
      itemStr += `${item} | `;
    }
    i++;
  }
  return itemStr;
}
