label=document.getElementById("label")
decreasing=document.getElementById("decreasing")
reset=document.getElementById("reset")
increasing=document.getElementById("increasing")
let count=0;

increasing.onclick=function(){
    count+=1;//count++
    label.textContent=count;

}
decreasing.onclick=function(){
    count-=1;//count--
    label.textContent=count;

}
reset.onclick=function(){
    count=0;
    label.textContent=count;

}

