let phoneimg = document.getElementsByClassName('phoneimg')[0]
let style = Number(window.getComputedStyle(phoneimg,null).transform.split(',')[4].trim())
phonetoleft.addEventListener('click',function(){
  style-=300
  if(style<0){
    style = 3000
  }
  phoneimg.style.transform = 'translateX(-' + style + 'px)'
})
phonetoright.addEventListener('click',function(){
  style+=300
  if(style>3000){
    style = 0
  }
  phoneimg.style.transform = 'translateX(-' + style + 'px)'
  console.log(style)

})
