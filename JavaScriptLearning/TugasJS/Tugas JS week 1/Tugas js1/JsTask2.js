const Matematika = 98
const IPA = 90
const BIndo = 95
const BIng = 100

if (typeof BIng !== 'number' || 
    typeof Matematika !== 'number'|| 
    typeof IPA !== 'number' || 
    typeof BIndo !== 'number' || 
    Matematika == undefined ||
    BIng == undefined ||
    BIndo == undefined ||
    IPA == undefined ||
    Matematika > 100 ||
    BIndo > 100 ||
    BIng > 100 ||
    IPA > 100 ) {
        console.log("Masukan input dalam bentuk angka <= 100 dan input nilai secara lengkap");
        return; 
} else {
    let RataRata = (BIng + Matematika + IPA + BIndo)/4; 

    if (RataRata >= 90){
        console.log(
`Rata-rata =  ${RataRata}  
Grade = A`);
    } else if (RataRata >= 80 && RataRata < 90){
        console.log('Rata-rata = '+ RataRata + '\nGrade = B');
    } else if (RataRata >= 70 && RataRata < 80){
        console.log('Rata-rata = '+ RataRata + '\nGrade = C');
    } else if (RataRata >= 60 && RataRata < 70){
        console.log('Rata-rata = '+ RataRata + '\nGrade = D');
    } else {
        console.log('Rata-rata = '+ RataRata + '\nGrade = E');
    }

}