let resultado;


  history.scrollRestoration = 'auto'
  // window.scrollTo(0,758)

  window.addEventListener('scroll', function () {
    resultado = window.scrollY
    console.log('resultado:', resultado)
  })

