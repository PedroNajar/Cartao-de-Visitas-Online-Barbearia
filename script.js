function toggleMode() {
  const html = document.documentElement

  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  leitura do código: Se, quando clicar no HTML, na lista de classe, contém "light", remover o "light".
  Se não tiver o "light", adicionar.
  pode ser representado da forma abaixo pois a ferramenta "toggle" já faz parte do js*/

  html.classList.toggle("light")

  /*para mudar a imagem:
  -pegar a tag img
  const img = document.querySelector("#profile img")
-substituir a imagem
if (html.classList.contains('light)){
  -se tiver light mode, adicionar imagem light
  img.setAttribute("src", "link da imagem light")
  } else {
  -se tiver sem light mode, marter imagem normal
  img.setAttribute("src", "link da imagem normal")
  }*/
}
