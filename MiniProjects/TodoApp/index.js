window.onload=()=>{

const input=document.querySelector("input");
const button=document.querySelector("button")
const lisst=document.querySelector("ul")
button.addEventListener("click",(e)=>{
    if(input.value==="")return;
    e.preventDefault();
    const line=document.createElement("li");
    const pin=document.createElement("button");
    const text=document.createElement("h3");

    const del=document.createElement("button");
    pin.innerHTML='<i class="fas fa-heart"></i>';
    del.innerHTML='<i class="fas fa-trash"></i>';

    pin.classList.add("pin");
    text.textContent=input.value;
    line.appendChild(text);
    line.classList.add("line");
    lisst.appendChild(line);
    line.appendChild(pin);
    line.appendChild(del);
    input.value="";

})
}