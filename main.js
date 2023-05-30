const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)
function onSubmit(e){
    e.preventDefault()

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'
        setTimeout(() => msg.remove(), 3000)
    }else{
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} `))
        userList.appendChild(li)
        var deleteBtn = document.createElement('button')
        deleteBtn.className='btn btn-sm float-right delete'
        deleteBtn.appendChild(document.createTextNode('Delete'))
        deleteBtn.onclick=()=>{
            localStorage.removeItem(myObj.email)
            userList.removeChild(li)
        }
        li.appendChild(deleteBtn)
        const myObj = {
            username : nameInput.value,
            email : emailInput.value
        }
        localStorage.setItem(JSON.parse(JSON.stringify(myObj.email)), JSON.stringify(myObj))
        //CLear fields
        nameInput.value = ''
        emailInput.value = ''
    }
    
}
