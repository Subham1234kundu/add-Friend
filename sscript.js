let msg = document.getElementById("msg");
let req = 0;
document.getElementById("addFrnd").addEventListener("click",function(){
    if(req == 0){
        this.innerText = "cancel request"
        this.style.backgroundColor = "rgb(76, 76, 76)";
        msg.style.backgroundColor = "rgb(56, 56, 255)";
        req = 1;
    }else{
        this.innerText ="Add friend";
        this.style.backgroundColor = "rgb(56, 56, 255)";
        msg.style.backgroundColor = "rgb(76, 76, 76)";
        req = 0;
    }
    
})