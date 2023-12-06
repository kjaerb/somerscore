type Messages = typeof import("./public/locales/en.json");

declare type Messages = Messages;

declare interface IntlMessages extends Messages {}
