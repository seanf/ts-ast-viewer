import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import AppContainer from "./AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "./external/react-treeview.css";
import "./external/react-splitpane.css";
import {StoreState} from "./types";
import {appReducer} from "./reducers";
import {createSourceFile} from "./helpers";

const initialSourceFile = createSourceFile("");
const store = createStore<StoreState>(appReducer, {
    sourceFile: initialSourceFile,
    selectedNode: initialSourceFile
});

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById("root") as HTMLElement
);
registerServiceWorker();
