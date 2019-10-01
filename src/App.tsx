import * as React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import HomePage from './pages/HomePage';
import {createBrowserHistory} from 'history';
import {store} from './store/configStore';

const history = createBrowserHistory();

class App extends React.Component {
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
