import { History } from "history";
import { RouterStore } from ".";
import { autorun } from "mobx";
// import _ from "lodash";

export const RootStore = (history: History) => {
  // const appStore = new ApplicationStore(this).store;
  // const componentStore = new ComponentStore(this).store;
  // const settingsStore = new SettingsStore(this).store;
  autorun(() => {});
  return {
    routerStore: new RouterStore(history)
  };
};
