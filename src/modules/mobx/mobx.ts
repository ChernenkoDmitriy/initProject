import { observable, action } from 'mobx';

class MenuStore {
  @observable show;

  constructor() {
    this.show = false;
  }
}

export default new MenuStore();