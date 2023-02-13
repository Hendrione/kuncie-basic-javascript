
let kata = "Kasur Nababan Rusak"
//normalisasi
kata = kata.toLowerCase()
//split
let kataArray = kata.split('')
kataArray.reverse()
let kataDibalik = kataArray.toString()
//hapus koma
kataDibalik = kataDibalik.replaceAll(',','')

if(kata === kataDibalik) {
    console.log('palindrom')
}else {
    console.log('Bukan Palindrome')
}
