function clickButton() {
    let texto= document.getElementById("teste")
    texto.innerHTML = `
    Clique nesse botão: <button onclick="cliqueNovoBotao()">Novo Botão</button>
    `

}
function cliqueNovoBotao() {
    alert("Novo botão clicavel")
}