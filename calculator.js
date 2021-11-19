function Clear(){
    document.getElementById('result').value="";
}
function display(value){
    document.getElementById('result').value+=value;
}
function compute(){
    var demo=document.getElementById('result').value;
    var res=eval(demo);
    document.getElementById('result').value=res;
}