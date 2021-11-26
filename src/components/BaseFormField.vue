<template>
    <label class="form__label">
        <slot/>
              <span class="form__value">ФИО</span>
              <span class="form__error" v-if="formError.name">{{formError.name}}</span>
    </label>
</template>
<script>

export default {
  props: ['title', 'error'],
};
</script>
