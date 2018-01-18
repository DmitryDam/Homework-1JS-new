
// Task1
const row1 = 'qwertyuiop[]';
const row2 = 'asdfghjkl;\'';
const row3 = 'zxcvbnm,./';
// Task2
const row1Lenght = row1.length;
const row2Lenght = row2.length;
const row3Lenght = row3.length;
// Task3
let firstRow1 = row1.charAt(0);
let lastRow1 = row1.charAt(row1Lenght - 1);
let firstRow2 = row2.charAt(0);
let lastRow2 = row2.charAt(row2Lenght - 1);
let firstRow3 = row3.charAt(0);
let lastRow3 = row3.charAt(row3Lenght - 1);

// Task4

let bracketLeft = row1.indexOf('[');
let bracketRight = row1.indexOf(']');

// Task5
let result = 
`Символы превого ряда клавиатуры : ${row1}
Символы второго ряда клавиатуры : ${row2}
Символы третьего ряда клавиатуры : ${row3}
Длина строки первого ряда клавиатуры : ${row1Lenght}
Длина строки второго первого ряда клавиатуры : ${row2Lenght}
Длина строки третьего ряда клавиатуры : ${row3Lenght}
Первый символ первой строки : ${firstRow1}
Последний символ первой строки : ${lastRow1}
Первый символ второй строки : ${firstRow2}
Последний символ второй строки : ${lastRow2}
Первый символ третьей строки : ${firstRow3}
Последний символ третьей строки : ${lastRow3}
Позиция левой скобки : ${bracketLeft}
Позиция правой скобки : ${bracketRight}`;
console.log(result);





