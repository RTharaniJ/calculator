
let outputScreen = document.getElementById("output-screen");

function display(num) {
    outputScreen.value += num;
}

function clear(){
   document.getElementById('clear-all').value ='';
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

