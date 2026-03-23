// ============================================
// constants_ranks.js
// Все константы и утилиты, связанные с рангами карт
// Используется во всём проекте для унификации
// ============================================

// Массив рангов в порядке возрастания силы (2 — самый младший, A — старший)
const RANKS_ARRAY = [
    '2', '3', '4', '5', '6', '7', '8', '9', '10',
    'J', 'Q', 'K', 'A'
];

// Объект: ранг -> числовое значение (для сравнения)
const RANK_VALUE = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
};

// Обратный объект: число -> строковый ранг
const VALUE_TO_RANK = Object.fromEntries(
    Object.entries(RANK_VALUE).map(([rank, val]) => [val, rank])
);

// Получить числовое значение ранга
function getRankValue(rank) {
    return RANK_VALUE[rank] || 0;
}

// Получить строковый ранг по числу
function getRankFromValue(value) {
    return VALUE_TO_RANK[value] || '?';
}

// Проверить, является ли ранг "картинкой" (J, Q, K, A)
function isPictureRank(rank) {
    return ['J', 'Q', 'K', 'A'].includes(rank);
}

// Проверить, является ли ранг тузом
function isAce(rank) {
    return rank === 'A';
}

// Проверить, является ли ранг десяткой или выше (для стрит-флеш проверок)
function isHighRank(rank) {
    const val = getRankValue(rank);
    return val >= 10;
}

// Получить следующий ранг (для построения стритов)
function getNextRank(rank) {
    const idx = RANKS_ARRAY.indexOf(rank);
    if (idx === -1 || idx === RANKS_ARRAY.length - 1) return null;
    return RANKS_ARRAY[idx + 1];
}

// Получить предыдущий ранг
function getPrevRank(rank) {
    const idx = RANKS_ARRAY.indexOf(rank);
    if (idx <= 0) return null;
    return RANKS_ARRAY[idx - 1];
}

// Для стрита: обрабатываем особый случай A-2-3-4-5
// Возвращает массив рангов в порядке для сравнения (младший первым)
function getStraightRanks(ranksSet) {
    // ranksSet — Set строковых рангов
    const sorted = Array.from(ranksSet)
        .map(r => ({ rank: r, value: getRankValue(r) }))
        .sort((a, b) => a.value - b.value);
    
    // Проверка на A-2-3-4-5
    const hasAce = ranksSet.has('A');
    const hasLowStraight = hasAce && 
        ranksSet.has('2') && ranksSet.has('3') && 
        ranksSet.has('4') && ranksSet.has('5');
    
    if (hasLowStraight) {
        // Возвращаем специальный порядок: 5,4,3,2,A (старший 5)
        return ['5', '4', '3', '2', 'A'];
    }
    
    return sorted.map(item => item.rank);
}

// Получить максимальный ранг из набора (с учётом старшинства)
function getMaxRank(ranks) {
    if (!ranks.length) return null;
    return ranks.reduce((max, r) => {
        return getRankValue(r) > getRankValue(max) ? r : max;
    });
}

// Получить минимальный ранг
function getMinRank(ranks) {
    if (!ranks.length) return null;
    return ranks.reduce((min, r) => {
        return getRankValue(r) < getRankValue(min) ? r : min;
    });
}

// Сортировка рангов по убыванию силы
function sortRanksDesc(ranks) {
    return [...ranks].sort((a, b) => getRankValue(b) - getRankValue(a));
}

// Сортировка рангов по возрастанию
function sortRanksAsc(ranks) {
    return [...ranks].sort((a, b) => getRankValue(a) - getRankValue(b));
}

// Группировка рангов по количеству повторений (для комбинаций)
// Возвращает объект { rank: count }
function groupRanksByCount(ranks) {
    const groups = {};
    for (const rank of ranks) {
        groups[rank] = (groups[rank] || 0) + 1;
    }
    return groups;
}

// Получить массив уникальных рангов
function getUniqueRanks(ranks) {
    return [...new Set(ranks)];
}

// Проверить, образуют ли ранги стрит (без учёта масти)
function isStraightRanks(ranksSet) {
    const straightRanks = getStraightRanks(ranksSet);
    // Если straightRanks длиной 5, значит стрит есть (либо A-2-3-4-5, либо обычный)
    if (straightRanks.length !== 5) return false;
    
    // Для обычного стрита проверяем последовательность
    const values = straightRanks.map(r => getRankValue(r)).sort((a,b)=>a-b);
    for (let i = 0; i < values.length - 1; i++) {
        if (values[i+1] - values[i] !== 1) return false;
    }
    return true;
}

// Получить старший ранг стрита (для сравнения)
function getHighStraightRank(ranksSet) {
    const straightRanks = getStraightRanks(ranksSet);
    if (straightRanks.length !== 5) return null;
    // В случае A-2-3-4-5 старший — 5
    const high = getMaxRank(straightRanks);
    return high;
}

// Расширенная информация о рангах (для UI)
const RANK_DISPLAY = {
    '2': { name: 'Двойка', short: '2', symbol: '2' },
    '3': { name: 'Тройка', short: '3', symbol: '3' },
    '4': { name: 'Четвёрка', short: '4', symbol: '4' },
    '5': { name: 'Пятёрка', short: '5', symbol: '5' },
    '6': { name: 'Шестёрка', short: '6', symbol: '6' },
    '7': { name: 'Семёрка', short: '7', symbol: '7' },
    '8': { name: 'Восьмёрка', short: '8', symbol: '8' },
    '9': { name: 'Девятка', short: '9', symbol: '9' },
    '10': { name: 'Десятка', short: '10', symbol: '10' },
    'J': { name: 'Валет', short: 'J', symbol: 'J' },
    'Q': { name: 'Дама', short: 'Q', symbol: 'Q' },
    'K': { name: 'Король', short: 'K', symbol: 'K' },
    'A': { name: 'Туз', short: 'A', symbol: 'A' }
};

// Экспорт (в браузерной среде просто объявляем глобальные переменные)
window.RANKS_ARRAY = RANKS_ARRAY;
window.RANK_VALUE = RANK_VALUE;
window.VALUE_TO_RANK = VALUE_TO_RANK;
window.getRankValue = getRankValue;
window.getRankFromValue = getRankFromValue;
window.isPictureRank = isPictureRank;
window.isAce = isAce;
window.isHighRank = isHighRank;
window.getNextRank = getNextRank;
window.getPrevRank = getPrevRank;
window.getStraightRanks = getStraightRanks;
window.getMaxRank = getMaxRank;
window.getMinRank = getMinRank;
window.sortRanksDesc = sortRanksDesc;
window.sortRanksAsc = sortRanksAsc;
window.groupRanksByCount = groupRanksByCount;
window.getUniqueRanks = getUniqueRanks;
window.isStraightRanks = isStraightRanks;
window.getHighStraightRank = getHighStraightRank;
window.RANK_DISPLAY = RANK_DISPLAY;
