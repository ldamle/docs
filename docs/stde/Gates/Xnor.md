---
icon: circle-plus
---

# Xnor

Класс для создания побитового оператора `XNOR`, выполняющего операцию "исключающее ИЛИ НЕ" над входными битами. Логическая операция `XNOR` возвращает `1`, если входные значения совпадают, и `0` в противном случае.

#### Примеры использования:

```typescript
let xnor1 = stde.xnor(2);
let xnor2 = stde.xnor([3, 1, 4, 2]);
let xnor3 = stde.xnor(4, 2);

let xnor1Alt = new stde.Xnor(2);
let xnor2Alt = new stde.Xnor([3, 1, 4, 2]);
let xnor3Alt = new stde.Xnor(4, 2);
```

* **Первый параметр**
  * Определяет количество групп.
  * Если передан массив, он задает длину каждой группы отдельно.
* **Второй параметр** (необязательный) определяет длину каждой группы.

Приведем таблицу истинности для `xnor1`.

| Вход | Выход |
| ---- | ----- |
| 00   | 1     |
| 01   | 0     |
| 10   | 0     |
| 11   | 1     |

Приведем таблицу истинности для `xnor2`.

| Вход 1 | Вход 2 | Вход 3 | Вход 4 | Выход |
| ------ | ------ | ------ | ------ | ----- |
| 100    | 0      | 0100   | 00     | 1111  |
| 001    | 1      | 0001   | 01     | 1111  |
| 000    | 0      | 0000   | 01     | 1110  |
| 010    | 0      | 1010   | 10     | 1101  |
| 011    | 1      | 1111   | 11     | 1101  |
| 111    | 1      | 1111   | 11     | 1101  |
| 000    | 1      | 0000   | 00     | 0111  |
| 111    | 1      | 1111   | 11     | 0101  |
| 000    | 1      | 1111   | 00     | 0000  |

Приведем таблицу истинности для `xnor3`.

| Вход 1 | Вход 2 | Вход 3 | Вход 4 | Выход |
| ------ | ------ | ------ | ------ | ----- |
| 00     | 00     | 00     | 00     | 11    |
| 01     | 01     | 01     | 01     | 11    |
| 11     | 11     | 11     | 11     | 11    |
| 10     | 10     | 10     | 10     | 11    |
| 10     | 01     | 10     | 01     | 11    |
| 00     | 01     | 00     | 11     | 10    |
| 10     | 11     | 10     | 10     | 10    |
| 00     | 10     | 00     | 00     | 01    |
| 00     | 11     | 00     | 00     | 00    |
