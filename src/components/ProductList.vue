<template>
         <ul class="catalog__list">
          <ProductItem class="catalog__item" v-for="product in products" :key="product.id" :product_image='product.image' :product_title='product.title' :product_price='product.price' :product-color='product.colorId' @gotoPage="(pageName, pageParams) => $emit('gotoPage', pageName, pageParams)"/>
        </ul>
</template>
<script>
import ProductItem from './ProductItem.vue';

export default {
  components: { ProductItem },
  props: ['products'],
};
</script>
