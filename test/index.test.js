import shorthandsResolver from '../src';

test('returns correct value on flex 1', () => {
  const resolver = shorthandsResolver();
  expect(resolver.resolve({ key: 'flex', value: 1 })).toEqual({
    flexGrow: 1,
  });
});

test('does not match when flex is excluded', () => {
  const keys = (defaultKeys) => defaultKeys.filter((k) => k !== 'flex');
  const resolver = shorthandsResolver({ keys });

  expect(resolver.match({ key: 'flex', value: 1 })).toEqual(false);
});
