function Clear(){
    document.getElementById('result').value="";
}
function display(value){
    document.getElementById('result').value+=value;
}
function compute(){
    var demo=document.getElementById('result').value;
    
    try{
        var res = eval(demo);
    }
    catch(e){
        // document.getElementById("result").style.backgroundColor='red';
        res = "You have entered invalid expression!!";
    }
    document.getElementById("result").value = res;
}