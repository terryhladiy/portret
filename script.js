let hisAge = prompt('Вкажіть свою дату народження');
let hisCity = prompt('Напишіть місто в якому ви проживаєте')
let hisSport = prompt('Який ваш улюблений вид спорту?');
 
// Дата народження
if(hisAge === null){
    hisAge = ('Шкода що ви не захотіли ввести свою дату народження😢');
}

// Місце проживання
if(hisCity === 'Вашингтон'){
    hisCity = 'Сполучені Штати Америки'
}else if(hisCity === 'Лондон'){              
    hisCity = 'Англія'                                                                  
}else if(hisCity === 'Київ'){                                                           
    hisCity = 'Україна'                                                                  
}else if(hisCity === null) {
    hisCity = ('Шкода що ви не захотіли ввести своє місто проживання😢');
}              


// Улюблений вид спорту
if(hisSport === 'Футбол' || hisSport === 'футбол'){
    hisSport = ('Круто! Хочеш стати як Кріштіану Роналду?) SIUUUUUU')
}else if(hisSport === 'Бокс' || hisSport === 'бокс'){
    hisSport = ('Круто! Хочеш стати як Олександр Усик?)')
}else if(hisSport === 'Баскетбол' || hisSport === 'баскетбол'){
    hisSport = ('Круто! Хочеш стати як Леброн Джеймс?)')
}else if(hisSport === null){
    hisSport = ('Шкода що ви не захотіли ввести свій улюблений вид спорту😢')
}else{
    hisSport = (`Отож ваш улюблений вид спорту => ${hisSport} `)
}




let hisInfo = (`Отож, ваша дата народження => ${hisAge}
Ваше місце проживання => ${hisCity} 
${hisSport}`);

alert(hisInfo);

console.log(hisAge);
console.log(hisSport);
console.log(hisCity);



