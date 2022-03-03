let input_queries=[];
let head;
function inputQueries(){
    let q=document.getElementById("number").value;
    if(parseInt(q)<0){
        alert("Queries cannot be negative.");
        document.getElementById("number").value='';
    }
    else{
        input_queries.push(q);
        document.getElementById("number").value='';
    }
}
function addHead(){
    head=document.getElementById('starting').value;
}
function addDirection(){
    var dir = document.getElementsByName('direction');  
        for(i = 0; i < dir.length; i++){
            if(dir[i].checked)
                direction=dir[i].value;
        }
}
export {inputQueries};
export {addHead};
export {addDirection};