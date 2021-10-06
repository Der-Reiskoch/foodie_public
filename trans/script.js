function transCallback() {
    new google.translate.TranslateElement({pageLanguage: 'de'},'google_translate_element');
    showWip();
    setTimeout(hideWip, 2000);
}

function showWip() {
    var wipDiv = document.getElementById("trans-wip");
    wipDiv.style.display = "flex";
}

function hideWip() {
    var wipDiv = document.getElementById("trans-wip");
    wipDiv.style.display = "none";
}