const userForm = document.querySelector("#user_form")
const forum = document.querySelector('#forum')
const alertMsg = document.querySelector('.alert')
console.log(userForm)
console.dir(userForm)
fetch('http://user08.test1.seschool.ru:3000/api/ov4/').then(response => {
    if (response.ok) return response.json()
}).then(messsages => {
    console.log(messsages)
})

userForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const formData = new FormData(userForm)
    if (!(userForm[0].value && userForm[1].value && userForm[2].value)) {
        const errorMsg = (userForm[0].value ? '' : 'Введите имя<br>') + 
            (userForm[1].value ? '' : 'Введите email<br>') +
            (userForm[2].value ? '' : 'Введите сообщение<br>')
        alertMsg.innerHTML = errorMsg
        // alertMsg.style.display = 'block'
        alertMsg.classList.add('show')
        return
    }

    alertMsg.innerHTML = ''
    // alertMsg.style.display = 'none'
    alertMsg.classList.remove('show')

    const userMessage = {
        userName: userForm[0].value,
        userEmail: formData.get('user_email'),
        userMessage: formData.get('user_message')
    }
    userForm[0].value = ''
    userForm[1].value = ''
    userForm[2].value = ''

    forum.insertAdjacentHTML('afterbegin', `<li class="list-group-item">
        <span>${userMessage.userName}: </span>
        <span>${userMessage.userMessage}</span>
    </li>`)
})


// function sumFunc(arg1, arg2, arg3) {
//     // let arg1, arg2, arg3
//     return arg1+arg2+arg3
// }

// let obj = {
//     a: 1
// }
// obj.b = 2

// let linkToFunc = sumFunc
// linkToFunc.someProperty = 'Hello'

// let result = sumFunc(1,2,3)
// // console.log(result)

// // console.log('Compare functions: ' + (linkToFunc == sumFunc))
// // console.log(sumFunc.someProperty)

// let resultMul = (function (arg1, arg2) {
//     return arg1 * arg2
// })(4,5)

// // console.log(resultMul)

// // const obj2 = 'Hello'

// const button = document.querySelector('#click')
// const userName = document.querySelector('input') // $(selector)
// const inputValue = document.querySelector('#input-value')

// const inputs = document.querySelectorAll('input') // $(selector)

// button.addEventListener('click', function (event) {
//     inputValue.innerText = userName.value
//     console.log(event)
// })

// const inputListener = function (event) {
//     const input = event.target
//     inputValue.innerText = input.value
// }

// for (const input of inputs) {
//     // console.log(input)
//     input.addEventListener('input', inputListener);
// }


// userName.addEventListener('input', inputListener)
// console.log('Step 1')
// alert('Step 2') // Bad way
// console.log('Step 3')