let date = new Date();
let currentHour = date.getHours();
let greetings = ['Доброе утро!', 'Добрый день!', 'Добрый вечер!', 'Здравствуйте!', 'Не спим, да?', 'Ошибка'];

if (currentHour >=7 && currentHour <12) {
    document.querySelector('#greeting').innerHTML = greetings[0];
} else if (currentHour >=12 && currentHour <16) {
    document.querySelector('#greeting').innerHTML = greetings[1];
} else if (currentHour >=16 && currentHour <22) {
    document.querySelector('#greeting').innerHTML = greetings[2];
} else if (currentHour >=22 && currentHour <0) {
    document.querySelector('#greeting').innerHTML = greetings[3]; 
} else if (currentHour >=0 && currentHour <7) {
    document.querySelector('#greeting').innerHTML = greetings[4];
} else {
    document.querySelector('#greeting').innerHTML = greetings[5];
};