let result;

result = document.body;
result = document.getElementById("tabela1")
result = document.querySelector(".borda")
result = document.querySelector("[target='_black']")
result = document.querySelector("h1").innerText;
result = document.querySelector("h1").textContent;
console.log('result:', result)

result = document.querySelector("#tabela1").innerHTML += `
<tr>
            <th>Dayana</th>
            <th>29</th>
        </tr>
`
function criarConteudo(elemStr) {
  const elemP = document.createElement(elemStr);
  elemP.innerText = "texto dinamico ";

  return elemP
}

result = criarConteudo('p')

const elemntPai = document.body
elemntPai.appendChild(result)

console.log(result)