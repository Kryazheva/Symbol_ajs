import Team from '../Team';

test('test throwError', () => {
  const team = new Team();
  const char1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  team.add(char1);
  expect(() => team.add(char1)).toThrowError();
});

test('Team iterate', () => {
  const team = new Team();
  const char1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const char2 = {
    name: 'Мечник',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 20,
    defence: 40,
  };

  team.addAll(char1, char2);

  const result = [];
  for (const key of team) {
    result.push(key);
  }

  expect(result).toEqual([char1, char2]);
});
