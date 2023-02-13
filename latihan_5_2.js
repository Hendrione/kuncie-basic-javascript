let n = 7

let counter = 0
for(let i = 0; i <= n; i++){
    let hasilModulus = n % i
    if(hasilModulus == 0){
        counter++
    }
}

//habis dibagi satu dan bilangan itu sendiri, maka counter jumlahnya 2
if(counter == 2){
    console.log('Bilangan Prima')
}else{
    console.log('Bukan Bilangan Prima')
}