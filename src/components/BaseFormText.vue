<template>
    <BaseFormField :title="ФИО" :error="error">
              <input v-model="dataValue" class="form__input" type="text" name="name" :placeholder="placeholder">
              </BaseFormField>
</template>

<script>
import formFieldMixin from '@/mixins/formFieldMixin';

export default {
  mixins: [formFieldMixin],
};
</script>
