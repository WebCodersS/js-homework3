// homework - 3 and - 4

let myname = prompt('Ismni kiriting.')
let surname = prompt('Familyani  kiriting.')
let age = prompt('Yoshni kiriting.')

let person = {
    myname: 'Sadriddin',
    surname: 'Xolmatov',
    age: 19,
}
if (age > 18) {
    alert('Password olgansiz va 18 yoshdan kattasiz.')
} else if (age >= 18) {
    alert('Siz 18 yoshdasiz.')
} else {
    alert('Siz 18 yoshdan kichiksiz.')
}


// qushimcha homewrok
let color = prompt('Siz sveatafor rangini kiriting (qizil, sariq, yashil).')
if (color === 'yashil') {
    alert('qizil')
} else if (color === 'sariq') {
    alert('qizil yoki yashil')
} else if (color === 'qizil') {
    alert('sariq')
} else {
    alert('Siz notogri rang kiritgingiz.')
}
