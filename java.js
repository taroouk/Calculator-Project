let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {button.addEventListener('click' , (e) => {
    
    if(e.target.innerHTML == '='){
        string = eval(string);
        input.value = string;
    } 
    else if(e.target.innerHTML == 'AC'){
        string = "";
        input.value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
        string = string.slice (0,- 1);
        input.value = string;
    }
    else{
        string += e.target.innerHTML;
        input.value = string;
    }
    
})})
function onClick(){
    try {
        let result = eval(input.value);
        if (result === undefined || result === null || isNaN(result)) {
            window.alert("UNDEFINED INPUT");
            input.value = '0';
        } else {
            input.value = result;
        }
    } catch (e) {
        window.alert("UNDEFINED INPUT");
        input.value = '0';
    }
}
