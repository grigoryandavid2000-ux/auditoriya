const STORAGE_KEY = "auditoria-modernized-v1";

const defaults = {
  fields: {
    projectTitle: "Модернизация аудитории 6235 для проектной работы",
    objectType: "Компьютерный класс",
    roomNumber: "СПбГТИ (ТУ), ФЭМ, аудитория 6235",
    audience: "Студенты 1-4 курсов, преподаватели",
    uniqueness: "Исследуется аудитория 6235, так как она является одной из самых маленьких по площади на факультете экономики и менеджмента. Главная проблема аудитории в том, что в ней не может поместиться вся учебная группа, что и отличает этот объект от других проектов.",
    projectGoal: "Создание места для комфортного отдыха студентов между занятиями, а также его модернизация на случай проведения занятий в этой аудитории.",
    noBudgetPlan: "Если денег почти нет, делаем все, что можем, своими силами: переставляем столы, связываем кабели стяжками, проветриваем по графику вместо кондиционера, подкладываем книги под мониторы, делаем разминку вместо эргономичных кресел. Из того, что придется купить: подержанный XGA-проектор за 3000 рублей, вместо экрана - лист оргалита, покрытый белой краской, за 500 рублей, 8 пластиковых табуретов за 6400 рублей, столы бесплатно с «Авито», летом - вентилятор за 1500 рублей. Системные блоки, мониторы, клавиатуры, мыши, нормальные кресла и ИБП в этом варианте некуда ставить - либо студенты приходят со своими ноутбуками, либо техники вообще нет. Итого около 11 000 рублей, но это решение только для экстренного старта. Компромиссы: плохая картинка, жесткие сиденья, никакой защиты от скачков напряжения и кондиционера.",
    budgetPlan: "Закупаем все сразу, не переплачивая за бренды. Проектор Full HD LED за 14 000 рублей с ресурсом 30 000 часов, ручной экран 200x150 см за 5000 рублей. Восемь стульев Eames за 16 000 рублей - пластик, экокожа, легко моются. Два стола, собранных своими руками из мебельных щитов и стальных опор, за 10 000 рублей - в 2-3 раза дешевле готовых. Сплит-система за 22 000 рублей без лишних функций. Двадцать системных блоков по 35 000 рублей (i3/Ryzen 5, 16 ГБ ОЗУ, SSD 480 ГБ, без дискретной видеокарты). Двадцать мониторов 24 дюйма с IPS-матрицей по 5500 рублей с антибликовым покрытием и защитой для глаз. Двадцать комплектов проводных клавиатур и мышей по 800 рублей. Двадцать ученических кресел по 6000 рублей с газлифтом и моющейся обивкой. Десять ИБП по 5000 рублей (один на два ПК). Все рассчитано на 7-10 лет работы, расходных материалов почти нет.",
    tco: "Полная закупка всех десяти позиций - 1 063 000 рублей. Это на 60-70 % дешевле брендовых аналогов (там было бы под 2,5 миллиона). Экономия за счет сборки столов своими руками, отказа от дискретной видеокарты, одного ИБП на два ПК, проводной периферии и простой сплит-системы. Срок службы: ПК и мониторов - 5-7 лет, проектора - до 20 лет, столов и экрана - более 10 лет, кресел и стульев - 7-10 лет, ИБП - 5-7 лет. Ежегодное обслуживание: чистка от пыли, подтяжка болтов, редкая замена батарей в ИБП. Никаких регулярных расходов на расходные материалы вроде ламп для проектора. Одно рабочее место обходится примерно в 1500 рублей в месяц - дешевле, чем кофе по дороге в университет. Если бюджета нет, остаемся на первом варианте за 11 000 рублей, но тогда без нормальных ПК, кондиционера и защиты от скачков.",
    workplaceErgo: "Столы и проходы: длинные столы на металлокаркасе поставить параллельно окнам. Оставить проход между столами и стеной не менее 80 см для свободного перемещения стульев. Кабели: провода от ноутбуков убрать в недорогие пластиковые кабель-каналы (клипсы) под столешницами. Они не должны свисать и мешать. Розетки: к каждому столу подвести сетевой фильтр (удлинитель) на 4-5 розеток. Закрепите его под столешницей на двусторонний скотч или хомуты, чтобы обеспечить легкий доступ к зарядным устройствам. Мониторы/ноутбуки: оптимальное расстояние от глаз студента до экрана ноутбука - 50-70 см.",
    restZone: "Диванная группа: разместить по центру (как на фото) напротив экрана. Это зона для психологической разгрузки, коротких обсуждений и работы с ноутбуком на коленях. Барная стойка: выделенная зона для «быстрой» работы и перерывов. Студент может поработать стоя или пересесть на высокий стул, чтобы сменить позу и размять спину. Зарядный хаб: рядом с диваном и у барной стойки обязательно установите розетки с USB-разъемами для быстрой подзарядки телефонов и планшетов. Зона кофе/воды: кулер с водой установите в углу у барной стойки. Рядом организуйте место для стаканчиков и салфеток.",
    serverNode: "Wi-Fi: закрепить роутер на стене на высоте от 2 метров (желательно в центре комнаты или ближе к потолку), чтобы сигнал равномерно покрывал всю аудиторию без «слепых» зон. Коммутатор и ИБП: если планируется использовать стационарный компьютер преподавателя или сетевой накопитель, спрячьте мини-шкаф (или аккуратную полочку с коммутатором и ИБП) в углу за вентилятором или шторами, ограничив физический доступ студентов. Маркировка: все кабели питания и интернет-кабели (патч-корды) пометить цветными бирками с обеих сторон (например, «Стол 1», «Проектор», «Роутер»), чтобы в случае сбоя сразу найти нужный провод.",
    safetyAccess: "Электробезопасность: все удлинители и розетки должны быть фабричного производства, с заземлением и защитой от перегрузок. Суммарная мощность техники (ноутбуки + кондиционер + кулер) не должна превышать возможности проводки. Пожарная безопасность: обивка дивана, ковер и шторы должны быть обработаны огнезащитным составом (или иметь соответствующую маркировку). Путь от дивана и дальних столов к входной двери должен быть абсолютно свободным. Устойчивость мебели: самодельные столы (из мебельных щитов) и высокая барная стойка должны иметь жесткий каркас, исключающий шатание.",
    finalProjectConclusion: "Наибольший эффект дадут: зонирование пространства, мобильная/трансформируемая мебель, управление освещением и снижение уровня шума. Ограничения проекта: бюджет, привязка к существующим розеткам, невозможность сверлить стены. Проект реализуем, так как изменения поэтапные, обратимые и не требуют капитального ремонта.",
    implementationPlan: "Этап 1. Быстрые действия (1-2 дня): уберите лишнее и неиспользуемое. Переставьте имеющуюся мебель без закупок. Наклейте временную разметку зон. Введите простые правила использования аудитории. Этап 2. Закупки: определите, что и в каком количестве нужно закупить. В приоритете - самые важные и при этом бюджетные решения (ширмы, локальное освещение, органайзеры). Зафиксируйте сроки поставки и ответственных за утверждение. Этап 3. Монтаж / перестановка (1-3 дня): расставить все по утвержденной схеме. Протянуть кабели и спрятать их в кабель-каналы. Выполнить крепления там, где это разрешено. Этап 4. Проверка результата (1 день после монтажа): провести опрос участников. Измерить ключевые показатели (уровень шума, скорость подготовки к работе). Определить, кто будет проводить проверку и что считать успехом. Этап 5. Обслуживание (постоянно): назначить ответственного за порядок. Внедрить чек-лист для осмотра и уборки раз в 2-4 недели. Регламентировать замену изношенных и сломанных предметов."
  },
  team: [
    { name: "Рзаев Мирвалех", role: "Оформление работы", duties: "Оформление текстового и внешнего вида HTML-отчета.", conclusion: "Когда оформлял отчет, особенно вдумался в разницу между вариантом «без денег» и вариантом «с закупкой». Стало очевидно, что экономия на системных блоках, креслах и кондиционере превращает учебу в выживание, и лучше один раз нормально вложиться, чем потом мучиться пять лет." },
    { name: "Лебедев Андрей", role: "Генератор идей", duties: "Выполнение общих задач, идейные предложения по улучшению работы с аудиторией.", conclusion: "Наконец-то я понял, зачем вообще все это затевалось: как только меняешь пространство, сразу становится удобнее работать. Лично я анализировал, что не так с аудиторией, придумывал, как лучше разделить ее на зоны, и прикидывал, насколько наши идеи вообще реализуемы." },
    { name: "Григорян Альберт", role: "Дизайнер", duties: "Визуализация и дизайн аудитории, подбор стилей интерьера, расстановка мебели и прочие мелочи.", conclusion: "Я понял, что недостаточно просто поставить парты и доску, важно грамотно организовать пространство, чтобы учиться было удобно и эффективно. В работе я придумывал концепцию аудитории, составлял промпты для картинок и генерировал итоговые визуализации того, как мы предлагаем организовать комнату." },
    { name: "Прутковский Матвей", role: "Поиск необходимой информации", duties: "Поиск информации, подбор и анализ необходимого оборудования.", conclusion: "В процессе работы я своими глазами увидел, что главная проблема нашей аудитории - даже не старые компьютеры, а неудачная расстановка столов: из-за тесноты ни пройти нормально, ни подойти к каждому студенту. Поэтому одним обновлением техники тут не обойтись - нужна полноценная перепланировка, а то и вовсе другое помещение." }
  ],
  photos: [
    { src: "https://i.imgur.com/0RTzCmH.jpeg", caption: "Общий вид аудитории: ряды столов, доска, проходы между столами и расстояние до стен.", finding: "На фото видно, что аудитория физически мала для запланированного количества рабочих мест. Расстояние между рядами не превышает комфортный проход, а последние ряды расположены слишком близко к стенам. Реальная вместимость - не более 12-14 человек." },
    { src: "https://i.imgur.com/kiNgm5l.jpeg", caption: "Рабочее место с системным блоком, монитором и периферией.", finding: "Фотография фиксирует износ и частичную неработоспособность компьютерного парка. Старые системные блоки и мониторы ограничивают учебный сценарий и требуют либо ремонта, либо замены." }
  ],
  visuals: [
    { src: "https://i.imgur.com/OyrhKrj.jpeg", title: "AI-визуализация 1", prompt: "Фотореалистичный современный учебный кабинет университета для практических занятий, рассчитанный ровно на 30 студентов. Просторная аудитория с гармоничной планировкой, компьютерами, интерактивной панелью, проектором, хорошим освещением, продуманной электрикой и уютной chill-зоной.", purpose: "Показать аудиторию с позиции студента, который сидит за партой и смотрит на доску и преподавателя, при этом за его спиной находится зона отдыха с диваном, телевизором и дополнительными элементами.", criteria: "Подтверждает идею разделения пространства на учебную и рекреационную зоны, где обучение и отдых могут сочетаться в одном помещении без ущерба для комфорта." },
    { src: "https://i.imgur.com/dLuZOlC.jpeg", title: "AI-визуализация 2", prompt: "Развернуть студентов спиной к телевизору с PS5 на передней стене, сохранить композицию кабинета, столы, ноутбуки, мебель, растения, освещение и общий интерьер. Студенты должны выглядеть естественно.", purpose: "Показать аудиторию с задней части помещения, где видна структура класса: ряды парт с ноутбуками, большие окна, освещение, растения, доска и проектор.", criteria: "Демонстрирует продуманную организацию пространства и зонирование аудитории на учебную и комфортную зоны." },
    { src: "https://i.imgur.com/MARrAy0.jpeg", title: "AI-визуализация 3", prompt: "Показать первый ракурс аудитории без людей, чтобы лучше рассмотреть расстановку парт, освещение, окна, доску, проектор и общую структуру помещения.", purpose: "Оценить функциональность и логичность планировки без отвлекающих элементов.", criteria: "Подтверждает продуманность организации пространства и дает чистый вид на планировочное решение." },
    { src: "https://i.imgur.com/nQ6CHfk.jpeg", title: "AI-визуализация 4", prompt: "Сделать фотореалистичный дизайн учебного кабинета с идеально продуманной проводной системой: кабели, розетки, кабель-каналы, сетевые линии и питание должны быть аккуратно спрятаны или проложены по логичным маршрутам.", purpose: "Показать переднюю часть аудитории без людей с реализованной системой проводки, включая кабель-каналы, розетки и подключение оборудования.", criteria: "Демонстрирует грамотную инженерную организацию пространства в учебной зоне, безопасность и современный внешний вид." },
    { src: "https://i.imgur.com/oZf56kE.jpeg", title: "AI-визуализация 5", prompt: "Убрать людей и показать реализованную систему проводки и подключений в задней части аудитории: скрытая проводка, лотки под столами, аккуратные выводы к рабочим местам, нейтральная палитра и реалистичная глубина пространства.", purpose: "Показать проводку и питание оборудования в задней части аудитории без людей.", criteria: "Подтверждает инженерное решение по скрытой прокладке проводов, обеспечивающей безопасность, удобство и эстетичный внешний вид." }
  ],
  equipment: [
    { name: "Китайский светодиодный проектор Full HD", specs: "1920x1080, от 500 ANSI-люмен, Android/Wi-Fi, USB, LED-ресурс до 30 000 часов.", priority: "Рекомендуемая", qty: "1 шт.", price: "14 000 ₽", reason: "Решает проблему вывода презентаций и кода на большой экран для всей аудитории. Параметры достаточны для работы при приглушенном свете. Нет переплаты за бренд, ресурс LED-лампы выше, чем у классических ламп." },
    { name: "Настенно-потолочный ручной рулонный экран", specs: "200x150 см, матовое белое полотно, коэффициент усиления 1.0, угол обзора 160 градусов.", priority: "Рекомендуемая", qty: "1 шт.", price: "5 000 ₽", reason: "Обеспечивает ровную поверхность для четкой проекции без искажений геометрии. Механический привод надежен, дешев и не требует подведения электричества." },
    { name: "Офисные/учебные стулья Eames", specs: "Пластиковый каркас, мягкое сиденье из экокожи, нагрузка до 120 кг.", priority: "Базовая", qty: "8 шт.", price: "2 000 ₽ за единицу", reason: "Организация посадочных мест для студентов. Стулья эргономичны, легко моются и имеют высокую ремонтопригодность." },
    { name: "Комплект материалов для сборки столов", specs: "Мебельный щит 1600x600x28 мм, стальные опоры 710-750 мм, крепеж, морилка.", priority: "Рекомендуемая", qty: "2 комплекта", price: "5 000 ₽ за комплект", reason: "Создание эргономичных рабочих мест нужного размера. Самостоятельная сборка обходится в 2-3 раза дешевле покупки готовых учебных столов." },
    { name: "Сплит-система", specs: "Мощность охлаждения 2,5-3,5 кВт, расчет на площадь до 25-30 кв. м с учетом тепла от людей и техники.", priority: "Рекомендуемая", qty: "1 шт.", price: "22 000 ₽", reason: "Поддержание нормативного температурного режима для высокой концентрации студентов. Выбрана базовая надежная модель без Wi-Fi и сложных фильтров." },
    { name: "Системный блок", specs: "Intel Core i3-12100 / AMD Ryzen 5 4500, 16 ГБ DDR4, SSD 480-512 ГБ, встроенная графика.", priority: "Критическая", qty: "20 шт.", price: "35 000 ₽ за единицу", reason: "Достаточно для браузера, офисных приложений и обучающих платформ. 16 ГБ ОЗУ и SSD обеспечивают комфортную работу без переплаты за дискретную видеокарту." },
    { name: "Монитор", specs: "23,8-24 дюйма, Full HD, IPS, 60 Гц, HDMI/VGA, антиблик, Flicker-Free, Low Blue Light.", priority: "Критическая", qty: "20 шт.", price: "5 500 ₽ за единицу", reason: "IPS-матрица обеспечивает четкую картинку при взгляде сбоку. Частоты 60 Гц достаточно для учебных материалов, а защита глаз снижает нагрузку при длительных занятиях." },
    { name: "Клавиатура + мышь", specs: "Проводное USB-подключение, мембранная клавиатура, оптическая мышь 800-1600 dpi.", priority: "Базовая", qty: "20 комплектов", price: "800 ₽ за комплект", reason: "Проводной комплект дешевле, надежнее и не требует батареек. Он подходит для учебного класса и снижает расходы на обслуживание." },
    { name: "Ученическое кресло", specs: "Газлифт, моющаяся обивка, регулировка высоты, устойчивое основание.", priority: "Рекомендуемая", qty: "20 шт.", price: "6 000 ₽ за единицу", reason: "Кресла снижают нагрузку на спину и позволяют настроить посадку под рост студента. Это важная часть эргономики компьютерного класса." },
    { name: "ИБП", specs: "Линейно-интерактивный ИБП для защиты двух рабочих мест от скачков напряжения.", priority: "Рекомендуемая", qty: "10 шт.", price: "5 000 ₽ за единицу", reason: "Защищает системные блоки от скачков напряжения. Один ИБП на два рядом стоящих компьютера снижает затраты без потери функциональности." }
  ],
  checks: {
    "Содержание": ["Паспорт проекта заполнен", "Есть команда и личный вклад", "Есть аудит текущего состояния", "Сохранены выводы и пояснения"],
    "Фото и визуализации": ["Реальные фотографии сохранены", "AI-визуализации подписаны", "Есть связь изображения с выводом", "Изображения открываются в lightbox"],
    "Смета": ["Есть вариант без бюджета", "Есть закупка оборудования", "Есть стоимость владения", "Есть обоснование выбора"],
    "Техническое качество": ["HTML валиден", "Нет критических ошибок консоли", "Работает localStorage", "Работает мобильная версия"],
    "UX и доступность": ["Навигация понятна", "Фокус-состояния видимы", "Кнопки доступны с клавиатуры", "Контраст текста достаточный"]
  }
};

let state = structuredClone(defaults);

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    state = {
      ...structuredClone(defaults),
      ...parsed,
      fields: { ...defaults.fields, ...(parsed.fields || {}) },
      team: parsed.team?.length ? parsed.team : defaults.team,
      photos: parsed.photos?.length ? parsed.photos : defaults.photos,
      visuals: parsed.visuals?.length ? parsed.visuals : defaults.visuals,
      equipment: parsed.equipment?.length ? parsed.equipment : defaults.equipment
    };
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveState(message = "Черновик сохранен.") {
  syncStateFromDom();
  const status = $("[data-save-status]");
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (status) status.textContent = message;
  } catch {
    if (status) status.textContent = "Текст сохранен, но большое изображение может не поместиться в localStorage. Для публикации положите файл в папку images и укажите путь вручную.";
  }
}

function syncStateFromDom() {
  Object.keys(state.fields).forEach((id) => {
    const field = document.getElementById(id);
    if (field) state.fields[id] = field.value;
  });

  $$("#teamList [data-field]").forEach((field) => {
    state.team[Number(field.dataset.index)][field.dataset.field] = field.value;
  });
  $$("#equipmentList [data-field]").forEach((field) => {
    state.equipment[Number(field.dataset.index)][field.dataset.field] = field.value;
  });
  $$("#photoList [data-field]").forEach((field) => {
    state.photos[Number(field.dataset.index)][field.dataset.field] = field.value;
  });
  $$("#visualList [data-field]").forEach((field) => {
    state.visuals[Number(field.dataset.index)][field.dataset.field] = field.value;
  });
}

function setFieldValues() {
  const select = $("#objectType");
  select.innerHTML = "";
  ["Компьютерный класс", "Учебная аудитория", "Рабочее место преподавателя", "Зона отдыха студентов", "Серверный узел / сетевая зона", "Офисное рабочее место", "Другое пространство"].forEach((option) => {
    select.append(new Option(option, option));
  });

  Object.entries(state.fields).forEach(([id, value]) => {
    const field = document.getElementById(id);
    if (field) field.value = value;
  });
}

function renderTeam() {
  $("#teamList").innerHTML = state.team.map((member, index) => `
    <article class="dynamic-card">
      <div class="card-head">
        <div><span class="tag">Участник ${index + 1}</span><h3>${member.name || "Новый участник"}</h3></div>
        <button class="btn btn-danger" type="button" data-remove-team="${index}">Удалить</button>
      </div>
      <label>ФИО<input data-field="name" data-index="${index}" value="${escapeHtml(member.name)}"></label>
      <label>Роль<input data-field="role" data-index="${index}" value="${escapeHtml(member.role)}"></label>
      <label>Зона ответственности<textarea data-field="duties" data-index="${index}">${escapeHtml(member.duties)}</textarea></label>
      <label>Личный вывод<textarea data-field="conclusion" data-index="${index}">${escapeHtml(member.conclusion)}</textarea></label>
    </article>
  `).join("");
}

function renderSteps() {
  const steps = [
    ["Сценарии работы", "Кто пользуется пространством, сколько людей одновременно, какие задачи выполняются, какая нагрузка на технику и сеть."],
    ["Текущее состояние", "Что уже есть: мебель, компьютеры, периферия, розетки, освещение, вентиляция, сеть и серверный узел."],
    ["Требования", "Минимальный, рекомендуемый и перспективный уровень оснащения, эргономики, безопасности и обслуживания."],
    ["Варианты решения", "Без бюджета, малый бюджет, базовая закупка, расширенная закупка. Для каждого варианта нужны эффект и ограничения."],
    ["Смета и жизненный цикл", "Цена покупки, обслуживание, срок службы, возможность модернизации, риски простоя и стоимость владения."],
    ["Защита проекта", "Выводы должны быть подтверждены фото, расчетами, ограничениями и реалистичным планом внедрения."]
  ];
  $("#analysisSteps").innerHTML = steps.map((step, index) => `
    <article class="step"><span>${index + 1}</span><h3>${step[0]}</h3><p>${step[1]}</p></article>
  `).join("");
}

function renderPhotos() {
  $("#photoList").innerHTML = state.photos.map((photo, index) => mediaCard(photo, index, "photo")).join("");
}

function renderVisuals() {
  $("#visualList").innerHTML = state.visuals.map((visual, index) => mediaCard(visual, index, "visual")).join("");
}

function mediaCard(item, index, type) {
  const isVisual = type === "visual";
  const title = isVisual ? item.title : `Фото текущего состояния ${index + 1}`;
  const caption = isVisual ? item.purpose : item.caption;
  const bodyLabel = isVisual ? "Что доказывает изображение" : "Вывод по фото";
  const bodyValue = isVisual ? item.criteria : item.finding;
  return `
    <article class="media-card">
      <button class="media-button" type="button" data-lightbox-open data-src="${escapeHtml(item.src)}" data-caption="${escapeHtml(caption)}">
        <img src="${escapeHtml(item.src)}" alt="${escapeHtml(caption)}" loading="lazy">
      </button>
      <div class="media-meta">
        <div class="card-head">
          <div><span class="tag">${isVisual ? "AI-концепт" : "Реальное фото"}</span><h3>${escapeHtml(title)}</h3></div>
          <button class="btn btn-danger" type="button" data-remove-${type}="${index}">Удалить</button>
        </div>
        <label class="file-pick">
          Выбрать изображение с устройства
          <input type="file" accept="image/*" data-media-file data-media-type="${type}" data-index="${index}">
          <small>Preview появится сразу. Для GitHub Pages лучше положить файл в папку images и указать путь ниже.</small>
        </label>
        <label>Ссылка или путь к изображению<input data-field="src" data-index="${index}" value="${escapeHtml(item.src)}" placeholder="images/photo-${index + 1}.jpg или https://..."></label>
        ${isVisual ? `<label>Промпт или метод создания<textarea data-field="prompt" data-index="${index}">${escapeHtml(item.prompt)}</textarea></label>` : ""}
        <label>Назначение / подпись<textarea data-field="${isVisual ? "purpose" : "caption"}" data-index="${index}">${escapeHtml(caption)}</textarea></label>
        <label>${bodyLabel}<textarea data-field="${isVisual ? "criteria" : "finding"}" data-index="${index}">${escapeHtml(bodyValue)}</textarea></label>
      </div>
    </article>
  `;
}

function renderEquipment() {
  $("#equipmentList").innerHTML = state.equipment.map((item, index) => `
    <article class="equipment-item">
      <label>Оборудование<textarea data-field="name" data-index="${index}">${escapeHtml(item.name)}</textarea></label>
      <label>Характеристики<textarea data-field="specs" data-index="${index}">${escapeHtml(item.specs)}</textarea></label>
      <label>Количество<input data-field="qty" data-index="${index}" value="${escapeHtml(item.qty)}"></label>
      <label>Цена<input data-field="price" data-index="${index}" value="${escapeHtml(item.price)}"></label>
      <label>Приоритет<select data-field="priority" data-index="${index}">
        ${["Критическая", "Рекомендуемая", "Базовая", "Опциональная"].map((p) => `<option ${p === item.priority ? "selected" : ""}>${p}</option>`).join("")}
      </select></label>
      <label>Обоснование<textarea data-field="reason" data-index="${index}">${escapeHtml(item.reason)}</textarea></label>
      <button class="btn btn-danger" type="button" data-remove-equipment="${index}">Удалить позицию</button>
    </article>
  `).join("");
}

function renderChecklist() {
  const savedChecks = state.checksState || {};
  let index = 0;
  $("#qualityChecklist").innerHTML = Object.entries(defaults.checks).map(([group, items]) => `
    <article class="check-card">
      <h3>${group}</h3>
      ${items.map((text) => {
        const key = `check_${index++}`;
        const checked = savedChecks[key] ?? true;
        return `<label class="check-item"><input type="checkbox" data-check="${key}" ${checked ? "checked" : ""}><span>${text}</span></label>`;
      }).join("")}
    </article>
  `).join("");
  updateChecklist();
}

function renderStaticLists() {
  const required = ["Главная страница проекта", "Аудит объекта", "Закупка оборудования", "Эргономика и планировка", "Визуализации", "Личные выводы"];
  const forbidden = ["Пустые страницы", "Неподписанные изображения", "Общие советы без доказательств", "Отсутствие сметы", "Сломанная навигация", "Неработающие формы"];
  $("#requiredPages").innerHTML = required.map((item) => `<li>${item}</li>`).join("");
  $("#forbiddenItems").innerHTML = forbidden.map((item) => `<li>${item}</li>`).join("");
}

function updateChecklist() {
  const checks = $$("[data-check]");
  const done = checks.filter((input) => input.checked).length;
  const total = checks.length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  $("#doneCount").textContent = done;
  $("#totalCount").textContent = total;
  const readyPercent = $("#readyPercent");
  if (readyPercent) readyPercent.textContent = `${percent}%`;
  $("#scoreFill").style.width = `${percent}%`;
  $("#readyStatus").textContent = percent >= 90 ? "Готово к защите, выглядит уверенно" : percent >= 70 ? "Почти готово, осталось немного полировки" : "Нужна спокойная доработка";
  state.checksState = Object.fromEntries(checks.map((input) => [input.dataset.check, input.checked]));
}

function bindEvents() {
  document.addEventListener("input", (event) => {
    if (event.target.matches("input, textarea, select")) saveState("Черновик сохранен автоматически.");
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-media-file]")) {
      previewSelectedImage(event.target);
      return;
    }
    if (event.target.matches("[data-check]")) {
      updateChecklist();
      saveState("Чек-лист обновлен.");
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target.closest("button, a");
    if (!target) return;

    if (target.matches("[data-add-team]")) addItem("team", { name: "", role: "", duties: "", conclusion: "" }, renderTeam);
    if (target.matches("[data-add-equipment]")) addItem("equipment", { name: "", specs: "", priority: "Рекомендуемая", qty: "", price: "", reason: "" }, renderEquipment);
    if (target.matches("[data-add-photo]")) addItem("photos", { src: "", caption: "", finding: "" }, renderPhotos);
    if (target.matches("[data-add-visual]")) addItem("visuals", { src: "", title: "Новая визуализация", prompt: "", purpose: "", criteria: "" }, renderVisuals);

    removeByDataset(target, "removeTeam", "team", renderTeam);
    removeByDataset(target, "removeEquipment", "equipment", renderEquipment);
    removeByDataset(target, "removePhoto", "photos", renderPhotos);
    removeByDataset(target, "removeVisual", "visuals", renderVisuals);

    if (target.matches("[data-save]")) saveState("Черновик сохранен вручную.");
    if (target.matches("[data-print]")) {
      saveState("Перед печатью черновик сохранен.");
      window.print();
    }
    if (target.matches("[data-clear]")) clearDraft();
    if (target.matches("[data-menu-toggle]")) toggleMenu(target);
    if (target.matches("[data-lightbox-open]")) openLightbox(target);
    if (target.matches("[data-lightbox-close]")) closeLightbox();
    if (target.matches("[data-back-top]")) window.scrollTo({ top: 0, behavior: "smooth" });
    if (target.matches("[data-tab]")) activateTab(target);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

function setupCompareSlider() {
  const range = $("[data-compare-range]");
  const wrap = $("[data-after-wrap]");
  const stage = $("[data-before-after]");
  if (!range || !wrap || !stage) return;
  const update = () => {
    const value = Number(range.value);
    wrap.style.width = `${value}%`;
    stage.style.setProperty("--compare", value / 100);
  };
  update();
  range.addEventListener("input", update);
}

function activateTab(button) {
  const root = button.closest("[data-tabs]");
  if (!root) return;
  const tab = button.dataset.tab;
  $$("[data-tab]", root).forEach((item) => item.classList.toggle("is-active", item === button));
  $$("[data-panel]", root).forEach((panel) => panel.classList.toggle("is-active", panel.dataset.panel === tab));
}

function previewSelectedImage(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const index = Number(input.dataset.index);
  const collection = input.dataset.mediaType === "visual" ? state.visuals : state.photos;
  const reader = new FileReader();
  reader.onload = () => {
    syncStateFromDom();
    collection[index].src = reader.result;
    if (!collection[index].caption && input.dataset.mediaType === "photo") {
      collection[index].caption = file.name;
    }
    if (!collection[index].purpose && input.dataset.mediaType === "visual") {
      collection[index].purpose = file.name;
    }
    input.dataset.mediaType === "visual" ? renderVisuals() : renderPhotos();
    saveState("Изображение добавлено. Если файл большой, для публикации используйте папку images.");
  };
  reader.readAsDataURL(file);
}

function addItem(key, item, render) {
  syncStateFromDom();
  state[key].push(item);
  render();
  saveState("Блок добавлен.");
}

function removeByDataset(target, datasetKey, stateKey, render) {
  if (!(datasetKey in target.dataset)) return;
  syncStateFromDom();
  const index = Number(target.dataset[datasetKey]);
  if (state[stateKey].length <= 1) return;
  state[stateKey].splice(index, 1);
  render();
  saveState("Блок удален.");
}

function clearDraft() {
  const ok = window.confirm("Очистить сохраненный черновик и вернуть исходные данные?");
  if (!ok) return;
  localStorage.removeItem(STORAGE_KEY);
  state = structuredClone(defaults);
  renderAll();
  const status = $("[data-save-status]");
  if (status) status.textContent = "Черновик очищен, исходные данные восстановлены.";
}

function toggleMenu(button) {
  const nav = $("[data-nav]");
  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("is-open", !expanded);
}

function openLightbox(button) {
  const box = $("[data-lightbox]");
  $("[data-lightbox-img]").src = button.dataset.src;
  $("[data-lightbox-img]").alt = button.dataset.caption;
  $("[data-lightbox-caption]").textContent = button.dataset.caption;
  box.hidden = false;
  requestAnimationFrame(() => box.classList.add("is-open"));
  $("[data-lightbox-close]").focus();
}

function closeLightbox() {
  const box = $("[data-lightbox]");
  if (box.hidden) return;
  box.classList.remove("is-open");
  box.hidden = true;
  $("[data-lightbox-img]").src = "";
}

function activateNav() {
  const sections = $$("main section[id]");
  const links = $$(".site-nav a");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-40% 0px -50% 0px" });
  sections.forEach((section) => observer.observe(section));
}

function revealOnScroll() {
  const elements = $$(".section-reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.12 });
  elements.forEach((element) => observer.observe(element));
}

function setupBackTop() {
  const button = $("[data-back-top]");
  if (!button) return;
  const update = () => button.classList.toggle("is-visible", window.scrollY > 700);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function animateCounters() {
  const counters = $$("[data-counter]");
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const end = Number(element.dataset.counter);
      const duration = 900;
      const startTime = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(end * eased);
        element.textContent = `${value.toLocaleString("ru-RU")} ₽`;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.unobserve(element);
    });
  }, { threshold: 0.6 });
  counters.forEach((counter) => observer.observe(counter));
}

function renderAll() {
  setFieldValues();
  renderTeam();
  renderSteps();
  renderPhotos();
  renderEquipment();
  renderVisuals();
  renderChecklist();
  renderStaticLists();
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

loadState();
renderAll();
bindEvents();
activateNav();
revealOnScroll();
setupBackTop();
animateCounters();
setupCompareSlider();
