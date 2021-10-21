<template>
<div>
<a class="catalog__pic" href="#">
              <img :src="product_image" :alt="product_title">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                {{ product_title }}
              </a>
            </h3>

            <span class="catalog__price">
              {{ product_price }}
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" value="#73B6EA" v-model="color">
                  <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" value="#13B6EA" v-model="color">
                  <span class="colors__value" style="background-color: #13B6EA;">
                  </span>
                </label>
              </li>
            </ul>
</div>
</template>
<script>
export default {
  data() {
    return {
      color: '#73B6EA',
    };
  },
  props: ['product_image', 'product_title', 'product_price'],
};
</script>
