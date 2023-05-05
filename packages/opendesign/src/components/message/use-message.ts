import { createVNode, render } from 'vue';
import { isString } from '../_shared/is';
import { MessageParamsT } from './types';
import OMessageList from './OMessageList.vue';

const DEFAULT_OPTIONS: MessageParamsT = {
  status: 'info',
  position: 'top',
  duration: 3000,
};

const instanceMap = new Map();

const normalizeOptions = (params: MessageParamsT) => {
  const options: MessageParamsT = !params || isString(params) ? { content: params } : params;

  const normalized = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  return normalized;
};

const showMessage = (params: MessageParamsT) => {
  const { position } = params;

  const instance = instanceMap.get(position);
  if (!instance) {
    let wrap: HTMLDivElement | null = document.createElement('div');

    const vnode = createVNode(OMessageList, {
      position: params.position,
      onDestory: () => {
        if (wrap) {
          document.body.removeChild(wrap);
          wrap = null;
        }
        instanceMap.set(position, undefined);
      },
    });

    render(vnode, wrap);

    const vm = vnode.component!;
    vm.exposed?.add(params);

    instanceMap.set(position, vm);

    document.body.appendChild(wrap);
  } else {
    instance.exposed?.add(params);
  }
};

const normal = (params: MessageParamsT): void => {
  const options: MessageParamsT = normalizeOptions(params);
  showMessage({
    ...options,
    status: 'info',
  });
};

const info = (params: MessageParamsT): void => {
  const options: MessageParamsT = normalizeOptions(params);
  showMessage({
    ...options,
    status: 'info',
  });
};

const success = (params: MessageParamsT): void => {
  const options: MessageParamsT = normalizeOptions(params);
  showMessage({
    ...options,
    status: 'success',
  });
};

const warning = (params: MessageParamsT): void => {
  const options: MessageParamsT = normalizeOptions(params);
  showMessage({
    ...options,
    status: 'warning',
  });
};

const danger = (params: MessageParamsT): void => {
  const options: MessageParamsT = normalizeOptions(params);
  showMessage({
    ...options,
    status: 'danger',
  });
};

const open = (params: MessageParamsT): void => {
  const options: MessageParamsT = normalizeOptions(params);
  showMessage({
    ...options,
  });
};

const Message = {
  normal,
  info,
  success,
  warning,
  danger,
  open,
};

const useMessage = () => {
  return Message;
};

export default useMessage;
