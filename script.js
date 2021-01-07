//1* Решите квадратное уравнение ax2 + bx + c = 0 
//(пользователь вводит коэф. a,b,c)
function quadraticEquation(a, b, c) {
    if (a == 0)
        return false;
    let res = {};
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if (D < 0)
        return false;
    res['discriminant'] = D;
    if (D == 0)
        res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
    else if (D > 0) {
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res["quadratic roots"] = tmp;
    }
    return res;
}
function run_quadraticEquation() {
    let a = prompt('Введите целочисленный положительный коэффициент а');
    let b = prompt('Введите целочисленный положительный коэффициент b');
    let c = prompt('Введите целочисленный положительный коэффициент с');
    console.log(quadraticEquation(a, b, c));
}

//2* Найти число (из трех заданных\введённых пользователем) с максимальной суммой цифр
function digitSum(num) {
    let sum = 0, x = String(num);
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    return (sum);
}
function getSumNumber(d, e, f) {
    let sum = 0, largest = 0, tmp;
    var result = [];

    var numbers = [d, e, f];
    const iterator = numbers.values();
    for (const value of iterator) {
        let n = digitSum(value);
        console.log(n);
        result.push(n);
    }

    for (i = 0; i <= largest; i++) {
        if (result[i] > largest) {
            largest = result[i];
        }
    }
    alert('Наибольшая сумма цифр: ' + largest);
    return largest;

}
function run_getSumNumber() {
    let d = prompt('Введите первое число');
    let e = prompt('Введите второе число');
    let f = prompt('Введите третье число');
    console.log(getSumNumber(d, e, f));
}

// 3* Вывести квадрат Пифагора
function pifagor() {
    var string = '';
    for (var i = 1; i <= 9; i++) {
        string += "<tr>";
        string += "<td><b>" + i + "</b></td>";
        for (var j = 1; j <= 10; j++)
            string += "<td>" + (i * j) + "</td>";
        string += "</tr>";
    }
    document.querySelector('table').innerHTML += string;
}

// 4* Определить количество учеников в классе, чей рост превышает средний
function rost() {

    var rost = []; // Массив с ростами
    let quantity = prompt('Введите количество учеников'); // Кол-во учеников

    for (var i = 1; i <= quantity; i++) {
        let rs = prompt('Введите рост ' + i + '-го ученика');
        rost.push(parseInt(rs)); // Добавляем рост в массивы
    }
    alert('В классе учится ' + quantity + ' учеников ростом: ' + rost);

    // Находим средний рост (среднее арифметическое)
    let summa = rost.reduce((a, b) => a + b, 0) / rost.length;
    alert('Средний рост: ' + Math.round(summa) + ' см.');

    var bolshe = [];
    for (var i = 1; i <= quantity; i++) {
        if (rost[i] > summa) {
            bolshe.push(rost[i]);
        }
    }
    alert('Рост больше среднего (' + Math.round(summa) + ' см) у ' + bolshe.length + ' человек: ' + bolshe);

}

/**
 * 5* преобразовать набор вложенных массивов в один массив одного уровня вложености
 * [[0, 1], [2, 3], [4, 5]] в [0, 1, 2, 3, 4, 5]
 */
function array_conv() {
    var arrToConvert = [[0, 1], [2, 3], [4, 5]];
    console.log(arrToConvert);
    alert('Был массив: ' + arrToConvert);

    var newArr = [];
    for (var i = 0; i < arrToConvert.length; i++) {
        newArr = newArr.concat(arrToConvert[i]);
    }
    console.log(newArr);
    alert('Стал массив: ' + newArr);
}

/**
 * 6* Квадратная матрица. Вывести главную диагональ мастрицы. Обнулить элементы ниже главной диагонали
 */
function addTable() {
    var myTableDiv = document.getElementById("myDynamicTable");
    var table = document.createElement('TABLE');
    table.border = '1'; // Граница
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    for (var i = 0; i < 5; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        for (var j = 0; j < 5; j++) {
            var td = document.createElement('TD');
            td.width = '50'; // Ширина
            td.appendChild(document.createTextNode(j == i ? 1 : j < i ? 0 : 3));
            tr.appendChild(td);
        }
    }
    myTableDiv.appendChild(table);
}

/**
 * 7* Поменять порядок слов предложения на обратный
 */
function task7() {
    var str = prompt('Введите предложение', 'Я хочу изучить Javascript');
    alert('Реверс: ' + str.split(/\s/).reverse().join(" "));
}
