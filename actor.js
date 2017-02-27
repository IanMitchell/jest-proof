import 'babel-polyfill';
import StaticPerson from './static-person';

export default class {
  getDefaultName() {
    return StaticPerson.getName();
  }

  setNewName(name) {
    StaticPerson.setName(name);
    return StaticPerson.getName();
  }
}
