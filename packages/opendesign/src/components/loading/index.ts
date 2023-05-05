import type { App } from 'vue';
import _OLoading from './OLoading.vue';
import { vLoading } from './v-loading';
import useLoading from './use-loading';

const OLoading = Object.assign(_OLoading, {
  vLoading,
  useLoading,
  install(app: App) {
    app.component(_OLoading.name, _OLoading);
  },
});

export { OLoading, vLoading, useLoading };
