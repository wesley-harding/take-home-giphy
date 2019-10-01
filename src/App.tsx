import * as React from "react";
import {Route, Router, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import { configureStore } from "./store/configStore";
import createBrowserHistory from "history/createBrowserHistory";
import HomePage from "./pages/HomePage";
import index from "./sagas";
import createSagaMiddleware from "@redux-saga/core";

const store = configureStore();
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(index);

class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path="/" component={HomePage}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
