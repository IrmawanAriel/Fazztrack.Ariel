const names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']

function validator(find) {
    if(find.length <= 3){
        return find
    } 
    return false
}

function findName(input,x,callback ) {

    let result = callback(input);
    if(result){
        result = names.filter( item => item.toLowerCase().includes(result.toLowerCase()));
        console.log(result.slice(0,x))
        return
    }
    console.log('input harus <= 3 huruf, dan parameter ke 2 harus berupa number')
    return
}

findName('a', 3, validator)


