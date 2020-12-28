import { Table, TableColumn, Form, FormItem, Input, Button } from "element-ui";
const element = {
  install: function(Vue) {
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Input);
    Vue.use(Button);
  }
};
export default element;
