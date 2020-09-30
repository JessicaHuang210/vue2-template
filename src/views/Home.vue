<template>
  <div class="home">
    <ul>
      <li v-for="i in products" :key="i.prod_no">
        {{ i.prod_name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { Ajax } from "@/utils/api";
import { deepCopy } from "@/utils/format";
export default {
  name: "Home",
  data() {
    return { products: [] };
  },
  created() {
    this.get();
  },
  methods: {
    async get() {
      const { data } = await Ajax({ url: "products", method: "get" });
      this.products = deepCopy(data || []);
    }
  }
};
</script>
