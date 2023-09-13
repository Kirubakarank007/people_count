let count=0;
let tot=0;
let co=document.getElementById("enter");
function increment()
{
         count=count+1;
         co.innerText=count;

}
function decrement()
{
        count=count-1;
        co.innerText=count;
    
}
let savenum=document.getElementById("saveel");
function save()
{
    let ans=count+" - ";
    tot+=count;
    savenum.textContent+=ans;
    count=0;
    co.innerText=count;
}
let totel=document.getElementById("total");
function total()
{
    let re=tot;
    totel.textContent=re;
}
