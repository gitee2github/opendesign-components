<script setup lang="ts">
import { ref } from 'vue';
import { OInput } from '../index';
import { OIconDone } from '../../icon-components';

const val1 = ref('');
const val2 = ref('this is input value');
</script>
<template>
  <h4>Prefix & Suffix</h4>
  <section>
    <div>val1:{{ val1 }}</div>
    <OInput v-model="val2" />
    <OInput v-model="val2">
      <template #prefix>
        <OIconDone />
      </template>
    </OInput>
    <OInput v-model="val2">
      <template #suffix>
        <OIconDone />
      </template>
    </OInput>
    <OInput v-model="val2">
      <template #suffix> 元 </template>
    </OInput>
  </section>

  <h4>Prepend & Append</h4>
  <section>
    <OInput v-model="val2">
      <template #prepend>+86</template>
    </OInput>
    <OInput v-model="val2">
      <template #append>RMB</template>
    </OInput>
  </section>
</template>
<style lang="scss"></style>
