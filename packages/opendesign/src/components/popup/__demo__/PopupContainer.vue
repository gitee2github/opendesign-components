<script setup lang="ts">
import { ref } from 'vue';
import { OButton } from '../../button';
import '../../button/style';
import { OPopup } from '../index';

const content = 'this is popup content';
const btn1 = ref(null);
const btn2 = ref(null);
const btn3 = ref(null);
const btn4 = ref(null);
const btn5 = ref(null);
const btn6 = ref(null);
const btn7 = ref(null);
const btn8 = ref(null);
const btn9 = ref(null);
const visible = ref(true);
const text = ref('text');
const width = ref('50vw');
setTimeout(() => {
  // text.value += '--|';
  // width.value = '40vw';
}, 2000);
</script>
<template>
  <h4>popup container</h4>
  <div id="wrap" :style="{ width: width }">
    <div class="content">
      <OButton ref="btn1" class="btn1">TL btn1 </OButton>
      <OButton ref="btn2" class="btn2">TR btn2 </OButton>
      <OButton ref="btn3" class="btn3">TL btn3 </OButton>
      <OButton ref="btn4" class="btn4">LT btn4 </OButton>
      <OButton ref="btn5" class="btn5">TL btn5 {{ text }}</OButton>
      <OButton ref="btn6" class="btn6">TL btn6 </OButton>
      <OButton ref="btn7" class="btn7">LEFT btn7 </OButton>
      <OButton ref="btn8" class="btn8">BL btn8 </OButton>
      <OButton ref="btn9" class="btn9">LT btn9 </OButton>

      <OPopup position="tl" :target="btn1" wrapper="#wrap" trigger="click" :unmount-on-hide="false">
        <div class="popup-box">
          <div>{{ content }}</div>
          <div>{{ content }}</div>
        </div>
      </OPopup>
      <OPopup position="tr" :target="btn2" wrapper="#wrap" trigger="click">
        <div class="popup-box">
          <div>{{ content }}</div>
          <div>{{ content }}</div>
        </div>
      </OPopup>
      <OPopup v-model:visible="visible" position="tl" :target="btn3" wrapper="#wrap" trigger="click">
        <div class="popup-box">
          <div>{{ content }}</div>
          <div>{{ content }}</div>
        </div>
      </OPopup>
      <OPopup position="lt" :target="btn4" wrapper="#wrap" trigger="click">
        <div class="popup-box">
          <div>{{ content }}</div>
          <div>{{ content }}</div>
        </div>
      </OPopup>
      <OPopup position="tr" :target="btn5" wrapper="#wrap" trigger="click">
        <div class="popup-box">
          <div>{{ content }}</div>
          <div>{{ content }}</div>
        </div>
      </OPopup>
      <OPopup position="lt" :target="btn6" wrapper="#wrap" trigger="click">
        <div class="popup-box">
          <div>{{ content }}</div>
          <div>{{ content }}</div>
        </div>
      </OPopup>
      <OPopup position="left" :target="btn7" wrapper="#wrap" trigger="click">
        <div class="popup-box">
          <div>{{ content }}</div>
          <div>{{ content }}</div>
        </div>
      </OPopup>
      <OPopup position="bl" :target="btn8" wrapper="#wrap" trigger="click">
        <div class="popup-box">
          <div class="tip">{{ content }}</div>
          <div>{{ content }}</div>
        </div>
      </OPopup>
      <OPopup position="lt" :target="btn9" wrapper="#wrap" trigger="click">
        <div class="popup-box">
          <div>{{ content }}</div>
          <div>{{ content }}</div>
        </div>
      </OPopup>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#wrap {
  height: 50vh;
  width: 50vw;
  overflow: auto;
  border: 10px solid #333;
  position: relative;
  z-index: 10;
  background-color: #eee;
  // overflow: visible;
}
.content {
  height: 50vh;
  width: 80vw;

  position: relative;
  :deep(.o-btn) {
    position: absolute;
  }
}
.tip {
  white-space: nowrap;
}
.btn1 {
  left: 0;
  top: 0;
}
.btn2 {
  left: 80px;
  top: 0;
}
.btn3 {
  left: 60%;
  top: 0;
}
.btn4 {
  left: 0;
  top: 11vh;
}
.btn5 {
  right: 60%;
  top: 15vh;
}
.btn6 {
  right: 0;
  top: 15vh;
}
.btn7 {
  left: 0;
  bottom: 0;
}
.btn8 {
  left: 45vw;
  // bottom: 0;
  top: 100vh;
}
.btn9 {
  right: 0;
  bottom: 0;
}
</style>
