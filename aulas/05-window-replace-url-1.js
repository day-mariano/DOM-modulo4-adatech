let result;

//pegar querys/searchs de uma URL

const uRLSearchParams = new URLSearchParams(window.location.search)
result = uRLSearchParams.length('param2')

uRLSearchParams.set('param1', 'contreudoAtualizado')

const newURL = `${window.location.orign}${window.location.pathname}?${uRLSearchParams.toString()}`

function trocarURL() {
  console.log('timerfuncionou')
  window.location.replace(newURL);
}

setTimeout(trocarURL, 5000)

console.log('result:', newURL)
