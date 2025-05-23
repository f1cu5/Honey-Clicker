/**
 * Форматирует разницу между заданной датой и текущим временем
 * в человекочитаемом виде на русском языке
 * (например: «5 дней назад», «1 час назад», «30 минут назад»).
 *
 * @param {string} createdAt — строка-дата, от которой считается разница.
 * @returns {string} Строка с информацией о времени, прошедшем с указанной даты.
 */
export const formatTimeAgo = (createdAt: string): string => {
  /** 
   * Возвращает корректную форму существительного в зависимости от числа.
   * @param n  Число
   * @param forms  [«1», «2–4», «0 или 5–9»] — формы слова
   */
  const plural = (n: number, forms: [string, string, string]): string => {
    const nAbs = Math.abs(n) % 100;
    const n1 = nAbs % 10;

    if (nAbs > 10 && nAbs < 20) return forms[2];
    if (n1 > 1 && n1 < 5) return forms[1];
    if (n1 === 1) return forms[0];
    return forms[2];
  };

  const diffMs = Date.now() - new Date(createdAt).getTime();
  const diffDays = Math.floor(diffMs / 86_400_000);        // 1 день  = 86 400 000 мс
  const diffHrs  = Math.floor((diffMs % 86_400_000) / 3_600_000); // 1 час  = 3 600 000 мс
  const diffMins = Math.round(((diffMs % 86_400_000) % 3_600_000) / 60_000); // 1 мин = 60 000 мс

  if (diffDays > 0) {
    return `${diffDays} ${plural(diffDays, ['день', 'дня', 'дней'])} назад`;
  } else if (diffHrs > 0) {
    return `${diffHrs} ${plural(diffHrs, ['час', 'часа', 'часов'])} назад`;
  } else {
    return `${diffMins} ${plural(diffMins, ['минута', 'минуты', 'минут'])} назад`;
  }
};

