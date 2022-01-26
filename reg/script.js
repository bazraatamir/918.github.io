let userName=document.getElementById("txtUserName");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form");

function validateInput(){
    if(userName.value.trim()===''){
        onError(userName,"neree oruul")
    }else{
        onSuccess(userName)
    }
    if(pwd.value.trim()===""){
        onError(pwd,"pwd oruul");
     }else{
         onSuccess(pwd);
     }
     if(conPwd.value.trim()===""){
        onError(conPwd,"conpwd oruul");
     }else{
         if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"pwd taarahgvi bn");
         }
         else
         onSuccess(conPwd);
     }
    }

    document.querySelector("button")
    .addEventListener("click",(event)=>{
        event.preventDefault();
        validateInput();
    });

    function onSuccess(input){
        let parent=input.parentElement;
        let messageEle=parent.querySelector("small");
        messageEle.style.visibility="hidden"; 
    }
    function onError(input,message){
        let parent=input.parentElement;
        let messageEle=parent.querySelector("small");
        messageEle.style.visibility="visible";
        messageEle.innerText=message;  
        
    }
    