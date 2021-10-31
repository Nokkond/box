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
              <li class="colors__item" v-for="color in productColor" :key="color">
                <label class="colors__label">
                  <input class="colors__radio sr-only" name="color" type="radio">
                  <span class="colors__value" :style="{'background-color': colorconnect(color)}" >
                  </span>
                </label>
              </li>
            </ul>
</div>
</template>
<script>
import colors from '../data/colors';

export default {
  props: ['product_image', 'product_title', 'product_price', 'productColor'],
  computed: {
    colors() {
      return colors;
    },
  },
  methods: {
    colorconnect(colorI) {
      return colors.find((e) => e.id === colorI)?.title;
    },
  },
};
</script>
