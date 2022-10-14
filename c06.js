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
// let a = [1,2,36,72,-5,1];
// let i = 0;
// let max = a[0];
// let n = a.length;
// for (; i < n; i++) {
//     if (a[i] < a[i+1] && a[i+1] >= max) {
//         max = a[i+1];
//     }
// }
// console.log('so lon nhat trong mang la', max);

// bai9
// let a = [1,-1,-2,-5,-3,10];
// let test = a[0];
// let viTriAmDau = 0;
// let n = a.length;
// for (let i = 0; i < n; i++) {
//     if (a[i] < 0) {
//         viTriAmDau = i;
//         test = a[i];
//         break;
//     }
// }
// for (let m = viTriAmDau; m < n; m++) {
//     if (a[m+1] < 0 && a[m+1] >= test) {
//         test = a[m+1];
//     }
// }
// console.log('so am lon nhat trong mang la', test);

// bai10 chua xong
// let a = [0,1,2,3,4,5,7,9,36];
// let n = a.length;
// let findMin = 0;
// for (let i = 0; i < n; i++) {
//     let test = Math.floor(Math.sqrt(a[i]));
//     if (a[i] == test * test) {
//         findMin = a[i];
//     }
// }

// bai11
// let a = [-1,-5,-2,-4,36];
// let n = a.length;
// let flag = -1;
// for (let i = 0; i < n; i++) {
//     if (a[i] > 0) {
//         flag = 1;
//         break;
//     }
// }
// if (flag == 1) {
//     console.log('mang co ton tai duong');
// }
// else {
//     console.log('mang ko ton tai duong');
// }

// bai12
// let a = [-1,-5,-2,-4,-36];
// let n = a.length;
// let flag = -1;
// for (let i = 0; i < n; i++) {
//     if (a[i] > 0) {
//         flag = 1;
//     }
// }
// if (flag == -1) {
//     console.log('mang toan am');
// }
// else {
//     console.log('mang khong toan am');
// }

// bai13
// let a = [2,3,4,6,7];
// let n = a.length;
// let flag = -1;
// for (let i = 0; i < n; i++) {
//     test = Math.floor(Math.sqrt(a[i]));
//     if (a[i] == test * test) {
//         flag = 1;
//     }
// }
// if (flag == 1) {
//     console.log('ton tai so chinh phuong');
// }
// else {
//     console.log('Mang ko ton tai so chinh phuong');
// }

// bai14
// let a = [4,9,16,20];
// let n = a.length;
// let flag = -1;
// for (let i = 0; i < n; i++) {
//     test = Math.floor(Math.sqrt(a[i]));
//     if (a[i] != test * test) {
//         flag = 1;
//     }
// }
// if (flag == 1) {
//     console.log('Mang khong toan so chinh phuong');
// }
// if (flag == -1) {
//     console.log('Mang toan so chinh phuong');
// }

// bai15
// let a = [4,9,16,20];
// let n = a.length;
// let flag = -1;
// for (let i = 0; i < n; i++) {
//     if (a[i] > a[i+1]) {
//         flag = 1;
//     }
// }
// if (flag == 1) {
//     console.log('mang khong tang dan');
// }
// if (flag == -1) {
//     console.log('mang tang dan');
// }