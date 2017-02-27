import Person from './person';

const StaticPerson = (function () {
  return new Person();
}());

export default StaticPerson;
