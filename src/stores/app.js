import { observable, computed, toJS, action } from "mobx"

class App {
  @observable text = '123'

  @action
  onChange = (e) => {
    this.text = e.target.value;
  }
  
  @action
  onChangeText = (value) => {
    this.text = value;
  }
  
}

export default App