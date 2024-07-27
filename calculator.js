function addToDisplay(value){
    document.getElementById('screen-show').value += value;
}
function clearScreen(){
    document.getElementById('screen-show').value = '';
}
function calculate(){
    let result = eval(document.getElementById('screen-show').value);
        document.getElementById('screen-show').value = result;
}
function factorial(){
        let n = Number(document.getElementById('screen-show').value);
        console.log(n);
        let p = 1;
        for (i=1; i<=n; i++){
            p = p*i;
        }
        let result=String(p);
        document.getElementById('screen-show').value = result;   
}
function deleteNumber(){
    let number=document.getElementById('screen-show').value;
    number= number.slice(0, -1);
    document.getElementById('screen-show').value = number;
    
}