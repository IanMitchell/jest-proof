import Actor from './actor';
import StaticPerson from './static-person';

describe('Actor', () => {
  test('returns default name', () => {
    const actor = new Actor();
    StaticPerson.getName = jest.fn().mockReturnValueOnce('David');
    expect(actor.getDefaultName()).toBe('David');
  });

  test('sets new game', () => {
    const actor = new Actor();
    expect(actor.setNewName('Vanessa')).toBe('Vanessa');
  });
})
