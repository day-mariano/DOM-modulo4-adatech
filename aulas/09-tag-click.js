document.addEventListener( 'click' , function(event){
  // console.log("e", event)
  // console.log("target", event.target)
  // console.log("currentTarget", event.currentTarget)
})

const btTop = document.getElementById("go-to-top")
btTop.addEventListener("click", onClickBtTop.bind(this, 'meutexto'))

function onClickBtTop(e,event) {
  console.log('e:', event)
  window.scrollTo(0,0)
}