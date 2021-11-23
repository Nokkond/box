<template>
<div>
<header class="header">
    <div class="header__wrapper container">
      <span class="header__info">Каталог</span>

      <a class="header__logo" href="#">
        <img src="img/svg/logo-tech.svg" alt="Логотип интернет магазина Технозавррр" width="190" height="33">
      </a>

      <a class="header__tel" href="tel:8 800 600 90 09">
        8 800 600 90 09
      </a>

      <div v-if="cartLoading">загрузка...</div>
      <CartIndicator v-else/>
    </div>
  </header>

<div class="preloader" v-if="cartLoading">
              <div class="circle circle-1"></div>
              <div class="circle circle-2"></div>
              <div class="circle circle-3"></div>
              <div class="circle circle-4"></div>
              <div class="circle circle-5"></div>
            </div>
<router-view v-else/>

<footer class="footer">
    <div class="footer__wrapper container">
      <ul class="footer__links">
        <li>
          <a class="footer__link" href="#">
            Каталог
          </a>
        </li>
        <li>
          <a class="footer__link" href="tel:88006009009">
            8 800 600 90 09
          </a>
        </li>
        <li>
          <a class="footer__link" href="mailto:hi@technozavrrr.com">
            hi@technozavrrr.com
          </a>
        </li>
        <li>
          <a class="footer__link" href="#">
            Распродажа
          </a>
        </li>
        <li>
          <a class="footer__link footer__link--medium" href="#">
            Заказать звонок
          </a>
        </li>
      </ul>

      <ul class="footer__social social">
        <li class="social__item">
          <a class="social__link" href="#" aria-label="Вконтакте">
            <svg width="20" height="11" fill="currentColor">
              <use xlink:href="#icon-vk"></use>
            </svg>
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="#" aria-label="Инстаграм">
            <svg width="17" height="17" fill="currentColor">
              <use xlink:href="#icon-insta"></use>
            </svg>
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="#" aria-label="Facebook">
            <svg width="17" height="17" fill="currentColor">
              <use xlink:href="#icon-facebook"></use>
            </svg>
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="#" aria-label="Twitter">
            <svg width="17" height="14" fill="currentColor">
              <use xlink:href="#icon-twitter"></use>
            </svg>
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="#" aria-label="Telegram">
            <svg width="19" height="17" fill="currentColor">
              <use xlink:href="#icon-telegram"></use>
            </svg>
          </a>
        </li>
      </ul>

      <p class="footer__desc">
        Все права на&nbsp;материалы, находящиеся на&nbsp;сайте, охраняются в&nbsp;соответствии с&nbsp;законодательством&nbsp;РФ,
        в&nbsp;том числе об&nbsp;авторском праве и&nbsp;смежных правах.
      </p>
      <ul class="footer__data">
        <li>
          <a class="footer__link" href="#" target="_blank" rel="noopener" type="application/pdf">
            Политика конфиденциальности
          </a>
        </li>
        <li>
          <a class="footer__link" href="#" target="_blank" rel="noopener" type="application/pdf">
            Публичная оферта
          </a>
        </li>
      </ul>

      <span class="footer__copyright">
        © 2020 Технозавррр
      </span>
    </div>
  </footer>

  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import CartIndicator from '@/components/CartIndicator.vue';

export default {
  data() {
    return {
      cartLoading: false,
      cartLoadingFailed: false,
    };
  },
  components: { CartIndicator },
  created() {
    const userAccessKey = localStorage.getItem('userAccessKey');
    if (userAccessKey) {
      this.updateUserAccessKey(userAccessKey);
    }
    this.loadCart();
  },
  methods: {
    ...mapActions(['loadCart']),
    ...mapMutations(['updateUserAccessKey']),
    preloadCart() {
      this.cartLoading = true;
      this.cartLoadingFailed = false;
      clearTimeout(this.loadCartTimer);
      this.loadCartTimer = setTimeout(() => {
        this.loadCart()
          .then(() => { this.cartLoading = false; })
          .catch(() => { this.cartLoadingFailed = true; });
      }, 5000);
    },
  },
};
</script>

<style>
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  overflow: hidden;
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle:before {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  opacity: 0.7;
  animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
}
.circle-1 {
  background-color: #49e5b1;
}
.circle-1:before {
  background-color: #49e5ac;
  animation-delay: 200ms;
}
.circle-2 {
  background-color: #1ed4a6;
}
.circle-2:before {
  background-color: #1ed4bf;
  animation-delay: 400ms;
}
.circle-3 {
  background-color: #2ad0bd;
}
.circle-3:before {
  background-color: #2ad0cb;
  animation-delay: 600ms;
}
.circle-4 {
  background-color: #3abcc8;
}
.circle-4:before {
  background-color: #3ac8bc;
  animation-delay: 800ms;
}
.circle-5 {
  background-color: #50bebe;
}
.circle-5:before {
  background-color: #50beac;
  animation-delay: 1000ms;
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50%, 75% {
    transform: scale(2.5);
  }
  78%, 100% {
    opacity: 0;
  }
}
</style>
