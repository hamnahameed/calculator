function getNum(num) {
var answer=document.getElementById("answer")
    answer.value +=num
}


function clearResult() {
    var answer = document.getElementById("answer");
    answer.value = ""
}

function getResult() {
    var answer = document.getElementById("answer");
    answer.value = eval(answer.value)
}




function square(){

    var answer=document.getElementById("answer")
    answer.value=answer.value*answer.value;
}

function root(){
    var answer = document.getElementById("answer");
    answer.value=Math.sqrt(answer.value)
}

function sin(){
    var answer = document.getElementById("answer");
    answer.value=Math.sin(answer.value)
}

function cos(){
    var answer = document.getElementById("answer");
    answer.value=Math.cos(answer.value);
}

function tan(){
    var answer = document.getElementById("answer");
    answer.value=Math.tan(answer.value)
}



function del() {
    var answer = document.getElementById("answer");
    answer.value = answer.value.substring(0, answer.value.length - 1)
}