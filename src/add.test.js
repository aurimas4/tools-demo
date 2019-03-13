import add from './add';

describe('add', () => {
    test('integer', () => {
        expect(add(1, 2)).toStrictEqual(3);
    });

    test('failing test', () => {
        expect(add(1, 3)).toStrictEqual(4);
    });
});