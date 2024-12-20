---
icon: corner
---

# Not

Класс для создания логического вентиля `NOT`, выполняющего операцию "НЕ" над входными битами. Логическая операция `NOT` возвращает `1`, если входной соответствующий бит равен `0` и `1` в ином случае.

#### Примеры использования

```typescript
let not1 = stde.not(3);
let not2 = stde.not(18);

let not1Alt = new stde.Not(3);
let not2Alt = new stde.Not(18);
```

* **Первый параметр** задает количество входов и выходов

Приведем таблицу истинности для `not1`.

| Вход | Выход |
| ---- | ----- |
| 000  | 111   |
| 001  | 110   |
| 010  | 101   |
| 011  | 100   |
| 100  | 011   |
| 101  | 010   |
| 110  | 001   |
| 111  | 000   |
