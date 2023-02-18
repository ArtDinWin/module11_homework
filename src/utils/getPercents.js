/*
Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.
Пояснение: например, getPercents(30, 200) должно вернуть 60.
*/
export function getPercents(percent, number) {
  if (!isNaN(+percent) && !isNaN(+number)) {
    return (percent / 100) * number;
  } else {
    return "Некорректные данные";
  }
}
