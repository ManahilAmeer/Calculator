// Function to clear the screen
function Clear(){
    document.getElementById('result').value="";
}
// Function to display the given value on screen 
function display(value){
    document.getElementById('result').value+=value;
}
// Function to Compute the written expression 
function compute(){
    var demo=document.getElementById('result').value;
    // Error handling
    try{
        var res = eval(demo);
    }
    catch(e){
        res = "Invalid Expression!!";
    }
    document.getElementById("result").value = res;
}