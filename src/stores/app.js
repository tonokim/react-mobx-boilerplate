import { observable, computed, toJS, action } from "mobx"

class App {
  @observable text = 'abcd3'

  @action
  onChange = (e) => {
    this.text = e.target.value;
  }
  
}

export default App