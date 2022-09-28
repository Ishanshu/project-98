var SpeechRecognition = window.webkitSpeechReconition;

var recognition = new SpeechRecogintion();

function start()
{
    document.getElementById("texbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

var Content = event.results[0][0].transcript;
console.log(content);

document.getElementById("textbox").innerHTML = Content;
}