var detail = 0;
var elt = document.getElementsByTagName('button');

addEventListener("load", function () {

    for (var i = 0; i < elt.length; i++) {

    elt[i].addEventListener("click", function() {
        if (detail === 0) {
            document.getElementById('1st').style.display = "flex";
            detail = 1;
        } else {
            document.getElementById('1st').style.display = "none";
            detail = 0;
        }
    })

    }
    
});
