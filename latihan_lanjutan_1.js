function tambah1(a, b) {
    let hasil = a + b
    return hasil
}

//block code
const tambah2 = function (a, b) {
    let hasil = a + b
    return hasil
}

const tambah3 = (a, b) => {
    let hasil = a + b
    return hasil
}

function cekPrima(n) {
    let counter = 0
    for (let i = 0; i <= n; i++) {
        let hasilModulus = n % i
        if (hasilModulus == 0) {
            counter++
        }
    }

    //habis dibagi satu dan bilangan itu sendiri, maka counter jumlahnya 2
    if (counter == 2) {
        return true
    } else {
        return false
    }
}

let hasilTambah1 = tambah1(10, 20)
let hasilTambah2 = tambah2(10, 20)
let hasilTambah3 = tambah3(10, 20)
let hasilCekPrima = cekPrima(7)
console.log(hasilTambah1)
console.log(hasilTambah2)
console.log(hasilTambah3)
console.log(hasilCekPrima)



