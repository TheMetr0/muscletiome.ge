window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementsByClassName("navigation_bar")[0].style.cssText =`
    background: black;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    `
    // document.getElementById("logo").style.fontSize = "25px";
    }
else {
    document.getElementsByClassName("navigation_bar")[0].style.cssText =`
    background-color: transparent;
    `
    
  }
}