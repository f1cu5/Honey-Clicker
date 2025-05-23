/**
 * Represents an item that can be purchased in the clicker game.
 * @interface
 * @property {string} name - The name of the item.
 * @property {number} cost - The cost of the item in honey.
 * @property {number} multiplier - The multiplier that the item applies to honey production.
 * @property {number} perSecond - The amount of honey produced per second by the item.
 * @property {string} description - A description of the item.
 * @property {string} [emoji] - An optional emoji representing the item.
 */
export interface Item {
  name: string;
  cost: number;
  multiplier: number;
  perSecond: number;
  description: string;
  emoji?: string;
}

/**
 * An object containing all the items that can be purchased in the game.
 * @constant
 * @type {Object<string, Item>}
 */
export const items: { [key: string]: Item } = {
  smallBee: {
    name: "Очень маленькая пчела",
    cost: 20,
    multiplier: 0.5,
    perSecond: 2,
    description:
      "Крошечная пчела, которая производит мало мёда, но отлично подходит как первый житель вашего улья.",
    emoji: "🐝",
  },

  workerBee: {
    name: "Рабочая пчела",
    cost: 100,
    multiplier: 2,
    perSecond: 5,
    description:
      "Опора любой пчелиной семьи: эта пчела неустанно собирает нектар и пыльцу и производит мёд.",
    emoji: "🐝",
  },

  honeycomb: {
    name: "Соты",
    cost: 500,
    multiplier: 5,
    perSecond: 20,
    description:
      "Шестиугольная восковая структура, которую пчёлы строят для хранения мёда и выращивания расплода.",
    emoji: "🍯",
  },

  beekeepersHat: {
    name: "Шляпа пчеловода",
    cost: 1000,
    multiplier: 10,
    perSecond: 30,
    description:
      "Шляпа с сеткой, защищающая голову и лицо пчеловода от укусов пчёл.",
    emoji: "🧢",
  },

  queenBee: {
    name: "Королева пчела",
    cost: 2500,
    multiplier: 25,
    perSecond: 50,
    description:
      "Правительница улья: матка откладывает все яйца и поддерживает социальный порядок в семье.",
    emoji: "👑",
  },

  droneBee: {
    name: "Трутень",
    cost: 5000,
    multiplier: 50,
    perSecond: 100,
    description:
      "Самец-трутень, чья единственная задача — спариться с маткой. Необходим для выживания семьи.",
    emoji: "🐝",
  },

  goldenFlower: {
    name: "Золотой цветок",
    cost: 12500,
    multiplier: 75,
    perSecond: 180,
    description:
      "Редкий цветок, дающий мёд с особым вкусом и высокой питательной ценностью.",
    emoji: "🌻",
  },

  honeyPot: {
    name: "Горшочек мёда",
    cost: 20000,
    multiplier: 100,
    perSecond: 250,
    description:
      "Горшочек, наполненный вкусным золотистым мёдом, готовым к употреблению человеком.",
    emoji: "🍯",
  },

  beeSuit: {
    name: "Костюм пчеловода",
    cost: 100000,
    multiplier: 500,
    perSecond: 1000,
    description:
      "Защитный костюм, полностью закрывающий тело и предохраняющий от укусов пчёл.",
    emoji: "👩‍🚀",
  },

  hive: {
    name: "Улей",
    cost: 500000,
    multiplier: 1000,
    perSecond: 2000,
    description:
      "Сооружение из воска и прополиса, в котором живёт пчелиная семья.",
    emoji: "🏡",
  },

  royalJelly: {
    name: "Маточное молочко",
    cost: 1000000,
    multiplier: 2000,
    perSecond: 5000,
    description:
      "Особое вещество, выделяемое рабочими пчёлами и предназначенное исключительно для кормления матки и её личинок.",
    emoji: "👑",
  },

  pollinatorDrone: {
    name: "Опылительный дрон",
    cost: 2500000,
    multiplier: 3000,
    perSecond: 7500,
    description:
      "Специализированный дрон, созданный для массового опыления цветов, значительно повышающий эффективность работы улья.",
    emoji: "🚁",
  },

  royalHive: {
    name: "Королевский улей",
    cost: 5000000,
    multiplier: 5000,
    perSecond: 10000,
    description:
      "Роскошный улей, достойный королевы, с просторными камерами и обилием места для её свиты.",
    emoji: "🏰",
  },

  apiary: {
    name: "Пасека",
    cost: 10000000,
    multiplier: 7500,
    perSecond: 15000,
    description:
      "Собрание ульев, используемое для промышленного производства мёда.",
    emoji: "🏭",
  },

  pollenCollector: {
    name: "Сборщик пыльцы",
    cost: 25000000,
    multiplier: 10000,
    perSecond: 20000,
    description:
      "Машина, автоматически собирающая пыльцу с цветов, немного облегчающая труд пчёл.",
    emoji: "🌼",
  },

  royalBee: {
    name: "Королевская пчела",
    cost: 50000000,
    multiplier: 15000,
    perSecond: 30000,
    description:
      "Величественная пчела с короной, известная превосходным сбором пыльцы и изящными золотыми крыльями.",
    emoji: "🐝",
  },

  diamondHive: {
    name: "Алмазный улей",
    cost: 100000000,
    multiplier: 25000,
    perSecond: 50000,
    description:
      "Улей, полностью выполненный из алмаза — высший символ роскоши и престижа.",
    emoji: "💎",
  },

  honeyExtractor: {
    name: "Медогонка",
    cost: 500000000,
    multiplier: 50000,
    perSecond: 100000,
    description:
      "Устройство, вращающее соты и извлекающее мёд с помощью центробежной силы.",
    emoji: "🍯",
  },

  beehiveObservatory: {
    name: "Пчелиная обсерватория",
    cost: 1000000000,
    multiplier: 150000,
    perSecond: 350000,
    description:
      "Современная пчелиная обсерватория с высокотехнологичными камерами и датчиками для изучения поведения пчёл в их среде обитания.",
    emoji: "🔭",
  },

  beeMuseum: {
    name: "Пчелиный музей",
    cost: 5000000000,
    multiplier: 750000,
    perSecond: 1500000,
    description:
      "Место, посвящённое истории, культуре и науке о пчёлах и мёде.",
    emoji: "🏛️",
  },

  honeyBeeStatue: {
    name: "Статуя медоносной пчелы",
    cost: 10000000000,
    multiplier: 2000000,
    perSecond: 4000000,
    description:
      "Статуя медоносной пчелы из чистого золота — вершина достижений в пчеловодстве.",
    emoji: "🗽",
  },

  programmerBee: {
    name: "Пчела-программист",
    cost: 50000000000,
    multiplier: 10000000,
    perSecond: 250000000,
    description:
      "Высококвалифицированная пчела, способная писать код на JavaScript, React, TypeScript и других языках, с богатым опытом фронтенд-разработки.",
    emoji: "🐝💻",
  },
};
