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

function mic() {
    document.getElementById('inpa').src = 'voice.gif';
    let reco = new webkitSpeechRecognition();
    reco.lang = "en-GB";
    reco.onresult = function(event) {
        console.log(event);
        document.getElementById('inp').value = event.results[0][0].transcript;
    }
}