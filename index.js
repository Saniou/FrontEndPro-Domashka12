const hoverEl = document.querySelector('#text');
const hoverEl2 = document.querySelector('#ghost');

hoverEl.addEventListener("mouseover", function(){
    hoverEl2.innerHTML = "Invisible Text"  
})
hoverEl.addEventListener("mouseout", function(){
    hoverEl2.innerHTML = " "  
  })