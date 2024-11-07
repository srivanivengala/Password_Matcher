function validate(){
    const inp1 = document.getElementById("inp1").value;
    const inp2 = document.getElementById("inp2").value;
    const message=document.getElementById("message");

    if(inp1===inp2){
         message.innerText="Password is matched";
         message.style.color="green";
    }
    else{
          message.innerText="Password does not match";
          message.style.color="red";
    }
   
}