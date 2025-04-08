// Словарь ударений для самых распространенных русских слов
const accentDictionary = {
  'привет': 2,
  'здравствуйте': 1,
  'пока': 2,
  'спасибо': 1,
  'пожалуйста': 1,
  'хорошо': 3,
  'плохо': 1,
  'сегодня': 2,
  'завтра': 1,
  'вчера': 2,
  'утро': 1,
  'день': 1,
  'вечер': 1,
  'ночь': 1,
  'работа': 1,
  'дом': 1,
  'школа': 1,
  'университет': 4,
  'студент': 2,
  'преподаватель': 3,
  'человек': 2,
  'люди': 1,
  'друг': 1,
  'подруга': 2,
  'семья': 2,
  'мама': 1,
  'папа': 1,
  'сестра': 2,
  'брат': 1,
  'дети': 1,
  'ребенок': 2,
  'мальчик': 1,
  'девочка': 1,
  'мужчина': 2,
  'женщина': 1,
  'учитель': 1,
  'врач': 1,
  'инженер': 3,
  'программист': 3,
  'компьютер': 3,
  'интернет': 3,
  'телефон': 3,
  'телевизор': 3,
  'музыка': 1,
  'книга': 1,
  'фильм': 1,
  'театр': 1,
  'кино': 1,
  'город': 1,
  'улица': 2,
  'улицу': 1,
  'дорога': 2,
  'машина': 2,
  'автобус': 2,
  'метро': 2,
  'поезд': 1,
  'самолет': 3,
  'еда': 2,
  'вода': 2,
  'хлеб': 1,
  'молоко': 3,
  'мясо': 1,
  'овощи': 1,
  'фрукты': 1,
  'яблоко': 1,
  'банан': 2,
  'апельсин': 3,
  'лимон': 2,
  'время': 1,
  'год': 1,
  'месяц': 1,
  'неделя': 2,
  'час': 1,
  'минута': 2,
  'секунда': 2,
  'погода': 2,
  'дождь': 1,
  'снег': 1,
  'солнце': 1,
  'ветер': 1,
  'тепло': 1,
  'холодно': 1,
  'жарко': 1,
  'цвет': 1,
  'красный': 1,
  'синий': 1,
  'зеленый': 2,
  'желтый': 1,
  'белый': 1,
  'черный': 1,
  'серый': 1,
  // Добавим больше слов с правильными ударениями
  'была': 2,
  'был': 1,
  'будет': 1,
  'быть': 1,
  'говорить': 3,
  'делать': 1,
  'идти': 2,
  'жить': 1,
  'знать': 1,
  'думать': 1,
  'видеть': 1,
  'слышать': 1,
  'смотреть': 2,
  'любить': 2,
  'хотеть': 2,
  'мочь': 1,
  'нужно': 1,
  'можно': 1,
  'нельзя': 2,
  'надо': 1,
  'правильно': 1,
  'неправильно': 2,
  'хорошо': 3,
  'плохо': 1,
  'много': 1,
  'мало': 1,
  'быстро': 1,
  'медленно': 2,
  'громко': 1,
  'тихо': 1,
  'высоко': 2,
  'низко': 1,
  'далеко': 3,
  'близко': 1,
  'вперед': 2,
  'назад': 2,
  'вверх': 1,
  'вниз': 1,
  'влево': 2,
  'вправо': 2,
  'здесь': 1,
  'там': 1,
  'везде': 2,
  'нигде': 2,
  'всегда': 2,
  'никогда': 3,
  'иногда': 3,
  'сейчас': 2,
  'потом': 2,
  'раньше': 1,
  'давно': 2,
  'недавно': 2,
  'скоро': 1,
  'долго': 1,
  'коротко': 2,
  // Числительные
  'один': 2,
  'два': 1,
  'три': 1,
  'четыре': 1,
  'пять': 1,
  'шесть': 1,
  'семь': 1,
  'восемь': 1,
  'девять': 1,
  'десять': 1,
  'одиннадцать': 1,
  'двенадцать': 1,
  'двадцать': 1,
  'тридцать': 1,
  'сорок': 1,
  'пятьдесят': 2,
  'шестьдесят': 2,
  'семьдесят': 2,
  'восемьдесят': 3,
  'девяносто': 3,
  'сто': 1,
  'тысяча': 1,
  'миллион': 3,
  'миллиард': 3,
  // Местоимения
  'я': 1,
  'ты': 1,
  'он': 1,
  'она': 2,
  'оно': 2,
  'мы': 1,
  'вы': 1,
  'они': 2,
  'мой': 1,
  'твой': 1,
  'наш': 1,
  'ваш': 1,
  'свой': 1,
  'этот': 1,
  'тот': 1,
  'такой': 2,
  'каждый': 1,
  'всякий': 1,
  'весь': 1,
  'сам': 1,
  'самый': 1,
  'кто': 1,
  'что': 1,
  'который': 2,
  'какой': 2,
  'чей': 1,
  'никто': 2,
  'ничто': 2,
  'некто': 1,
  'нечто': 1,
  // Падежные формы
  'меня': 2,
  'тебя': 2,
  'его': 2,
  'ее': 2,
  'нас': 1,
  'вас': 1,
  'их': 1,
  'мне': 1,
  'тебе': 2,
  'ему': 2,
  'ей': 1,
  'нам': 1,
  'вам': 1,
  'им': 1,
  'мной': 1,
  'тобой': 2,
  'им': 1,
  'ей': 1,
  'нами': 1,
  'вами': 1,
  'ими': 1,
  // Предлоги
  'в': 1,
  'на': 1,
  'под': 1,
  'над': 1,
  'за': 1,
  'перед': 1,
  'из': 1,
  'от': 1,
  'до': 1,
  'у': 1,
  'около': 1,
  'возле': 1,
  'при': 1,
  'к': 1,
  // Добавляем новые слова из сказки
  'как': 1,
  'то': 1,
  'раз': 1,
  'вышел': 1,
  'заяц': 1,
  'крыльцо': 1,
  'почесать': 3,
  'судьбе': 1,
  'яйцо': 2,
  'крыльцо': 1
};

// Русские гласные
const vowels = ['а', 'е', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'ё'];

/**
 * Анализирует текст и возвращает массив объектов с фонетическим разбором
 * @param {string} text - Текст для анализа
 * @returns {Array} - Массив объектов с фонетическим разбором
 */
export function analyzeText(text) {
  // Разбиваем текст на слова
  const words = text.toLowerCase().match(/[а-яё]+/g) || [];
  
  return words.map(word => analyzeWord(word));
}

/**
 * Анализирует отдельное слово
 * @param {string} word - Слово для анализа
 * @returns {Object} - Объект с результатами анализа
 */
function analyzeWord(word) {
  // Получаем позиции всех гласных в слове
  const vowelPositions = findVowelPositions(word);
  
  // Определение номера ударной гласной (0-based индекс среди гласных)
  const stressVowelIndex = findStressVowelIndex(word, vowelPositions);
  
  // Получаем позицию ударной гласной в слове
  const stressPosition = stressVowelIndex >= 0 && stressVowelIndex < vowelPositions.length 
    ? vowelPositions[stressVowelIndex] 
    : -1;
  
  // Создание фонетической транскрипции
  const phonetic = createPhoneticTranscription(word, stressPosition);
  
  // Определение ударной гласной
  const stressedChar = stressPosition > -1 ? word[stressPosition] : '';
  
  return {
    originalWord: word,
    phonetic,
    stressPosition,
    stressedChar
  };
}

/**
 * Находит позиции всех гласных в слове
 * @param {string} word - Слово для анализа
 * @returns {Array} - Массив позиций гласных
 */
function findVowelPositions(word) {
  const positions = [];
  
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      positions.push(i);
    }
  }
  
  return positions;
}

/**
 * Находит индекс ударной гласной (среди всех гласных)
 * @param {string} word - Слово для анализа
 * @param {Array} vowelPositions - Позиции всех гласных в слове
 * @returns {number} - Индекс ударной гласной или -1, если не определено
 */
function findStressVowelIndex(word, vowelPositions) {
  if (vowelPositions.length === 0) {
    return -1; // в слове нет гласных
  }
  
  if (vowelPositions.length === 1) {
    return 0; // если только одна гласная
  }
  
  // Проверяем, есть ли слово в словаре ударений
  if (accentDictionary[word]) {
    const accentNumber = accentDictionary[word];
    // Словарь хранит номер гласной (с 1), а не позицию в слове
    // Преобразуем номер гласной (1-based) в индекс массива гласных (0-based)
    return accentNumber - 1;
  }
  
  // Проверяем, есть ли в словаре начальная форма слова (без окончания)
  // Для типичных русских форм
  const possibleStems = [
    word.replace(/ть$/, ''),   // Инфинитивы (делать -> дела)
    word.replace(/ться$/, ''), // Возвратные инфинитивы (учиться -> учи)
    word.replace(/ет$/, ''),   // 3 лицо ед. число (идет -> ид)
    word.replace(/ут$/, ''),   // 3 лицо мн. число (идут -> ид)
    word.replace(/ют$/, ''),   // 3 лицо мн. число (делают -> дела)
    word.replace(/ат$/, ''),   // 3 лицо мн. число (хотят -> хот)
    word.replace(/ял$/, ''),   // Прошедшее время муж. род (делал -> де)
    word.replace(/ла$/, ''),   // Прошедшее время жен. род (делала -> де)
    word.replace(/ло$/, ''),   // Прошедшее время ср. род (делало -> де)
    word.replace(/ли$/, '')    // Прошедшее время мн. число (делали -> де)
  ];
  
  for (const stem of possibleStems) {
    for (const dictWord in accentDictionary) {
      if (dictWord.startsWith(stem) && stem.length > 2) {
        // Если нашли слово с таким же корнем, пытаемся использовать его ударение
        return accentDictionary[dictWord] - 1; // 1-based в 0-based
      }
    }
  }
  
  // Если слова нет в словаре, используем алгоритм эвристики для определения ударной гласной
  
  // Особые случаи для коротких слов
  if (word.length <= 4) {
    return 0; // В коротких словах ударение часто на первую гласную
  }
  
  // Особые случаи для длинных слов
  if (word.length >= 8) {
    // В длинных словах ударение часто падает на третью гласную с начала (если есть)
    if (vowelPositions.length >= 3) {
      return 2;
    }
  }
  
  // Если гласных больше 1, предполагаем ударение на предпоследнюю гласную
  // Это часто работает для русского языка
  return vowelPositions.length - 2 >= 0 ? vowelPositions.length - 2 : 0;
}

/**
 * Создает упрощенную фонетическую транскрипцию
 * @param {string} word - Слово
 * @param {number} stressPosition - Позиция ударения
 * @returns {string} - Фонетическая транскрипция
 */
function createPhoneticTranscription(word, stressPosition) {
  let result = '[';
  
  // Предварительный анализ всего слова
  const isLastSyllable = stressPosition > -1 && isLastVowel(word, stressPosition);
  const wordEndingWithConsonant = !vowels.includes(word[word.length - 1]);
  
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    
    // Если гласная ударная, выделяем ее заглавной буквой и апострофом
    if (i === stressPosition && vowels.includes(char)) {
      result += char.toUpperCase() + '\'';
      continue;
    }
    
    // Редукция безударных гласных
    if (vowels.includes(char)) {
      // Позиция гласной относительно ударения
      const isBeforeStress = stressPosition > -1 && i < stressPosition;
      const isAfterStress = stressPosition > -1 && i > stressPosition;
      
      // Первый предударный слог (ближайший к ударению слева)
      const isFirstPreStressed = isBeforeStress && isFirstPreStressedVowel(word, i, stressPosition);
      
      if (char === 'о') {
        // 'o' всегда произносится как 'а' в безударной позиции
        result += 'а';
      } else if (char === 'е') {
        // 'е' в первом предударном слоге ближе к 'и'
        if (isFirstPreStressed) {
          result += 'и';
        } else {
          // В других безударных позициях 'е' больше похожа на 'и'
          result += 'и';
        }
      } else if (char === 'я') {
        // 'я' в безударном положении произносится как 'и' в большинстве случаев
        result += 'и';
      } else if (char === 'э') {
        // 'э' в безударном положении ближе к 'и'
        result += 'и';
      } else if (char === 'ю') {
        // 'ю' в безударном положении ближе к 'у' но с более коротким звуком
        result += 'у';
      } else if (char === 'ы' && isAfterStress) {
        // Редукция 'ы' после ударения ослабляется
        result += 'ы'; // Сохраняем, но на самом деле звук короче
      } else {
        // Другие гласные оставляем без изменений
        result += char;
      }
      continue;
    }
    
    // Обработка согласных букв
    
    // Оглушение звонких согласных на конце слова
    if (i === word.length - 1 && wordEndingWithConsonant) {
      if (char === 'б') result += 'п';
      else if (char === 'в') result += 'ф';
      else if (char === 'г') result += 'к';
      else if (char === 'д') result += 'т';
      else if (char === 'ж') result += 'ш';
      else if (char === 'з') result += 'с';
      else result += char;
      continue;
    }
    
    // Обработка сочетаний согласных
    if (i < word.length - 1) {
      // Ассимиляция по глухости/звонкости
      const nextChar = word[i + 1];
      
      // Звонкая согласная перед глухой оглушается
      if ((char === 'б' || char === 'в' || char === 'г' || char === 'д' || char === 'ж' || char === 'з') &&
          (nextChar === 'п' || nextChar === 'ф' || nextChar === 'к' || nextChar === 'т' || nextChar === 'ш' || nextChar === 'с' || nextChar === 'х' || nextChar === 'ц' || nextChar === 'ч' || nextChar === 'щ')) {
        if (char === 'б') { result += 'п'; continue; }
        else if (char === 'в') { result += 'ф'; continue; }
        else if (char === 'г') { result += 'к'; continue; }
        else if (char === 'д') { result += 'т'; continue; }
        else if (char === 'ж') { result += 'ш'; continue; }
        else if (char === 'з') { result += 'с'; continue; }
      }
      
      // Глухая согласная перед звонкой озвончается (кроме случаев с 'в')
      if ((char === 'п' || char === 'ф' || char === 'к' || char === 'т' || char === 'ш' || char === 'с') &&
          (nextChar === 'б' || nextChar === 'г' || nextChar === 'д' || nextChar === 'ж' || nextChar === 'з')) {
        if (char === 'п') { result += 'б'; continue; }
        else if (char === 'ф') { result += 'в'; continue; }
        else if (char === 'к') { result += 'г'; continue; }
        else if (char === 'т') { result += 'д'; continue; }
        else if (char === 'ш') { result += 'ж'; continue; }
        else if (char === 'с') { result += 'з'; continue; }
      }
      
      // ТЬС и ДЬС -> Ц
      if ((char === 'т' || char === 'д') && i < word.length - 2 && word[i+1] === 'ь' && word[i+2] === 'с') {
        result += 'ц';
        // Пропускаем следующие два символа
        i += 2;
        continue;
      }
    }
    
    // В других случаях оставляем как есть
    result += char;
  }
  
  result += ']';
  return result;
}

/**
 * Проверяет, является ли гласная на данной позиции последней гласной в слове
 * @param {string} word - Слово
 * @param {number} position - Позиция гласной
 * @returns {boolean} - true, если это последняя гласная
 */
function isLastVowel(word, position) {
  for (let i = position + 1; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      return false;
    }
  }
  return true;
}

/**
 * Проверяет, является ли гласная на данной позиции первой предударной
 * @param {string} word - Слово
 * @param {number} position - Позиция текущей гласной
 * @param {number} stressPosition - Позиция ударной гласной
 * @returns {boolean} - true, если это первая предударная гласная
 */
function isFirstPreStressedVowel(word, position, stressPosition) {
  if (position >= stressPosition) {
    return false;
  }
  
  // Проверяем, есть ли другие гласные между текущей и ударной
  for (let i = position + 1; i < stressPosition; i++) {
    if (vowels.includes(word[i])) {
      return false;
    }
  }
  
  return true;
} 