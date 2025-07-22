console.group('--- Завдання 1 ---');

const set = new Set([1, 2, 3]);
console.log('Hаявність елемента зі значенням 3', set.has(3));
console.log('Hаявність елемента зі значенням 4', set.has(4));

set.add(4).add(5).add(6).add(7);
console.log('Set після додавання нових елементів', set);

console.log('Set в циклі for..of:');
for (const s of set) {
  console.log('Елемент :>> ', s);
}

let result = 0;

set.forEach((s) => (result += s));

console.log('Сума значень :>>', result);

set.delete(2);
console.log('Set після видалення 2:', set);

set.clear();

console.groupEnd();
