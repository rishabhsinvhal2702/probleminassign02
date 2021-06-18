if (screen.width < 500) {
    var side = 400;
}
else if (screen.width >= 500) {
    var side = 480;
}
var m = 3;
var n = 3;
var i, j;

var helpc = document.getElementsByClassName("helping-container");

if (m > n) {
    var dside = side / m;
}
else if (n >= m) {
    var dside = side / n;
}

if (n > m) {
    var newh = 10.2 + (m * (dside + 2.4));
    helpc[0].style.height = newh + "px";
}
else if (m > n) {
    var neww = (n * (dside + 2.4));
    helpc[0].style.width = neww + "px";
}

let box = document.getElementsByClassName("container");

function creatediv(dside) {
    box[0].innerHTML = "";
    var num = 1;
    for (i = 0; i < m; i++) {
        b = document.createElement("div");
        b.className = "row row-cols-auto justify-content-md-center";
        b.style.backgroundColor = "black";
        if (m > n) {
            b.style.width = "fit-content";
        }
        box[0].appendChild(b);

        var fside = dside / 2;

        for (j = 0; j < n; j++) {
            a = document.createElement("div");
            a.className = "col " + num;
            a.id = (i + 1) + "r" + (j + 1);
            a.style.width = dside + "px";
            a.style.height = dside + "px";
            a.style.fontSize = fside + "px";
            a.innerHTML = num
            b.appendChild(a);
            num++;

        }
    }
    d = document.getElementById(m + "r" + n);
    d.style.opacity = "0";
    d.style.visibility = "hidden";
}

creatediv(dside);

var hgtValue = document.getElementsByClassName("h-value");
var wdtValue = document.getElementsByClassName("w-value");
var hgt = document.getElementsByClassName("height");
var wdt = document.getElementsByClassName("width");
var cncl = document.getElementsByClassName("cancel-popup");

hgtValue[0].innerHTML = m;
wdtValue[0].innerHTML = n;

hgt[0].onclick = function () {

    if (m < 8) {
        m++;
    }
    else {
        m = 3;
    }

    hgtValue[0].innerHTML = m;
    creatediv(dside);

    moveTile();
    shuffle();

};

wdt[0].onclick = function () {

    if (n < 8) {
        n++;
    }
    else {
        n = 3;
    }

    wdtValue[0].innerHTML = n;
    creatediv(dside);

    moveTile();
    shuffle();

};

cncl[0].onclick = function () {
    if (m > n) {
        var dside = side / m;
    }
    else if (n >= m) {
        var dside = side / n;
    }

    if (n > m) {
        var newh = 10.2 + (m * (dside + 2.4));
        helpc[0].style.height = newh + "px";
    }
    else if (m > n) {
        var neww = (n * (dside + 2.4));
        helpc[0].style.width = neww + "px";
    }
    else if (m = n) {
        var newh = 10.2 + (m * (dside + 2.4));
        helpc[0].style.height = newh + "px";
        var neww = (n * (dside + 2.4));
        helpc[0].style.width = neww + "px";
    }
    creatediv(dside);

    moveTile();
    shuffle();
};

function swapBlock(x, y) {
    var nerVar1 = document.getElementsByClassName(x)[0];
    var newVar2 = document.getElementsByClassName(y)[0];
    newVar3 = nerVar1.className;
    nerVar1.className = newVar2.className;
    newVar2.className = newVar3;

    var newtext = document.getElementsByClassName(x)[0].innerHTML;
    document.getElementsByClassName(x)[0].innerHTML = document.getElementsByClassName(y)[0].innerHTML;
    document.getElementsByClassName(y)[0].innerHTML = newtext;
}

function clickBlock2(crow, ccoloumn, newcrow, newccoloumn) {
    console.log("bhai");

    var mycell = document.getElementById(crow + "r" + ccoloumn);
    var blankcell = document.getElementsByClassName("col " + (m * n))[0];
    var mytile = mycell.className;
    if (mytile != "col " + (m * n)) {

        if (ccoloumn < n) {
            // var nearcell = document.getElementById(crow + "r" + (ccoloumn + 1));

            if (document.getElementById(crow + "r" + (ccoloumn + 1)).className == "col " + (m * n)) {
                mycell.style.opacity = "0";
                mycell.style.visibility = "hidden";
                blankcell.style.opacity = "1";
                blankcell.style.visibility = "visible";
                // swapBlock(document.getElementById(crow + "r" + ccoloumn).className, document.getElementById(crow + "r" + (ccoloumn + 1)).className);
                swapBlock(document.getElementById(crow + "r" + ccoloumn).className, document.getElementsByClassName("col "+(m*n))[0].className);
                
                if(newccoloumn!=ccoloumn){
                    clickBlock2(crow,(ccoloumn-1), newcrow, newccoloumn);
                }
            }
            else{
                clickBlock2(crow,(ccoloumn+1),newcrow, newccoloumn);
            }
        }
        
        if (ccoloumn > 1) {
            if (document.getElementById(crow + "r" + (ccoloumn - 1)).className == "col " + (m * n)) {
                mycell.style.opacity = "0";
                mycell.style.visibility = "hidden";
                blankcell.style.opacity = "1";
                blankcell.style.visibility = "visible";
                swapBlock(document.getElementById(crow + "r" + ccoloumn).className, document.getElementById(crow + "r" + (ccoloumn - 1)).className);
            }
        }
        if (crow > 1) {
            if (document.getElementById((crow - 1) + "r" + ccoloumn).className == "col " + (m * n)) {
                mycell.style.opacity = "0";
                mycell.style.visibility = "hidden";
                blankcell.style.opacity = "1";
                blankcell.style.visibility = "visible";
                swapBlock(document.getElementById(crow + "r" + ccoloumn).className, document.getElementById((crow - 1) + "r" + ccoloumn).className);
            }
        }
        if (crow < m) {
            if (document.getElementById((crow + 1) + "r" + ccoloumn).className == "col " + (m * n)) {
                mycell.style.opacity = "0";
                mycell.style.visibility = "hidden";
                blankcell.style.opacity = "1";
                blankcell.style.visibility = "visible";
                swapBlock(document.getElementById(crow + "r" + ccoloumn).className, document.getElementById((crow + 1) + "r" + ccoloumn).className);
            }
        }
    }
}
shuffle();
moveTile();


function moveTile() {
    var p, q;
    for (p = 0; p < m; p++) {
        for (q = 0; q < n; q++) {
            var ocell = document.getElementById((p + 1) + "r" + (q + 1));
            ocell.setAttribute("onClick", "clickBlock2(" + (p + 1) + "," + (q + 1) + "," + (p + 1) + "," + (q + 1) + ");");
            win();
        }
    }
}

function increaseCount() {
    var mystepcounts = 0;
    mystepcounts++;
    document.getElementsByClassName("gamet")[0].innerHTML = mystepcounts;
}



document.getElementsByClassName("new-game")[0].onclick = function () {
    shuffle();
};

var myrow, mycolumn;
function shuffle() {
    for (myrow = 1; myrow <= m; myrow++) {
        for (mycolumn = 1; mycolumn <= n; mycolumn++) {

            var myrow2 = Math.floor(Math.random() * (m) + 1);
            var mycolumn2 = Math.floor(Math.random() * (n) + 1);

            if (document.getElementById(myrow + "r" + mycolumn).className != "col " + (m * n) && document.getElementById(myrow2 + "r" + mycolumn2).className != "col " + (m * n)) {
                swapBlock(document.getElementById(myrow + "r" + mycolumn).className, document.getElementById(myrow2 + "r" + mycolumn2).className);
            }
        }
    }
    moveTile();
}



function win() {
    var mycount = 1;
    var k, l;
    for (k = 1; k <= 3; k++) {
        for (l = 1; l <= 3; l++) {
            if (document.getElementById(k + "r" + l).innerHTML == mycount) {
                mycount++;
            }
        }
    }
    if (mycount == ((m * n) + 1)) {
        // write the statement here 
    }
}
// function clickBlock(ntile){

//     var ftile = document.getElementById(ntile);

//     if (document.getElementById(ntile+1).className == "col "+(m*n)){
//         ftile.style.opacity = "0";
//         ftile.style.visibility = "hidden";
//         document.getElementById(ntile+1).style.opacity = "1";
//         document.getElementById(ntile+1).style.visibility = "visible";
//         var myvar1 = ftile.className;
//         var myvar2 = document.getElementById(ntile+1).className;

//         swapBlock(myvar1,myvar2);
//     }

//     else if (document.getElementById(ntile-1).className == "col "+(m*n)){
//         ftile.style.opacity = "0";
//         ftile.style.visibility = "hidden";
//         document.getElementById(ntile-1).style.opacity = "1";
//         document.getElementById(ntile-1).style.visibility = "visible";
//         var myvar1 = ftile.className;
//         var myvar2 = document.getElementById(ntile-1).className;

//         swapBlock(myvar1, myvar2);
//     }

//     else if (document.getElementById(ntile-n).className == "col "+(m*n)){
//         ftile.style.opacity = "0";
//         ftile.style.visibility = "hidden";
//         document.getElementById(ntile-n).style.opacity = "1";
//         document.getElementById(ntile-n).style.visibility = "visible";
//         var myvar1 = ftile.className;
//         var myvar2 = document.getElementById(ntile-n).className;


//         swapBlock(myvar1, myvar2);
//     }

//     else if (document.getElementById(ntile+n).className == "col "+(m*n)){
//         ftile.style.opacity = "0";
//         ftile.style.visibility = "hidden";
//         document.getElementById(ntile+n).style.opacity = "1";
//         document.getElementById(ntile+n).style.visibility = "visible";
//         var myvar1 = ftile.className;
//         var myvar2 = document.getElementById(ntile+n).className;

//         swapBlock(myvar1, myvar2);
//     }

// }

// for (i=1; i<=9; i++){
//     var testb = document.getElementsByClassName(i)[0];
//     testb.setAttribute("onClick","clickBlock("+i+");");
// }
// testb = document.getElementById("6");
// testb.onclick = function(){
    // clickBlock(6);
// };

// hardtest = document.getElementsByClassName("9")[0];
// hardtest.innerHTML = "27";
