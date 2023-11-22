import dnaToRna from '../dnaToRna'

test('converts DNA to RNA', () => {
  expect(dnaToRna('GCTA')).toBe('GCUA');
  expect(dnaToRna('TTTT')).toBe('UUUU');
  expect(dnaToRna('ATGC')).toBe('AUGC');
})