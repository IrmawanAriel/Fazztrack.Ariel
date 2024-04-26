const Segitiga = 0;

if (Segitiga == undefined || typeof Segitiga !== 'number' || Segitiga == 0) {
    console.log ('Data harus number > 0')
    return
} else {

    for (let i = Segitiga; i>=1; i--){
        let string = ""
        for (let j = 1 ; j<=i; j++){
            string += j + ' ';
        }
        console.log(string);
    }
    
}

