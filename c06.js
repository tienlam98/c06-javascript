// bai1
// let flag = 1;
// let n = Number(prompt("nhap so nguyen bat ky"));
// for (let i = 0; i <= n; i++) {
//     if (i*i == n) {
//         flag = 0;
//     }
// } 
// if (flag == 0) {
//     console.log(n, "la so chinh phuong");
// }
// else {
//     console.log(n, "Ko la so chinh phuong");
// }

// bai2
// let mang = [1,5,12,17,24,30,36];
// let n = mang.length;
// for (let i = 0; i < n; i++) {
//     let a = mang[i] % 10;
//     let b = Math.floor(mang[i] / 10);
//     if (mang[i] % a == 0 && mang[i] % b == 0 && mang[i] % (a+b) == 0 && mang[i] % (a*b) == 0) {
//         console.log(mang[i], 'la so VB');
//     }
// }

// bai3
// let a = [0,1,2,3,4,5,7,9,36];
// let n = a.length;
// for (let i = 0; i <= n; i++) {
//     let test = Math.floor(Math.sqrt(a[i]));
//     if (a[i] == test * test) {
//         console.log(a[i], 'la so chinh phuong');
//     }
// }

// bai4
// let a = [0,1,2,3,4,5,7,9,36];
// let n = a.length;
// for (let i = 0; i < n; i++) {
//     let test = Math.floor(Math.sqrt(a[i]));
//     if (a[i] == test * test && a[i] % 2 != 0) {
//         console.log(a[i], 'la so chinh phuong le');
//     }

// }

// bai5
// let a = [0,1,2,3,4,5,7,9,36];
// let tong = 0;
// let n = a.length;
// for (let i = 0; i < n; i++) {
//     let test = Math.floor(Math.sqrt(a[i]));
//     if (a[i] == test * test) {
//         tong += a[i];
//     }
// }
// console.log('tong cac so chinh phuong la', tong);

// bai6
// let a = [0,1,2,3,4,5,7,9,36];
// let dem = 0;
// let n = a.length;
// for (let i = 0; i < n; i++) {
//     let test = Math.floor(Math.sqrt(a[i]));
//     if (a[i] == test * test) {
//         dem++;
//     }
// }
// console.log('mang co',dem,'so chinh phuong');

// bai7
// let a = [0,1,2,3,4,5,7,9,36];
// let n = a.length;
// let dem = 0;
// let averagePrime = 0;
// for (let i = 0; i < n; i++) {
//     let test = Math.floor(Math.sqrt(a[i]));
//     if (a[i] == test * test && a[i] % 2 == 0) {
//         dem++;
//         averagePrime = averagePrime + a[i];
//     }
// }
// console.log('Trung binh cong cua cac so chinh phuong chan la', averagePrime/dem);

// bai8
let a = [1,2,36,-5,1];
let i = 0;
let max = 0;
let n = a.length;
for (; i < n; i++) {
    max = a[i];
    if (a[i] < a[i+1]) {
        max = a[i+1];
    }
}
console.log('so lon nhat trong mang la', max);