import lodash from "lodash";

export function paginate(items,  pageSize, pageNumber) {   // update
  const startIndex = (pageNumber - 1) * pageSize;
  return lodash(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
