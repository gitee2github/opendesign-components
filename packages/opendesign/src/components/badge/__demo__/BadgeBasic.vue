<script setup lang="ts">
import { OButton } from '../../button';
import '../../button/style';
import { OBadge } from '../index';
</script>

<template>
  <h4>基础用法</h4>
  <section>
    <OBadge>
      <OButton variant="solid" />
    </OBadge>
    <OBadge :value="100">
      <OButton variant="solid" />
    </OBadge>
    <OBadge value="hot">
      <OButton variant="solid" />
    </OBadge>
  </section>
</template>

<style lang="scss" scoped>
.o-badge + .o-badge {
  margin-left: 20px;
}
</style>
