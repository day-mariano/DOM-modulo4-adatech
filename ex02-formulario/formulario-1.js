const meuForm = document.getElementById("meuFormulario")

// meuForm.addEventListener('submit', function(){
  
// })

function enviarFormulario(event){
  console.log('event:' , event)
  event.preventDefault();
  const thisForm = event.target;

  const formData = new FormData(thisForm);

  // console.log('forData:', formData)
  // console.log('keys:', [...formData.keys()])
  // console.log('values:', [...formData.values()])
  console.log('get:', formData.get('nome'))

  const checkNome = formData.get('nome').trim();

  if(!checkNome) {
    nome.classList.add('erro')
  }

  const values = [...formData.values()];

  values.forEach(item => {
    console.log('item atual -->', item)
  })

  // const nome = thisForm.querySelector('#nome');
  // const email = thisForm.querySelector('#email')
  // const idade = thisForm.querySelector('#idade')
  // const cargo = thisForm.querySelector('#cargo')
}

// console.log('Cargo:', cargo.value)

function limparFormulario(event) {
  meuForm.reset()
}