<template>
      <section class="catalog">
        <ProductList :products="products"/>
        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage" />
      </section>
</template>

<script>
import products from './data/products';
import ProductList from './components/ProductList.vue';
import BasePagination from './components/BasePagination.vue';

export default {
  name: 'App',
  components: { BasePagination, ProductList },
  data() {
    return {
      page: 1,
      productsPerPage: 3,
    };
  },
  computed: {
    products() {
      const start = (this.page - 1) * this.productsPerPage;
      return products.slice(start, start + this.productsPerPage);
    },
    countProducts() {
      return products.length;
    },
  },
};
</script>
