var detail = [0,0,0,0,0];
addEventListener("load", function () {
    document.getElementById('dis0').addEventListener("click", function() {
        if (detail[0] === 0) {
            document.getElementById('0').style.display = "flex";    
            detail[0] = 1;
        } else {
            document.getElementById('0').style.display = "none";
            detail[0] = 0;
        }
    });
    document.getElementById('dis1').addEventListener("click", function () {
        if (detail[1] === 0) {
            document.getElementById('1').style.display = "flex";
            detail[1]= 1;
        } else {
            document.getElementById('1').style.display = "none";
            detail[1]= 0;
        }
    });
    document.getElementById('dis2').addEventListener("click", function () {
        if (detail[2] === 0) {
            document.getElementById('2').style.display = "flex";
            detail[2] = 1;
        } else {
            document.getElementById('2').style.display = "none";
            detail[2] = 0;
        }
    });
    document.getElementById('dis3').addEventListener("click", function () {
        if (detail[3] === 0) {
            document.getElementById('3').style.display = "flex";
            detail[3] = 1;
        } else {
            document.getElementById('3').style.display = "none";
            detail[3] = 0;
        }
    });
    document.getElementById('dis4').addEventListener("click", function () {
        if (detail[4] === 0) {
            document.getElementById('4').style.display = "flex";
            detail[4] = 1;
        } else {
            document.getElementById('4').style.display = "none";
            detail[4]= 0;
        }
    });
});
