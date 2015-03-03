﻿window["module"]("Функции высшего порядка. Часть 2.");

// возвращает длину массива
// требования: использовать функции map и sum
function lenght(array) {
    // здесь должен быть ваш код
}

test("Длина массива", function() {
    equal(composeList([]), 0);
    equal(composeList([1, 2, 0, 3 ]), 4);
});

// возвращает массив из n элементов, каждый из которых сгенерирован функцией gen
function listOf(n, gen) {
    // здесь должен быть ваш код
}

// напишите функцию gen, создающую список элементов заданной длины с одинаковыми заданными значениями
function gen(n, value) {
    // здесь должен быть ваш код
}

test("Генерация массива", function() {
    equal(listOf(3, function() { gen(2, 5); }), [[5, 5], [5, 5], [5, 5]]);
});

// напишите функцию gen, создающую список элементов заданной длины с возрастающими значениями
function genOrdered(n) {
    // здесь должен быть ваш код
}

test("Генерация упорядоченного массива", function() {
    equal(listOf(3, function() { genOrdered(2); }), [[0, 1], [0, 1], [0, 1]]);
});