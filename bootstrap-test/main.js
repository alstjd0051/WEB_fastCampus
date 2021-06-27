const emailInputEl = document.querySelector('#exampleInputEmail1')
const modalEl = document.querySelector('#exampleModal')

modalEl.addEventListener('shwon.bs.modal', function () {
  emailInputEl.focus()
})