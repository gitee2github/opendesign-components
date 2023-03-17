<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { PrestColorPool } from '../_shared/utils';
import HtmlTag from '../_shared/components/html-tag';

import { figureProps } from './types';

const props = defineProps(figureProps);

const emits = defineEmits<{ (e: 'error'): void }>();

const isLoading = ref(true);
const isError = ref(false);
const prestColor = PrestColorPool.pick();

const bgSrc = computed(() => {
  if (props.background && props.ratio) {
    return `url(${props.src})`;
  }
  return '';
});

const paddingTop = computed(() => {
  if (props.ratio) {
    return `${((1 / props.ratio) * 100).toFixed(2)}%`;
  }
  return '';
});

const fit = computed(() => props.fit);
const position = computed(() => props.position);

const onImgLoaded = () => {
  isLoading.value = false;
  isError.value = false;
};
const onImgError = () => {
  isLoading.value = false;
  isError.value = true;
  emits('error');
};

watch(
  () => props.src,
  (src?: string) => {
    if (src && props.background) {
      const img = document.createElement('img');
      img.onload = onImgLoaded;
      img.onerror = onImgError;
      img.src = src;
    }
  },
  { immediate: true }
);
</script>
<template>
  <HtmlTag
    :tag="!!props.href ? 'a' : 'div'"
    class="o-figure"
    :href="props.href"
    :class="{
      'is-loading': isLoading,
      'is-error': isError,
      'o-figure-hoverable': props.hoverable || !!props.href,
    }"
    :style="{
      '--figure-prest-color': prestColor,
      '--figure-padding-top': paddingTop,
      '--figure-fit': fit,
      '--figure-position': position,
    }"
  >
    <template v-if="props.src">
      <div
        v-if="paddingTop"
        class="o-figure-wrapper"
        :class="{
          'o-figure-bg': props.background,
        }"
        :style="{
          backgroundImage: bgSrc,
        }"
      >
        <img v-if="!props.background && !isError" :src="props.src" :alt="props.alt" class="o-figure-img-ratio" @load="onImgLoaded" @error="onImgError" />
      </div>
      <img v-else-if="!isError" :src="props.src" :alt="props.alt" class="o-figure-img" @load="onImgLoaded" @error="onImgError" />
    </template>
    <slot></slot>
  </HtmlTag>
</template>