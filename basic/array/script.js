// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.
//let array = new Array("BMW", "Mercedes", "Opel", "Mazda");
let array = ["BMW", "Mercedes", "Opel", "Mazda"];

// Dizi kaç elemanlıdır ?
console.log(array.length);

// Dizinin ilk ve son elemanı nedir ?
console.log(`${array[0]} ${array[array.length-1]}`);
// "Renault" değerini dizinin sonuna ekleyin.
array.push("Renault");
console.log(array);
// "Toyota" değerini dizinin başına ekleyin.
array.unshift("Toyota");
array.unshift("Seat")
console.log(array)
// "Seat" değerini siliniz.
array.shift();
console.log(array)
// "Toyota" değerini siliniz.
array.shift();
// Dizi elemanlarını ters çevirin
array.reverse();
console.log(array);
// Dizi elemanlarını alfabetik olarak sıralayın.
array.sort();
console.log(array);
// [1,2,5,80] dizisini sıralayın.
let arr = [1,2,5,80];
function compare(a){
    if(a>0){
        return -1;
    }else if(a==0){
        return 0;
    }else{
        return 1;
    }
}
arr.sort(compare);
console.log(arr)
// "Opel" değeri dizinin bir elemanımıdır ?
console.log(array.includes("Opel"));
// var str = "Chevrolet,Dacia";
// ifadesini diziye çeviriniz.
var str ="Chevrolet,Dacia";
let count = str.split(",");
console.log(count);

// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.
array = array.concat(count);
console.log(array);
// Oluşturulan diziden son 2 elemanı siliniz.
array.splice(5,2);
console.log(array);
/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
     studentA : Yiğit Bilgi 2010
     StudentB : Sena Turan  1999
     studentC : Ahmet Turan 1998   

*/

let students = [["Yiğit","Bilgi","2010"],["Sena","Turan","1999"],["Ahmet","Turan","1998"]];
console.log(students)
