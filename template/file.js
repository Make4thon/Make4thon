function openNav() {
    document.getElementById("mySidebar").style.width = "550px";
    document.getElementById("main").style.marginLeft = "550px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}



function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}