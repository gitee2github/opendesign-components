<script setup lang="ts">
import { ref, reactive } from 'vue';
import { OTab, OTabPane } from '../index';
const activeTab3 = ref('1');
const tabChange = (val: string | number, oldVal?: string | number) => {
  console.log(`active: ${val}, old: ${oldVal}`);
};
function getPanelItem(key: string) {
  return {
    id: key,
    label: `Nav ${key}`,
    content: `Panel Content: ${key}`,
  };
}
const tabList = reactive(
  new Array(8).fill(1).map((k, idx) => {
    return getPanelItem(`${idx + 1}`);
  })
);
const tabAdd = () => {
  console.log('add tab');
  tabList.push(getPanelItem(`${tabList.length + 1}`));
  // nextTick(() => {
  //   activeTab3.value = `${tabList.length + 1}`;
  // });
};

const tabDelete = (v: string | number) => {
  console.log(v);
};
</script>
<template>
  <h4>scroll</h4>
  <div class="sec">
    <OTab v-model="activeTab3" addable @change="tabChange" @add="tabAdd" @delete="tabDelete">
      <OTabPane v-for="(item, idx) in tabList" :key="item.id" :value="item.id" class="pane" :label="item.label" :closable="idx > 1">
        content {{ item.content }}
      </OTabPane>
    </OTab>
  </div>
</template>
<style lang="scss">
.sec {
  border: 1px solid #eee;
  padding: 24px;
  margin-bottom: 24px;
}
.pane {
  padding: 36px;
  background-color: #fff;
}
</style>
