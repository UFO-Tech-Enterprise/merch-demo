import type { MessageInstance } from "antd/es/message/interface";
import type { NotificationInstance } from "antd/es/notification/interface";

let messageInstance: MessageInstance | null = null;
let notificationInstance: NotificationInstance | null = null;

export const registerNotify = (message: MessageInstance, notification: NotificationInstance) => {
  messageInstance = message;
  notificationInstance = notification;
};

export const notify = {
  get message() {
    if (!messageInstance) {
      throw new Error("notify.message used before AppProviders mounted registerNotify");
    }
    return messageInstance;
  },
  get notification() {
    if (!notificationInstance) {
      throw new Error("notify.notification used before AppProviders mounted registerNotify");
    }
    return notificationInstance;
  },
};
