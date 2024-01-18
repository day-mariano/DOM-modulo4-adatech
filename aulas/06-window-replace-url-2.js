const url = new URL(window.location.href)
url.searchParams.set('param1', "conteudoDiferente")
window.location.href = url.href;

console.log('url:', url.searchParams.get('param1'))