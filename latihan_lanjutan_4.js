function tambah(a,b) {
    let hasil = a + b
    return hasil
}

function kurang(a,b) {
    let hasil = a - b 
    return hasil
}

function bagi(a,b) {
    let hasil = a / b 
    return hasil
}

function kali(a,b) {
    let hasil = a * b 
    return hasil
}


function tampilkan(callback,a,b) {
    let output = callback(a,b)
    console.log(output)
}

tampilkan(tambah, 10, 30)
tampilkan(kurang, 10, 5)
tampilkan(bagi, 10, 5)
tampilkan(kali, 10, 5)