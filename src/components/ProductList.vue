<template>
         <ul class="catalog__list">
          <li class="catalog__item" v-for="(product, index)  in products" :key="index">
          <ProductItem :product_image='product.image' :product_title='product.title' :product_price='product.price'/>
          </li>
        </ul>
</template>
<script>
import ProductItem from './ProductItem.vue';

export default {
  components: { ProductItem },
  props: ['products'],
};
</script>
