function checkAnswer() {

    var num = document.getElementById("num").value;
    alert(num);

}
function randomNumbers() {
    var num = parseInt(Math.random()*10)+1;
    document.getElementById("num").value = num;
    var num2 = parseInt(Math.random()*10)+1;
    document.getElementById("num2").value = num2;

    var num3 = parseInt(Math.random() * 10) + 1;
    document.getElementById("num3").value = num3;
    var num4 = parseInt(Math.random() * 10) + 1;
    document.getElementById("num4").value = num4;

    var num5 = parseInt(Math.random() * 10) + 1;
    document.getElementById("num5").value = num5;
    var num6 = parseInt(Math.random() * 10) + 1;
    document.getElementById("num6").value = num6;

    var num7 = parseInt(Math.random() * 10) + 1;
    document.getElementById("num7").value = num7;
    var num8 = parseInt(Math.random() * 10) + 1;
    document.getElementById("num8").value = num8;

    var num9 = parseInt(Math.random() * 10) + 1;
    document.getElementById("num9").value = num9;
    var num10 = parseInt(Math.random() * 10) + 1;
    document.getElementById("num10").value = num10;
}                                                                           
function sum() {
    var num = parseInt(document.getElementById("num").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var answer =parseInt(document.getElementById("sum").value);
    if (num + num2 == answer) {
        document.getElementById("msgPlus").innerHTML = "יפה מאוד";
    }
    else {
      document.getElementById("msgPlus").innerHTML = "נסה שנית";

    }
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    var answer1 = parseInt(document.getElementById("sum1").value);
    if (num3 - num4 == answer1) {
        document.getElementById("msgMinus").innerHTML = "יפה מאוד";
    }
    else {
        document.getElementById("msgMinus").innerHTML = "נסה שנית";

    }
    var num5 = parseInt(document.getElementById("num5").value);
    var num6 = parseInt(document.getElementById("num6").value);
    var answer2 = parseInt(document.getElementById("sum2").value);
    if (num5 * num6 == answer2) {
        document.getElementById("msgCafol").innerHTML = "יפה מאוד";
    }
    else {
        document.getElementById("msgCafol").innerHTML = "נסה שנית";

    }
    var num7 = parseInt(document.getElementById("num7").value);
    var num8 = parseInt(document.getElementById("num8").value);
    var answer3 = parseInt(document.getElementById("sum3").value);
    if (num7 / num8 == answer3) {
        document.getElementById("msgDevide").innerHTML = "יפה מאוד";
    }
    else {
        document.getElementById("msgDevide").innerHTML = "נסה שנית";

    }
    var num9 = parseInt(document.getElementById("num9").value);
    var num10 = parseInt(document.getElementById("num10").value);
    var answer4 = parseInt(document.getElementById("sum4").value);
    if (num9 % num10 == answer4) {
        document.getElementById("msgPrecent").innerHTML = "יפה מאוד";
    }
    else {
        document.getElementById("msgPrecent").innerHTML = "נסה שנית";

    }
}
