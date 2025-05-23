/**
Represents an achievement that can be earned by the user.
@interface
@property {string} name - The name of the achievement.
@property {string} emoji - The emoji representing the achievement.
@property {string} description - The short description of the achievement.
@property {string} [longDescription] - The longer description of the achievement.
@property {number} [reward] - The reward associated with obtaining the achievement.
@property {number} [requirement] - The amount required to obtain the achievement.
@property {number} [clicksRequired] - The number of clicks required to obtain the achievement.
@property {number} [purchasesRequired] - The number of purchases required to obtain the achievement.
*/
export interface Achievement {
  name: string;
  emoji: string;
  description: string;
  longDescription: string;
  reward?: number;
  requirement?: number;
  clicksRequired?: number;
  purchasesRequired?: number;
}
/**
An object containing all the achievements that can be earned by the user.
@constant
@type {Object.<string, Achievement>}
*/
export const achievements: { [key: string]: Achievement } = {
  // очки
  honeyBeginner: {
    name: "Мед для начинающих",
    emoji: "🍯",
    description: "Заработай 100 меда",
    longDescription:
      "Вы сделали свои первые шаги в мире пчеловодства и произвели 100 сладких золотых капель меда. Продолжайте в том же духе!",
    requirement: 100,
  },
  beekeeperTrainee: {
    name: "Стажер пчеловод",
    emoji: "🍯",
    description: "Заработай 1,000 меда",
    longDescription:
      "Вы получили звание стажера-пчеловода, произведя 1000 банок меда. Ваши пчелы, должно быть, работают сверхурочно!",
    requirement: 1000,
  },
  honeyExpert: {
    name: "Эксперт по меду",
    emoji: "🍯",
    description: "Заработай 10,000 меда",
    longDescription:
      "Вы больше не начинающий пчеловод, ты эксперт по меду! Вы произвели 10 000 баночек меда и несомненно заслужили уважение своей пчелиной семьи.",
    requirement: 10000,
  },
  beekeepingMaster: {
    name: "Мастер пчеловодства",
    emoji: "🍯",
    description: "Заработай 100,000 меда",
    longDescription:
      "Вы овладели искусством пчеловодства и произвели 100 000 банок меда. Ваш мед пользуется большим спросом, и ваши пчелы очень счастливы.",
    requirement: 100000,
  },
  honeyLegend: {
    name: "Медовая легенда",
    emoji: "🍯",
    description: "Заработай 1,000,000 меда",
    longDescription:
      "Ты медовая легенда! Имея за плечами 1 000 000 баночек меда, ваш мед известен во всем мире своей сладостью и качеством.",
    requirement: 1000000,
  },
  honeyTycoon: {
    name: "Медовый магнат",
    emoji: "🍯",
    description: "Заработай 10,000,000 меда",
    longDescription:
      "Ваша пчеловодная империя растет! Произведя 10 000 000 банок меда, вы теперь медовый магнат. Продолжайте в том же духе!",
    requirement: 10000000,
  },
  honeyMagnate: {
    name: "Медовый олигарх",
    emoji: "🍯",
    description: "Заработай 100,000,000 меда",
    longDescription:
      "Вы медовый олигарх, производящий 100 000 000 баночек меда! Ваш мед пользуется спросом, а ваше имя стало нарицательным в мире пчеловодства.",
    requirement: 100000000,
  },
  honeyBaron: {
    name: "Медовый Барон",
    emoji: "🍯",
    description: "Заработай 1,000,000,000 меда",
    longDescription:
      "Произведя 1 000 000 000 банок меда, вы теперь Медовый Барон. Ваши пчелы сыты и счастливы, а ваш мед — востребованный товар.",
    requirement: 1000000000,
  },
  honeyEmpire: {
    name: "Медовая Империя",
    emoji: "🍯",
    description: "Заработай 10,000,000,000 меда",
    longDescription:
      "Вы построили медовую империю, произведя 10 000 000 000 банок меда. Ваши пчелы жужжат от гордости, а ваш мед – предмет зависти для всех остальных пчеловодов.",
    requirement: 10000000000,
  },
  honeyUniverse: {
    name: "Медовая Вселенная",
    emoji: "🍯",
    description: "Заработай 100,000,000,000 меда",
    longDescription:
      "Вы настоящий мастер пчеловодства, произведший 100 000 000 000 баночек меда, за что получили титул «Медовая Вселенная». Ваши пчелы преклоняются перед вашим величием!",
    requirement: 100000000000,
  },

  // клики
  clickingNovice: {
    name: "Новичок в нажатиях",
    emoji: "🖱️",
    description: "Нажмите 10 раз",
    longDescription:
      "Вы нажали 10 раз и получили звание «Новичок в нажатиях». Ваши навыки щелчка мышью только начинают прогрессировать!",
    clicksRequired: 10,
  },
  clickingPro: {
    name: "Профи в нажатиях",
    emoji: "🖱️",
    description: "Нажмите 100 раз",
    longDescription:
      "Имея за плечами 100 кликов, вы теперь Профи в нажатиях. Продолжайте в том же духе!",
    clicksRequired: 100,
  },
  clickingChampion: {
    name: "Чемпион в нажатиях",
    emoji: "🖱️",
    description: "Нажмите 500 раз",
    longDescription:
      "Вы нажали 500 раз и заслужили звание Чемпиона по кликам. Ваши навыки нажатия действительно впечатляют!",
    clicksRequired: 500,
  },
  clickingMaster: {
    name: "Мастер в нажатиях",
    emoji: "🖱️",
    description: "Нажмите 1000 раз",
    longDescription:
      "Вы нажали кнопку 1000 раз и теперь являетесь Мастером кликов. Ваши пальцы молниеносны, а навыки щелчка по-настоящему впечатляют.",
    clicksRequired: 1000,
  },
  clickingSuperstar: {
    name: "Суперзвезда в нажатиях",
    emoji: "🖱️",
    description: "Нажмите 5000 раз",
    longDescription:
      "Вы нажали 5000 раз и заслужили звание «Суперзвезды кликов». Ваши навыки щелчка не имеют себе равных, и вы действительно мастер искусства щелчка!",
    clicksRequired: 5000,
  },
  clickingLegend: {
    name: "Легенда нажатий",
    emoji: "🖱️",
    description: "Нажмите 10,000 раз",
    longDescription:
      "Вы — легенда кликов, сделавшая 10 000 нажатий. Ваши способности щелчка не имеют себе равных, а скорость просто поразительна.",
    clicksRequired: 10000,
  },
  clickingTitan: {
    name: "Титан в нажатиях",
    emoji: "🖱️",
    description: "Нажмите 50,000 раз",
    longDescription:
      "Вы нажали кнопку 50 000 раз и получили титул «Титан». Ваши навыки нажатия просто впечатляют и достигли такого уровня мастерства, с которым мало кто может сравниться.",
    clicksRequired: 50000,
  },
  // clickingGod: {
  //   name: "Бог в нажатиях",
  //   emoji: "🖱️",
  //   description: "Нажмите 100,000 раз",
  //   longDescription:
  //     "Вы нажали кнопку 100 000 раз и заслужили звание «Бог в нажатиях». Ваши навыки нажатия поистине божественны!",
  //   clicksRequired: 100000,
  // },
  clickingWhat: {
    name: "Не человек",
    emoji: "🖱️",
    description: "Нажмите 10,000,000 раз",
    longDescription:
      "Как вы вообще до сюда добрались?",
    clicksRequired: 10000000,
  },

  // покупки
  buyBeginner: {
    name: "Новичок шоппинга",
    emoji: "🛍️",
    description: "Купите 10 предметов",
    longDescription:
      "Вы совершили первые 10 покупок и получили звание «Новичок шоппинга». Продолжайте покупать и строить свою пчеловодческую империю!",
    purchasesRequired: 10,
  },
  buyingEnthusiast: {
    name: "Энтузиаст шоппинга",
    emoji: "🛍️",
    description: "Купите 50 предметов",
    longDescription:
      "Поздравляем, вы энтузиаст шоппинга! Вы совершили 50 покупок, продемонстрировав свою страсть и преданность пчеловодству. Продолжайте в том же духе!",
    purchasesRequired: 50,
  },
  shoppingPro: {
  name: "Профи шопинга",
  emoji: "🛍️",
  description: "Купите 100 предметов",
  longDescription:
    "Сделав 100 покупок, вы стали Профи шопинга. Ваше пчеловодческое оборудование — первоклассное, а пчёлы довольны и отлично ухожены.",
  purchasesRequired: 100,
  },
  buyTycoon: {
    name: "Магнат покупок",
    emoji: "🛍️",
    description: "Купите 500 предметов",
    longDescription:
      "Вы приобрели 500 предметов и заслужили звание Магната покупок. Ваша преданность пчеловодству и выдающиеся навыки шопинга подняли вашу империю на новые высоты!",
    purchasesRequired: 500,
  },
  buyExpert: {
    name: "Эксперт покупок",
    emoji: "🛍️",
    description: "Купите 1 000 предметов",
    longDescription:
      "Вы совершили 1 000 покупок и получили звание Эксперта покупок. Ваши знания и оборудование для пчеловодства непревзойдённы!",
    purchasesRequired: 1000,
  },
  // Сомниваюсь что кто-то до этого дойдет
  // buyingChampion: {
  //   name: "Чемпион покупок",
  //   emoji: "🛍️",
  //   description: "Купите 5 000 предметов",
  //   longDescription:
  //     "Вы совершили 5 000 покупок и получили звание Чемпиона покупок. Ваши навыки и знания пчеловодства значительно выросли, а ваши пчёлы процветают под вашим опытным уходом.",
  //   purchasesRequired: 5000,
  // },

  // buyingMaster: {
  //   name: "Мастер покупок",
  //   emoji: "🛍️",
  //   description: "Купите 10 000 предметов",
  //   longDescription:
  //     "Вы — Мастер покупок, совершивший 10 000 покупок. Ваша пчеловодческая империя стремительно растёт, а пчёлы процветают под вашим присмотром.",
  //   purchasesRequired: 10000,
  // },
  // buyingLegend: {
  //   name: "Легенда покупок",
  //   emoji: "🛍️",
  //   description: "Купите 50 000 предметов",
  //   longDescription:
  //     "Сделав 50 000 покупок, вы стали Легендой покупок. Ваша пчеловодческая империя огромна, а мёд востребован по всему миру.",
  //   purchasesRequired: 50000,
  // },
  // buyingTitan: {
  //   name: "Титан покупок",
  //   emoji: "🛍️",
  //   description: "Купите 100 000 предметов",
  //   longDescription:
  //     "Вы совершили 100 000 покупок и получили звание Титана покупок. Ваша пчеловодческая империя вызывает зависть у пчеловодов всего мира, а ваш мёд славится непревзойдённым качеством.",
  //   purchasesRequired: 100000,
  // },

  // прочее
  ShareGameEnthusiast: {
    name: "Энтузиаст репостов",
    emoji: "🔗",
    description: "Нажмите на кнопку поделится",
    longDescription:
      "Вы поделились этой удивительной игрой в социальной сети, рассказывая о чудесах пчеловодства. Продолжайте обсуждать и делиться!",
    reward: 5000,
  },
  volumeController: {
    name: "Регулятор громкости",
    emoji: "🔊",
    description: "Отрегулируйте громкость звуков игры",
    longDescription:
      "Вы взяли под свой контроль звуки игры, отрегулировав громкость по своему вкусу. Независимо от того, предпочитаете ли вы громкий или тихий звук, теперь вы сами отвечаете за звук!",
  },
  profilePicturePro: {
    name: "Ценитель профилей",
    emoji: "📷",
    description: "Измените свое фото профиля",
    longDescription:
      "Вы обновили изображение своего профиля и получили звание «Ценитель профилей». Ваша новая фотография выглядит великолепно!",
  },
};
