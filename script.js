// senin 31-07-2023

//looping => perulangan

//1. Counted Loop => for,foreach map
//2. Uncounted loop => while,do while

// for(let i=0; i<=10; i++){
//     console.log(i+1);
// }

// const Tired= () =>{

// }
// const Run= () =>{
    
// }

// while(!Tired){
//     Run();
// }

//1.

// for(let i=0; i<20;i++){
//     console.log(i +"Nicko");
// }

// //2.
// for(let i=0; i<20;i++){
//     console.log(i + 1);
// }

// //3.


// //cara1
// for(let i=1; i<101;i++){
//     console.log(i += 4);
// }

// //cara 2
// for(let i=1; i<=20;i++){
//     console.log(i*5);
// }

//4
//cara 1

//ganjil
// for(let i=0; i<20;i++){
//     console.log(i += 1);
// }

// //genap
// for(let i=1; i<20;i++){
//     console.log(i += 1);
// }

//genap
// for( let i =2 ; i<=10 ; i+=2){
//     console.log(i);
// }

//ganjil
// for( let i =1 ; i<=10 ; i+=2){
//     console.log(i);
// }


// let pilihan= prompt("genap atau ganjil");
// let input1=parseInt(prompt("masukan nilai 1"));
// let input2=parseInt(prompt("masukan nilai 2"));

// for(let i =input1 ; i<=input2 ; i++){
//     console.log(i);
// }

// if(pilihan == "ganjil"){
//     for(i =a ; i<=b ; i+=1){
//         console.log(i);
//     }
// } else if(pilihan == "genap"){
//     for(i =a ; i<=b ; i++){
//         console.log(i);
//     }
// }else{
//     console.log("invalid")
// }
// for(i =a ; i<=b ; i++){
//     console.log(i);
// }

//--------------------------
//switch case
// let lempar = parseInt(prompt("berapa kali kocok"));
// let dadu = [1,2,3,4,5,6]
// let angkadadu = Math.floor(Math.random()* 6 + 1) ;
// let kartu = [2,4,6,8,10,12];

// for(i = 0; i <= lempar; i++){
// switch (angkadadu) {
//     case 1:
//         console.log(`kamu mendapatkan ${kartu[0]} kartu `);
//         break;
//         case 2:
//             console.log(`kamu mendapatkan ${kartu[1]} kartu `);
//             break;
//             case 3:
//                 console.log(`kamu mendapatkan ${kartu[2]} kartu `);
//                 break;
//                 case 4:
//                     console.log(`kamu mendapatkan ${kartu[3]} kartu `);
//                     break;
//                     case 5:
//                         console.log(`kamu mendapatkan ${kartu[4]} kartu `);
//                         break;
//                         case 6:
//                             console.log(`kamu mendapatkan ${kartu[5]} kartu `);
//                             break; 
//                             default:
//                         break;
// }
// console.log(angkadadu);
// }
// -------------------------
//Array
// let arr= ['nasi', 'opor', 'telor balado', 'orek'];


// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach((food) =>{
// console.log(food);
// });

//method
//1.push
// arr.push('indomie telor');
// console.log(arr);

// //2.pop
// arr.pop();



// //3.Shift
// arr.shift();


// //4.splice
// arr.splice(1,2);

// ----------------------
//Tugas array
// let input= prompt("masukan perintah");
// let input2 = prompt("masukan input ke 2")

// --------------------------
//ARROW FUNCTION

// const inputNama= (a,b) => {
//  return a-b;
// }
// const inputNilai =() => a+b;

// -------------------
//dadu
// let input = parseInt(prompt("berapa kali kocok"));
// let dadu = [1,2,3,4,5,6]
// let kartu = [2,4,6,8,10,12];

// for(i = 0; i <= input; i++){
//     let angkadadu = Math.floor(Math.random()* 6 + 1) ;
// switch (angkadadu) {
//     case 1:
//         console.log(`kamu mendapatkan ${kartu[0]} kartu `);
//         break;
//         case 2:
//             console.log(`kamu mendapatkan ${kartu[1]} kartu `);
//             break;
//             case 3:
//                 console.log(`kamu mendapatkan ${kartu[2]} kartu `);
//                 break;
//                 case 4:
//                     console.log(`kamu mendapatkan ${kartu[3]} kartu `);
//                     break;
//                     case 5:
//                         console.log(`kamu mendapatkan ${kartu[4]} kartu `);
//                         break;
//                         case 6:
//                             console.log(`kamu mendapatkan ${kartu[5]} kartu `);
//                             break; 
//                             default:
//                         break;
// }

// }

// ------------------
// tugas function 


// const Dadu = () => {
//     let input= (parseInt(prompt("masukan nilai")));
//     let kartu = [2,4,6,8,10,12];
//     for(i = 0; i <= input; i++){
//     let angkadadu = Math.floor(Math.random()* 6 + 1) ;
//     switch (angkadadu) {
//     case 1:
//         console.log(`kamu mendapatkan ${kartu[0]} kartu `);
//         break;
//         case 2:
//             console.log(`kamu mendapatkan ${kartu[1]} kartu `);
//             break;
//             case 3:
//                 console.log(`kamu mendapatkan ${kartu[2]} kartu `);
//                 break;
//                 case 4:
//                     console.log(`kamu mendapatkan ${kartu[3]} kartu `);
//                     break;
//                     case 5:
//                         console.log(`kamu mendapatkan ${kartu[4]} kartu `);
//                         break;
//                         case 6:
//                             console.log(`kamu mendapatkan ${kartu[5]} kartu `);
//                             break; 
//                             default:
//                                 console.log("")
//                         break;
// }
//     }
// }


// Dadu();

// -------------------
//tugas algortima

let jam =[2,2,3,3,1,4,5];
// let hari = ['senin' , 'selasa', 'rabu', 'kamis', 'jumat' ,'sabtu' ,'minggu'];
let totalMelebihi= 0;
let totalJam = 0;

for(let i= 0; i < jam.length; i++){
    totalJam += jam[i];
    
    if(jam[i] > 2){
        totalMelebihi++;
    }
}
console.log(`total jam main:${totalJam}`)
console.log("total hari melebihi:" + totalMelebihi);




