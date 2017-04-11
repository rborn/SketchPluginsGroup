import test from 'ava';
import { getJSONValues } from './src/content/json';

const value = {
  name: 'name',
  prop: 'prop',
  nested: {
    name: 'nested-name'
  },
  values: [1, 2, 3],
  list: [
    { name: 'item0' },
    null,
    { name: 'item1' },
    null,
    { name: 'item2' },
    null,
    undefined
  ],
  nestedlist: {
    list: {
      inside: [
        1, 2, 3
      ],
      objects: [
        { name: 'item0' },
        { name: 'item1' },
        { name: null },
        { name: 'item2' }
      ],
      missing: [
        { name: 'item0' },
        { name: null },
        { name: 'item2' }
      ]
    }
  },
  veryNested: [
    { person: { name: 'item0' } },
    { person: { name: 'item1' } },
    { person: { name: true } },
    { person: { name: false } },
    { nope: { name: 'item2' } }
  ]
};

test((t: any) => {
    t.deepEqual([1, 2], [1, 2]);
    t.deepEqual(getJSONValues(value, [], ['name']), ['name']);
    t.deepEqual(getJSONValues(value, [], ['prop']), ['prop']);
    t.deepEqual(getJSONValues(value, [], ['nested', 'name']), ['nested-name']);
    t.deepEqual(getJSONValues(value, [], ['values']), [1, 2, 3]);
    t.deepEqual(getJSONValues(value, ['list'], ['name']), ['item0', 'item1', 'item2']);
    t.deepEqual(getJSONValues(value, [], ['nestedlist', 'list', 'inside']), [1, 2, 3]);
    t.deepEqual(getJSONValues(value, ['nestedlist', 'list', 'objects'], ['name']), ['item0', 'item1', 'item2']);
    t.deepEqual(getJSONValues(value, ['nestedlist', 'list', 'missing'], ['name']), ['item0', 'item2']);
    t.deepEqual(getJSONValues(value, ['veryNested'], ['person', 'name']), ['item0', 'item1', 'true', 'false']);
    t.deepEqual(getJSONValues({ time: 123 }, [], ['time']), ['123']);
    t.deepEqual(getJSONValues({ values: [1, 2, 3, 4, 5] }, ['values'], []), [1, 2, 3, 4, 5]);
    t.deepEqual(getJSONValues([1, 2, 3], [], []), [1, 2, 3]);
    t.deepEqual(getJSONValues([{ 'name': 'tomas' }, { 'name': 'patrik' }], [], ['name']), ['tomas', 'patrik']);
});
