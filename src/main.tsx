import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { createBrowserHistory } from "history";
import { RootStore } from "./app/stores/createRootStore";
import { App } from "app";
// import io from "socket.io-client";
// import { onPatch, applyPatch } from "mobx-state-tree";
// import { observable } from "mobx";

require("./theme/semantic.min.css");
require("./app/styles.global.css");

const history = createBrowserHistory();
const rootStore = RootStore(history);

ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);
