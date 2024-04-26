const inputArray = [1,3,2,4,5,9]
const NilaiAkhir = 9
const NilaiAwal = 1

function validator () {
    if(typeof NilaiAkhir !== 'number' || typeof NilaiAwal !== 'number' || inputArray.length <= 5 || NilaiAkhir < NilaiAwal){
        if(NilaiAkhir < NilaiAwal){
            console.log("Nilai akhir harus lebih besar dari nilai awal.")
            return
        }
        if( inputArray.length <= 5 ){
            console.log('Panjang array harus lebih besar dari 5.')
            return
        }
    } 

    return inputArray;
}

function kalkulasi (valid) {
    if(valid){
        let hasil = valid.filter( item => item > NilaiAwal && item < NilaiAkhir);
        if( hasil.length !==0 ){
            hasil.sort((a,b) => a - b) 
            console.log(hasil);
            return
        }
        console.log('nilai tidak di temukan')
        return
    }
}

kalkulasi(validator());