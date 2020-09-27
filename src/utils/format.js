import _ from "lodash";
export const deepCopy = source => {
  return _.cloneDeep(source);
};
