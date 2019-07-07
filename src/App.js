
import React from "react";

import { decorate, observable, action, computed, toJS } from "mobx"
import { inject, observer, Provider } from "mobx-react";
import { hot } from 'react-hot-loader'

class State {
  @observable text = "123"; // observable state
  onChange = e => (this.text = e.target.value); // action
}
// decorate(State, { text: observable });
const appState = new State();

const Display = inject(["store"])(
  observer(({ store }) => <div>Display: {store.text}</div>)
);

// const Input = inject(["store"])(
//   observer(
  @inject('store')
  @observer
    class Input extends React.Component {
      render() {
        // reaction
        return (
          <div>
          12
            <input type="text" onChange={this.props.store.onChange} />
          </div>
        );
      }
    }
//   )
// );

// look ma, no props
let App = () => (
  <Provider store={appState}>
    <React.Fragment>
      <Display />
      <Input />
    </React.Fragment>
  </Provider>
);


// App = hot(module)(App)
export default hot(module)(App)
