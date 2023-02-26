document.addEventListener("DOMContentLoaded", () => {
  var mainAside = document.getElementById("sidebar");
  var toggeler = document.getElementsByClassName("mdi-view-headline");
  var dropdown = document.getElementById("dropdown");
  var navUl = document.querySelector("nav ul");
  var dropContent = document.getElementById("dropContent");
  function displayToggle(e,displayType){
    e.style.display === "none" ? e.style.display = displayType : e.style.display = "none";
  }

  toggeler[0].addEventListener("click", function(){
      displayToggle(mainAside,"block");
      displayToggle(navUl,"none");
  });

  dropdown.addEventListener("click",function(){
      displayToggle(navUl,"flex");
      displayToggle(mainAside,"none");
  })

  if(window.innerWidth < 800)
    navUl.prepend(dropContent);
  else 
    dropdown.prepend(dropContent);
  
  window.onresize = function(){
    // window.innerWidth < 800 ? dropContent.style.display = "none" : dropContent.style.display = "block";
    if(window.innerWidth < 800)
      navUl.prepend(dropContent);
    else 
      dropdown.prepend(dropContent);
  }

  // window.addEventListener("resize", function(){
    
  // })
})