import { observable, computed, toJS, action } from "mobx"

class User {
  constructor(rootStore) {
    this.rootStore = rootStore
  }
  @observable text = '1234'

  @action
  onChange = (e) => {
    this.text = e.target.value;
  }
  
  @action
  onChangeText = (value) => {
    this.text = value;
  }
  
}

export default User
