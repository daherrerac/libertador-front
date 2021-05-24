function openNav() {
    document.getElementById("mySidenav").style.width = "270px";
    document.getElementById("overlay").style.display = "block";
    document.getElementsByClassName("menu")[0].style.display ="none";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlay").style.display = "none";
    document.getElementsByClassName("menu")[0].style.display ="block";
}

if(document.getElementById('exampleModal')){
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: true
    })
    myModal.show();
}