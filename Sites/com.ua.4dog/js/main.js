window.onload = function () {

};

function say(inf) {
    var infValues = inf.childNodes;
    var tagChildName = "";
    for (var i = 0; i < infValues.length; i++) {
        tagChildName = infValues[i];
        console.log(tagChildName.tagName);
        if (tagChildName.tagName.toUpperCase() === "P") {
            // alert(tagChildName.textContent);
        } else {
            // alert('NOP');
        }
    }
}
