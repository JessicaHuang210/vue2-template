import { Table, TableColumn } from "element-ui";
const element = {
  install: function(Vue) {
    Vue.use(Table);
    Vue.use(TableColumn);
  }
};
export default element;
