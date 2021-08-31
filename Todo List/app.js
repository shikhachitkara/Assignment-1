// const { getgid } = require("process");
var a=[];
const btn=document.getElementById('add');
const val=document.getElementById('gg');
const ull=document.querySelector('.ul');

const savee=document.getElementById("save");
const saveBtn=document.getElementById("save").addEventListener("click",function(){
    
const hideVal=document.getElementById("hideval").value;    
a[hideVal]=val.value;
addtask();
val.value="";

btn.style.display="inline-block"
savee.style.display="none"
});




function deletee(id){

    a.splice(id,1);
addtask();
}

function moveup(id){
    if(id>0){
var temp=a[id];
a[id]=a[id-1];
a[id-1]=temp;}


addtask();

}
function movedown(id){
    if(id<a.length-1){
        var temp=a[id];
        a[id]=a[id+1];
        a[id+1]=temp;}
      
    addtask();
}

function edittask(id){
    const temp=a[id];
     val.value=temp;
const hideVal=document.getElementById("hideval");    
hideVal.value=id;
btn.style.display="none"
savee.style.display="inline-block"
}
function addtask(){
    
let html="";
a.forEach((element,id)=> {
   
    html+= `<li class="list">${element} 
    <span class="hel">
    <i onclick="deletee(${id})" class="t fas fa-trash-alt"></i>
    <i onclick={edittask(${id})} class="t fas fa-user-edit"></i> <i onclick="moveup(${id})" class="t fas fa-caret-up"></i> <i onclick="movedown(${id})" class="t fas fa-angle-down"></i></span>
    </li> ` ;
   });
   ull.innerHTML=html;
}

btn.addEventListener("click",(e)=>{
const inp=val.value;
if(inp!==""){
a.push(inp);
}
else{
    alert(`Value is empty`)
}
addtask();

val.value="";
})


const low=()=>{
    val.classList.add("glowing");
}