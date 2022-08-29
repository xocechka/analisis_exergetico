import { Component } from 'vue';
import { Dialog, Notify, QNotifyCreateOptions } from 'quasar';

export function usePopups() {
  function showDialog(component: Component) {
    Dialog.create({
      component,
    });
  }

  function showNotification(options: QNotifyCreateOptions) {
    Notify.create({
      type: options.type,
      message: options.message,
      position: options.position !== undefined ? options.position : 'top',
      timeout: 1000,
    });
  }

  return {
    showDialog,
    showNotification,
  };
}
