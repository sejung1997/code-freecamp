const email = 'codecamp@gmail.com'
undefined
email.includes('@')
true
email.split('@')
(2) ['codecamp', 'gmail.com']
email.split('@')[0]
'codecamp'
const user
VM2961:1 Uncaught SyntaxError: Missing initializer in const declaration
const userMail = email.split('@')[0]
undefined
userMail
'codecamp'
const company = email.split('@')[1]
undefined
company
'gmail.com'
const maskingMail = []
maskingMail.push(user[0])
maskingMail.push(user[1])
maskingMail.push(user[2])
maskingMail.push(user[3])
maskingMail.push('*')
maskingMail.push('*')
maskingMail.push('*')
maskingMail.push('*')

console.log(maskingMail)
//(8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingMail.join('@')
// 'c@o@d@e@*@*@*@*'
maskingMail.join('')
// 'code****'
let result = maskingMail.join('')+'@'+company
// undefined
result
// 'code****@gmail.com'