//Menu
function openNav() {
    document.getElementById("mySidenav").style.width = "270px";
    document.getElementById("overlay").style.display = "block";
    document.getElementsByClassName("menu")[0].style.display ="none";
    document.getElementsByClassName("abrir")[0].style.display ="none";
    document.getElementsByClassName("cerrar")[0].style.display ="block";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlay").style.display = "none";
    document.getElementsByClassName("menu")[0].style.display ="block";
    document.getElementsByClassName("cerrar")[0].style.display ="none";
    document.getElementsByClassName("abrir")[0].style.display ="block";
}