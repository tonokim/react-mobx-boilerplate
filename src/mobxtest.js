// https://dev.to/swyx/introduction-to-mobx-4-for-reactredux-developers-3k07



import React from "react";
import { render } from "react-dom";
import { decorate, observable, action, computed, toJS } from "mobx"
import { inject, observer, Provider } from "mobx-react";
import { hot } from 'react-hot-loader'

class State {
  text = ""; // observable state
  onChange = e => (this.text = e.target.value); // action
}
decorate(State, { text: observable });
const appState = new State();

const Display = inject(["store"])(
  observer(({ store }) => <div>Display: {store.text}</div>)
);

const Input = inject(["store"])(
  observer(
    class Input extends React.Component {
      render() {
        // reaction
        return (
          <div>
          1
            <input type="text" onChange={this.props.store.onChange} />
          </div>
        );
      }
    }
  )
);

// look ma, no props
const App = () => (
  <Provider store={appState}>
    <React.Fragment>
      <Display />
      <Input />
    </React.Fragment>
  </Provider>
);

export default hot(module)(App)