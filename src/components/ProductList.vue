<template>
         <ul class="catalog__list">
          <li class="catalog__item" v-for="product in products" :key="product.id">
          <ProductItem :product_image='product.image' :product_title='product.title' :product_price='product.price' :product-color='product.colorId'/>
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
