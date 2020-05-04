// 1. створити список з допомогою роботи з домом, 
//пронумерувати список та вивести всі його значення.
//Населення відобразити в млн "40 млн".
//Київ та Україна підсвітити синьо - жовтим кольором.

let CountryList = [

    {
        country: "Україна",
        capital: "Київ",
        count: 40000000

    },

    {

        country: "Грузія",

        capital: "Тбілісі",

        count: 10000000

    },

    {

        country: "Великобританія",

        capital: "Лондон",
        count: 100000000

    },

    {

        country: "США",

        capital: "Вашингтон",

        count: 300000000

    }
];
let list = document.createElement('ul');
for (let i = 0; i < CountryList.length; i++) {
    let listElements = document.createElement('li');
    let roundPopulationNumber = CountryList[i].count / 1000000
    let country = ` ${i+1}. country: ${CountryList[i].country} capital: ${CountryList[i].capital} population: ${roundPopulationNumber}  millions`

    if (CountryList[i].country === 'Україна') {
        listElements.classList.add("countryStyle");
    };

    listElements.append(country)
    list.append(listElements);
    list.classList.add('countryListStyle');
    document.body.appendChild(list)
};

// 2. Створити модальне відкно аналог Алерта але з гарним дизайном. 
//по кліку на кнопку зявляється модальне вікно по центрі екрану(центрування елемента).
// В модальному вікні має бути текст та кнопка закрити.

let modal = document.getElementById('modal');
let button = document.getElementById('modalButton');
let closeButton = document.querySelector('.modal-close')
button.onclick = () => modal.style.display = 'block';
closeButton.onclick = () => modal.style.display = 'none';

// 3. Створити список в якому можна буде 
//довільно змінювати колір для айтемів (палітра мінімум з 5 кольорів).

// let allColoredButtons = document.getElementById('coloredButtons');
// let allButtons = document.getElementById('buttons');
// coloredButtons.onclick = () => allButtons.style.back = 'block';
let noColor = document.getElementById('buttonNoColor');
let redColor = document.querySelector('.red');
let pinkColor = document.querySelector('.pink');
let purpleColor = document.querySelector('.purple');
let yellowColor = document.querySelector('.yellow');
let greenColor = document.querySelector('.green');
redColor.onclick = () => {
    noColor.style.backgroundColor = 'red'
}
pinkColor.onclick = () => {
    noColor.style.backgroundColor = 'pink'
}
purpleColor.onclick = () => {
    noColor.style.backgroundColor = 'purple'
}

yellowColor.onclick = () => {
    noColor.style.backgroundColor = 'yellow'
}

greenColor.onclick = () => {
    noColor.style.backgroundColor = 'green'
}








// for (let elem of document.body.children) {
//     if (elem.matches('a[href$="zip"]')) {
//         console.log('link to archive' + elem.href)
//     }
// };
// let whatever = document.getElementById('whatever-all');
// whatever.style.color = 'red'

// let checkQuerySelector = document.querySelectorAll('.whatever-all');

// whatever.addEventListener("mouseover", function (event) {
//     // highlight the mouseover target
//     event.target.style.color = "orange";
// });

// whateverFunction = () => {
//     let elem = document.querySelector('.whatever-all');
//     elem.style.color = 'purple'
// }