const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('password must be longer than 5 characters')
  } else {
    alert("succesful login")
  }

  // if (password.value.length >= 15) {
  //   messages.push('password must be less than 15 characters')
  // }
  


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})





