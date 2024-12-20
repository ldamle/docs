---
icon: ampersand
---

# And

Класс предназначен для создания побитового оператора `AND`, который выполняет логическую операцию И над входными битами.

<iframe height="300" style={{width: "100%;"}} scrolling="no" title="Untitled" src="https://codepen.io/pluttan/embed/rNXpEeJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pluttan/pen/rNXpEeJ">
  Untitled</a> by pluttan (<a href="https://codepen.io/pluttan">@pluttan</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### Примеры использования:

```typescript
let and1 = stde.and(2);
let and2 = stde.and([3, 1, 4, 2]);
let and3 = stde.and(4, 2);

let and1Alt = new stde.And(2);
let and2Alt = new stde.And([3, 1, 4, 2]);
let and3Alt = new stde.And(4, 2);
```

- **Первый параметр**
  - Задает количество групп.
  - Если передан массив, он задает длину каждой группы отдельно.
- **Второй параметр** (необязательный) определяет длину каждой группы.

Приведем таблицу истинности для `and1`.

| Вход | Выход |
| ---- | ----- |
| 00   | 0     |
| 01   | 0     |
| 10   | 0     |
| 11   | 1     |

Приведем таблицу истинности для `and2`.

| Вход 1 | Вход 2 | Вход 3 | Вход 4 | Выход |
| ------ | ------ | ------ | ------ | ----- |
| 000    | 0      | 0000   | 01     | 0000  |
| 001    | 1      | 0001   | 01     | 0001  |
| 010    | 0      | 0010   | 10     | 0010  |
| 011    | 1      | 0011   | 11     | 0011  |
| 100    | 0      | 0100   | 00     | 0100  |
| 111    | 1      | 0111   | 11     | 0111  |
| 000    | 1      | 1000   | 00     | 1000  |
| 111    | 1      | 1111   | 11     | 1111  |

Приведем таблицу истинности для `and3`.

| Вход 1 | Вход 2 | Вход 3 | Вход 4 | Выход |
| ------ | ------ | ------ | ------ | ----- |
| 00     | 00     | 00     | 00     | 00    |
| 10     | 01     | 10     | 01     | 00    |
| 01     | 01     | 01     | 10     | 00    |
| 00     | 10     | 00     | 11     | 00    |
| 10     | 00     | 11     | 00     | 00    |
| 11     | 11     | 11     | 11     | 11    |
