let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

data = {
    ...data, //spread data
    name : "ariel",
    email : "arielirmawan@gmail.com",
    hobby : "Basketball, gamming",
}
// console.log(data)

let { street : alamat , city : kota} = data.address; //destructuring
console.log(alamat , kota )
// console.log(data)

// let vari = []

// vari.map(()=>{})