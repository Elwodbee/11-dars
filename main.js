// 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring

// let salom = +prompt("Birinchi sonni kiriting");
// let javob = +prompt("Ikkinchi sonni kiriting");

// console.log(salom + javob);

// 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring 
// bering. Yani bu hozir string typeda siz number tyga o'zgartiring\

// let a = '12'

// console.log(Number(a));

// 3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering
// let randomNumber = Math.round(Math.random() * 100);

// if(randomNumber % 2 == 0){
//     console.log(randomNumber +'juft son');
// }else{
//     console.log(randomNumber +'toq son');
// }

// 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
//  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin

// let mars = prompt("Text kiriting");

// if(mars == "Mars"){
//     console.log(mars);
// }else{
//     console.log('Mars It school');
// }

// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi 
// so'zlar ichidan uzunligi 5 va undan kattalarini bohsqa bir arrayga qo'shib chiqaring

// let sozlar = ["Elshod" , "Samir", "Suhrob" , "Umid" , "Zubayr"]
// let box1 = []
// let box2 = []
// for (let index = 0; index < sozlar.length; index++) {
//     if(sozlar[index].length > 5){
//         box1.push(sozlar[index])

//     }else{
//         box2.push(sozlar[index])
//     } 
// }
// console.log(sozlar);
// console.log(box1);
// console.log(box2);


// 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring

let box1 = []
let box2 = []
for (let index =0; index < 100; index++) {
    if (index % 2 == 0) {
        box1.push(index)
    } else {
        box2.push(index)
    }
}
console.log(box1);
console.log(box2);