let item_imgs = document.getElementsByClassName('item_imgs')[0]
let transX = Number(window.getComputedStyle(item_imgs,null).transform.split(',')[4].trim())
pleft.addEventListener('click',function(e){
  
  if(transX>0){
    transX-=677
  }
  item_imgs.style.transform = 'translateX(-' + transX + 'px)'
  console.log(transX,e.clientX)

})
pright.addEventListener('click',function(e){
  
  if(transX<6800){
    transX+=677
  }
  item_imgs.style.transform = 'translateX(-' + transX + 'px)'
  console.log(transX,e.clientX)

})
