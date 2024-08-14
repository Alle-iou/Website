// script.js

document.getElementById('ClickForMoreInfo').addEventListener('click', 
    function() {
    var textElement = document.getElementById('changeableText');
    textElement.textContent = 'New text after click!';
});