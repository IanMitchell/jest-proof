import Actor from './actor';
import StaticPerson from './static-person';

describe('Actor', () => {
  // Passes
  test('returns default name', () => {
    const actor = new Actor();
    StaticPerson.getName = jest.fn().mockReturnValueOnce('David');
    expect(actor.getDefaultName()).toBe('David');
  });

  // Fails (because of the mock from above)
  test('sets new game', () => {
    const actor = new Actor();
    expect(actor.setNewName('Vanessa')).toBe('Vanessa');
  });
})
